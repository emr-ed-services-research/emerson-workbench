/* @layer catalogue
   @core Process Core -- the parts repository.
   May use: nothing. This is the BOTTOM of the stack and depends on no other
   layer; if it ever reaches up to the netlist the dependency is inverted.
   Never: I/O. The core does not fetch, read a file or know a path. A
   consumer hands `load()` already-parsed JSON -- node reads it with fs, a
   browser fetches it -- which is what keeps this file identical in both.
   Never: colour, pixels, behaviour. A part is dimensions and provenance.
   See `00 - Project/Process Core -- Architecture & Build Plan.md` and
   `00 - Project/Process Core -- Component Catalogue.md`.                  */
/* ---------------- CATALOGUE: parts that trace to a source --------------

   A netlist says a run is NPS 1/2. Something has to know what NPS 1/2
   MEANS -- 0.622 in bore, 0.840 in outside, and that those two numbers came
   out of ASME B36.10M rather than somebody's memory. That is this layer.

   THE ONE RULE, enforced at load time: every dimension carries the value as
   printed in its standard alongside the canonical conversion, and `load()`
   RE-DERIVES one from the other and refuses the catalogue if they disagree.

   That is the vault's "never invent" made mechanical. You cannot add a
   number here without saying what the standard actually said, because a
   number with no as-printed counterpart is rejected by name -- and a slip in
   the arithmetic is rejected too, which a reviewer reading JSON would not
   catch. The register says WHICH documents we hold; this says what we read
   out of them, and proves the reading survived the trip.

   Canonical unit is INCHES, because every source the catalogue is currently
   seeded from is an ASME document, and converting the majority to suit the
   minority adds error for nothing.                                       */
'use strict';

