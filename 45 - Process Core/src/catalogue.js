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

  const GROUPS_SKIP = { _readme: 1, units: 1 };

  function load(data) {
    if (!data || typeof data !== 'object')
      throw new Error('catalogue.load: expected the parsed catalogue object. ' +
                      'This layer does no I/O -- read or fetch the JSON in ' +
                      'the consumer and hand the result here.');

    const parts = {};
    const sources = {};
    const groups = [];

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
      size: Object.keys(parts).length
    });
  }

  LPE.catalogue = { load: load, TOL: TOL, PER_INCH: PER_INCH,
                    parsePrinted: parsePrinted };

})(window.LPE = window.LPE || {});