(function (LPE) {

  /* Dimensions are inches. A printed value may be in inches, in
     millimetres, or -- as ASME B16.9 prints them -- in both at once, as
     "38 mm (1.50 in)". When a standard gives both, the INCH value is the
     one to trust: it is what the standard says, not what we computed from
     the other column, and the two do not always agree to the digit
     (38 mm is 1.4961 in, and B16.9 prints 1.50). */
  const PER_INCH = { in: 1, mm: 25.4, cm: 2.54, m: 0.0254 };

  function parsePrinted(text, where) {
    if (typeof text !== 'string')
      throw new Error(where + ': as-printed value must be a string, got ' +
                      typeof text);

    /* Prefer a parenthesised inch value when the standard prints both. */
    const dual = text.match(/\(\s*([0-9.]+)\s*in\.?\s*\)/);
    if (dual) return Number(dual[1]);

    const m = text.match(/^\s*([0-9.]+)\s*([a-z]+)\.?\s*$/i);
    if (!m)
      throw new Error(where + ': cannot read as-printed value "' + text +
                      '". Expected "<number> <unit>", optionally followed ' +
                      'by "(<number> in)" when the standard prints both. ' +
                      'Units known: ' + Object.keys(PER_INCH).join(', '));

    const unit = m[2].toLowerCase();
    if (!(unit in PER_INCH))
      throw new Error(where + ': unit "' + m[2] + '" is not one this layer ' +
                      'converts. Known: ' + Object.keys(PER_INCH).join(', ') +
                      '. Add it here rather than pre-converting in the JSON ' +
                      '-- a pre-converted number has nothing left to check.');

    return Number(m[1]) / PER_INCH[unit];
  }

  /* Canonical values are rounded for legibility (4 decimal places is about
     2.5 microns, finer than any fitting tolerance in these standards), so
     the comparison allows that rounding and nothing more. A real
     transcription slip -- a transposed digit, a wrong row -- is orders of
     magnitude larger than this and gets caught. */
  const TOL = 1e-4;

  /* `resistance` is not a parts group. It is a table of BASES -- a
     fitting's loss is a correlation, not a dimension, so it cannot live
     in `dims` and be checked against an as-printed value. Parts point
     at a basis by name; the basis carries the coefficients, the
     publication and the uncertainty. */
  const GROUPS_SKIP = { _readme: 1, units: 1, resistance: 1 };

  const RES_NEED = { 'darby-3k': ['K1', 'Ki', 'Kd'],
                     'hooper-2k': ['K1', 'Kinf'] };

  function load(data) {
    if (!data || typeof data !== 'object')
      throw new Error('catalogue.load: expected the parsed catalogue object. ' +
                      'This layer does no I/O -- read or fetch the JSON in ' +
                      'the consumer and hand the result here.');

    const parts = {};
    const sources = {};
    const groups = [];

    /* The resistance table, checked before anything points at it. A
       basis with no publication is a number somebody liked the look of,
       and a basis with no uncertainty invites being quoted as exact. */
    const bases = {};
    for (const id of Object.keys(data.resistance || {})) {
      if (id.charAt(0) === '_') continue;
      const entry = data.resistance[id];
      const methods = {};
      for (const mk of Object.keys(entry)) {
        if (mk === 'appliesTo') continue;
        const b = entry[mk];
        if (!b || typeof b !== 'object' || b.method !== mk)
          throw new Error('catalogue resistance "' + id + '.' + mk +
            '": a basis must be an object whose `method` matches the key ' +
            'it is filed under, so a copied block cannot end up claiming ' +
            'to be a correlation it is not.');
        const need = RES_NEED[b.method];
        if (!need)
          throw new Error('catalogue resistance "' + id + '": method "' +
            b.method + '" is not one this catalogue knows. Known: ' +
            Object.keys(RES_NEED).join(', ') + '.');
        const miss = need.filter(k => typeof b[k] !== 'number');
        if (miss.length)
          throw new Error('catalogue resistance "' + id + '.' + mk +
            '" is missing ' + miss.join(', ') + '.');
        if (typeof b.source !== 'string' || !b.source.trim())
          throw new Error('catalogue resistance "' + id + '.' + mk +
            '" names no source. A loss coefficient with no publication ' +
            'behind it is exactly what this catalogue exists to refuse.');
        if (typeof b.uncertaintyPct !== 'number')
          throw new Error('catalogue resistance "' + id + '.' + mk +
            '" carries no uncertaintyPct. Published fitting-loss data runs ' +
            '25-30%, and a K stored without its band will be quoted as ' +
            'though it were exact.');
        methods[mk] = Object.freeze(Object.assign({}, b));
      }
      if (!Object.keys(methods).length)
        throw new Error('catalogue resistance "' + id + '" has no methods.');
      bases[id] = Object.freeze(methods);
    }

    for (const g of Object.keys(data)) {
      if (GROUPS_SKIP[g]) continue;
      const group = data[g];
      if (!group || typeof group !== 'object') continue;
      groups.push(g);

      const src = group._source || group._note;
      if (!src)
        throw new Error('catalogue group "' + g + '" names no source. Every ' +
                        'group states the document its parts were read out ' +
                        'of; a group without one is a pile of numbers whose ' +
                        'origin nobody can check.');

      for (const id of Object.keys(group)) {
        if (id.charAt(0) === '_') continue;
        const part = group[id];
        const at = 'catalogue part "' + id + '"';

        if (!part.class)
          throw new Error(at + ' has no `class`. A part says what kind of ' +
                          'thing it is, because that is what a consumer ' +
                          'selects on.');

        if (parts[id])
          throw new Error('catalogue id "' + id + '" appears twice. Ids are ' +
                          'the only handle the catalogue has; a duplicate ' +
                          'means one of the two is unreachable.');

        const dims = part.dims || {};
        const printed = part.asPrinted || {};

        for (const k of Object.keys(dims)) {
          const v = dims[k];
          if (typeof v !== 'number' || !isFinite(v) || v <= 0)
            throw new Error(at + ' dimension "' + k + '" is ' + v +
                            '. Dimensions are finite positive inches.');

          if (!(k in printed))
            throw new Error(at + ' gives "' + k + '" as ' + v +
                            ' in but never says what the standard printed. ' +
                            'EVERY dimension carries its as-printed value ' +
                            'beside it -- that pairing is the only thing ' +
                            'standing between this catalogue and a number ' +
                            'somebody remembered. Add asPrinted.' + k + '.');

          const derived = parsePrinted(printed[k], at + ' asPrinted.' + k);
          if (Math.abs(derived - v) > TOL)
            throw new Error(at + ' dimension "' + k + '" does not match ' +
                            'what it says the standard printed: ' + v +
                            ' in recorded, but "' + printed[k] + '" works ' +
                            'out to ' + derived.toFixed(6) + ' in. One of ' +
                            'the two is a transcription error. Go back to ' +
                            'the document rather than adjusting whichever ' +
                            'one looks wrong.');
        }

        /* The reverse direction, so an as-printed value cannot sit there
           unconverted and unchecked. */
        for (const k of Object.keys(printed))
          if (!(k in dims))
            throw new Error(at + ' records what the standard printed for "' +
                            k + '" but no canonical value. An as-printed ' +
                            'value nothing converts is a number no consumer ' +
                            'can use and no test can check.');

        /* A reference that does not resolve is worse than none: it
           looks like the part has a sourced loss when nothing backs it. */
        const refs = part.resistance;
        if (refs !== undefined) {
          const list = (typeof refs === 'string') ? [refs]
            : Object.keys(refs).map(k => refs[k]);
          for (const rid of list)
            if (!bases[rid])
              throw new Error(at + ' points at resistance basis "' + rid +
                '", which the catalogue does not define. Defined: ' +
                Object.keys(bases).join(', ') + '.');
        }

        parts[id] = Object.freeze(Object.assign({ id: id, group: g }, part,
          { dims: Object.freeze(Object.assign({}, dims)),
            asPrinted: Object.freeze(Object.assign({}, printed)) }));
        sources[id] = src;
      }
    }

    function part(id) {
      if (!parts[id])
        throw new Error('no catalogue part "' + id + '". Known ids in this ' +
                        'catalogue: ' + Object.keys(parts).sort().join(', '));
      return parts[id];
    }

    /* Provenance is a first-class query, not a comment. A consumer that
       draws a dimension can say which document and which table it came out
       of, which is what makes the drawing defensible. */
    function sourceOf(id) { part(id); return sources[id]; }

    /* The basis for a part, by method. A tee has two -- run and branch
       -- because no published correlation treats them as one, so the
       path must be named. A part with no basis returns null and the
       caller is expected to say so rather than substitute zero. */
    function resistanceOf(id, method, via) {
      const pt = part(id);
      const refs = pt.resistance;
      if (refs === undefined) return null;
      let rid;
      if (typeof refs === 'string') rid = refs;
      else {
        if (!via)
          throw new Error('catalogue.resistanceOf: "' + id + '" has more ' +
            'than one path (' + Object.keys(refs).join(', ') + ') and they ' +
            'cost different amounts. Name the path.');
        rid = refs[via];
        if (!rid)
          throw new Error('catalogue.resistanceOf: "' + id + '" has no path ' +
            '"' + via + '". It has: ' + Object.keys(refs).join(', ') + '.');
      }
      const m = bases[rid];
      if (!method) return m;
      if (!m[method])
        throw new Error('catalogue.resistanceOf: basis "' + rid + '" carries ' +
          'no "' + method + '". It carries: ' + Object.keys(m).join(', ') +
          '. The methods disagree, so one is never substituted for another.');
      return m[method];
    }

    function where(sel) {
      sel = sel || {};
      return Object.keys(parts).sort().map(k => parts[k]).filter(p => {
        for (const k of Object.keys(sel)) if (p[k] !== sel[k]) return false;
        return true;
      });
    }

    return Object.freeze({
      part: part,
      has: id => !!parts[id],
      ids: () => Object.keys(parts).sort(),
      groups: () => groups.slice(),
      where: where,
      sourceOf: sourceOf,
      resistanceOf: resistanceOf,
      bases: () => Object.keys(bases).sort(),
      size: Object.keys(parts).length
    });
  }

  LPE.catalogue = { load: load, TOL: TOL, PER_INCH: PER_INCH,
                    parsePrinted: parsePrinted };

})(window.LPE = window.LPE || {});
