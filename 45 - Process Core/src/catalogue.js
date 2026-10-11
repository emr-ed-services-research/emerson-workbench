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
  /* ---- WHAT KIND OF QUANTITY IS THIS ---------------------------------

     This layer knew only LENGTHS, which was fine while every part was
     a pipe or a valve body. An actuator is not: its specification is
     an effective AREA, a maximum THRUST, a casing PRESSURE and a
     WEIGHT, and none of those convert like an inch.

     Two things force the kind to be DECLARED rather than sniffed off
     the unit. Fisher's 657 Table 1 prints both the thrust and the
     shipping weight as "Lb" -- the same token for a force and a mass
     -- so the symbol cannot tell you which. And a dimension whose
     kind nobody stated is a dimension whose dual-printed check
     silently does nothing, which is the one failure this layer
     exists to prevent.

     So every dimension name says what it is. Adding a new one without
     saying is refused, by name, with the list of kinds. */
  const UNITS = {
    length:   { in: 1, mm: 25.4, cm: 2.54, m: 0.0254 },
    area:     { in2: 1, cm2: 6.4516, mm2: 645.16 },
    force:    { lb: 1, lbf: 1, N: 4.4482216 },
    /* Gauge and absolute are different readings of the same scale, so
       the arithmetic is shared; which datum a number uses is the
       service's business and travels with the service, not here. */
    pressure: { psi: 1, psig: 1, psia: 1, bar: 0.0689476, kPa: 6.894757 },
    mass:     { lb: 1, kg: 0.45359237 },
    /* Torque canonicalises on pound-force inches, which is how every
       Fisher tightening table prints the number a technician actually
       sets on a wrench. One newton metre is 8.8507 lbf.in, so there
       are 0.11298 N.m to the lbf.in. */
    torque:   { 'lbf.in': 1, 'N.m': 0.1129848, 'lbf.ft': 0.0833333 },
  };
  const KIND_OF = {
    /* pipe, fitting and valve-body geometry -- every name the shipped
       catalogue actually uses, enumerated rather than pattern-matched,
       because a pattern would quietly accept the next typo. */
    bodyWall: 'length', bore: 'length', centreToEnd: 'length',
    centreToSocket: 'length', faceToFace: 'length', fittingBore: 'length',
    od: 'length', odAtBevel: 'length', port: 'length',
    socketBore: 'length', socketDepth: 'length', socketWall: 'length',
    stem: 'length', travel: 'length', wall: 'length',
    /* actuator, from 657 IOM D100306X012 Table 1 */
    yokeBoss: 'length', maxTravel: 'length', stemAccepted: 'length',
    effectiveArea: 'area', maxThrust: 'force',
    maxCasingPressure: 'pressure', maxDiaphragmPressure: 'pressure',
    weight: 'mass',
    /* packing, from D100399X012 Table 6 */
    torqueMin: 'torque', torqueMax: 'torque',
    torqueSpec: 'torque', friction: 'force',
  };
  const kindOf = (name, where) => {
    const k = KIND_OF[name];
    if (!k)
      throw new Error(where + ': dimension "' + name + '" has no declared ' +
        'kind. Say what sort of quantity it is in KIND_OF -- one of ' +
        Object.keys(UNITS).join(', ') + ' -- because the unit alone ' +
        'cannot tell you: Fisher prints a thrust and a shipping weight ' +
        'both as "Lb", and a dimension with no kind gets no check at all.');
    return k;
  };

  function parsePrinted(text, where, kind) {
    const family = UNITS[kind || 'length'];
    if (!family)
      throw new Error(where + ': unknown quantity kind "' + kind + '".');
    if (typeof text !== 'string')
      throw new Error(where + ': as-printed value must be a string, got ' +
                      typeof text);

    /* Prefer a parenthesised inch value when the standard prints both --
       AND CHECK THE OTHER HALF AGAINST IT.

       This used to take the inch and ignore whatever stood in front of
       it, which meant that for a dual-printed dimension the metric value
       was decorative: a transposed digit in "203.2 mm" would sit there
       forever because nothing ever read it. That is the one thing this
       layer exists to prevent, so it is not acceptable in the layer
       itself.

       A document that prints both units has already done the conversion
       once; making the two agree is a free second opinion on the
       transcription, and the only cost is noticing. */
    /* FISHER PRINTS INCHES AS FRACTIONS, so this layer has to read them.

       Table 12 of D100017X012 gives stem diameters as 3/8, 1/2, 3/4,
       1-1/4 and yoke bosses as 2-1/8, 2-13/16, 3-9/16. Not one of those
       is a decimal, and a parser that only reads decimals leaves the
       only honest transcription -- the fraction the page actually
       carries -- unusable. The alternative is converting in the JSON,
       and a pre-converted number has nothing left to check, which is
       the one thing this layer exists to prevent.

       A fraction is EXACT where a decimal is rounded: "3/4 in" is
       0.75 in and not a value rounded to two places, so it gets a
       zero-width band and the metric half has to contain it. */
    const FRAC = /^([0-9]+)(?:[-\s]+([0-9]+)\/([0-9]+))?$|^([0-9]+)\/([0-9]+)$/;
    const readInch = txt => {
      const f = txt.match(FRAC);
      if (f) {
        if (f[4] !== undefined) return { v: Number(f[4]) / Number(f[5]),
                                         exact: true };
        if (f[2] !== undefined) return { v: Number(f[1]) +
                                            Number(f[2]) / Number(f[3]),
                                         exact: true };
      }
      return { v: Number(txt), exact: false };
    };

    /* The parenthesised half is the one the document is quoting in
       the unit we canonicalise on -- inches for a length, square
       inches for an area, pounds for a force or a mass, psi for a
       pressure. Each family names its own. */
    const CANON = { length: 'in', area: 'in2', force: 'lb',
                    pressure: 'psi[ga]?', mass: 'lb',
                    torque: 'lbf\.in' };
    const canon = CANON[kind || 'length'];
    const dual = text.match(new RegExp(
      '\\(\\s*([0-9]+(?:[-\\s][0-9]+\\/[0-9]+|\\.[0-9]+)?|[0-9]+\\/[0-9]+)' +
      '\\s*' + canon + '\\.?\\s*\\)'));
    if (dual) {
      const inchRead = readInch(dual[1]);
      const inch = inchRead.v;
      const lead = text.match(/^\s*([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z][a-zA-Z0-9.]*?)\s*\(/);
      if (lead) {
        /* Case-insensitively, but against the family's own spelling:
           a newton is "N" and a nano-anything is not in this table, so
           lowercasing the token and then looking it up loses it. */
        const unit = Object.keys(family).filter(
          u => u.toLowerCase() === lead[2].toLowerCase())[0];
        if (!unit)
          throw new Error(where + ': unit "' + lead[2] + '" is not a ' +
            (kind || 'length') + '. Known ' + (kind || 'length') +
            ' units: ' + Object.keys(family).join(', '));

        /* COMPARE WHAT EACH HALF CAN MEAN, NOT THEIR BARE RATIO.

           A flat percentage is the wrong test for a document that rounds.
           Catalog 12 prints "29 mm (1.125 in)" -- 1.125 in is 28.575 mm,
           so the millimetre half is off by 1.5%, and it is not an error:
           29 is the nearest whole millimetre and the page prints whole
           millimetres. A tolerance tight enough to catch a transposition
           rejects that honest rounding, and one loose enough to accept it
           catches nothing.

           So each half is read as the INTERVAL its own printed precision
           allows -- half of its last digit either way -- and the two must
           overlap. "29 mm" means [28.5, 29.5] and spans 1.122 to 1.161 in,
           which contains 1.125. A transposed "302.2 mm" spans 11.896 to
           11.900 in and contains no part of what "8 in" can mean, so it is
           still refused. The rule is the document's own precision rather
           than a number somebody picked. */
        /* A TRAILING ZERO MAY NOT BE A DIGIT.

           This took half of the last printed decimal either way,
           which is right for 203.2 and wrong for 1100. Fisher's
           ENVIRO-SEAL friction table rounds its two columns
           independently and coarsely: 4800 N is 1078.9 lb and the
           table prints 1100, 2350 N is 528.3 and it prints 530. Read
           as four significant figures those are transcription
           errors. Read the way the document plainly wrote them --
           newtons to the nearest ten, pounds to the nearest fifty --
           they agree perfectly.

           So the band is half the place value of the last NON-ZERO
           digit, which is the ordinary significant-figures
           convention for a number written without a decimal point.
           "1100" means somewhere near eleven hundred; "1103" means
           1103.

           This is a loosening and worth being honest about. It still
           refuses every transposition the old rule caught -- 302.2 mm
           against 8 in, 203.2 mm against 3 in -- because those differ
           by far more than the rounding of their last significant
           digit. What it stops doing is calling a document wrong for
           rounding the way documents round. */
        const band = (txt, perInch) => {
          const dot = txt.indexOf('.');
          let half;
          if (dot >= 0) {
            half = 0.5 * Math.pow(10, -(txt.length - dot - 1));
          } else {
            let zeros = 0;
            for (let i = txt.length - 1; i >= 0 && txt[i] === '0'; i--)
              zeros++;
            half = 0.5 * Math.pow(10, zeros);
          }
          return { lo: (Number(txt) - half) / perInch,
                   hi: (Number(txt) + half) / perInch };
        };
        const a = band(lead[1], family[unit]);
        const b = inchRead.exact ? { lo: inch, hi: inch } : band(dual[1], 1);
        /* EXACT AGREEMENT IS THE BEST CASE, and it lands on the
           boundary: 19.1 mm is 0.7500 to 0.7539 in and "3/4" is 0.75
           exactly, so the two intervals touch at a single point and
           float arithmetic decides whether they overlap. Compared
           bare, 19.05/25.4 comes back a bit above 0.75 and the check
           rejects the one transcription that is perfectly right.
           A nanoinch of slack settles it and is twelve orders of
           magnitude below anything this check is looking for. */
        const EPS = 1e-9;
        if (a.hi < b.lo - EPS || b.hi < a.lo - EPS)
          throw new Error(where + ': the two halves of "' + text + '" ' +
            'cannot describe the same ' + (kind || 'length') + '. ' +
            lead[1] + ' ' + unit +
            ' allows ' + a.lo.toFixed(4) + ' to ' + a.hi.toFixed(4) +
            '; the printed ' + dual[1] + ' allows ' + b.lo.toFixed(4) +
            ' to ' + b.hi.toFixed(4) + '. They do not overlap, so one ' +
            'was mistyped -- go back to the document rather than deleting ' +
            'whichever half looks wrong.');
      }
      return inch;
    }

    const m = text.match(/^\s*([0-9]+(?:\.[0-9]+)?)\s*([a-zA-Z][a-zA-Z0-9.]*?)\.?\s*$/);
    if (!m)
      throw new Error(where + ': cannot read as-printed value "' + text +
                      '". Expected "<number> <unit>", optionally followed ' +
                      'by "(<number> in)" when the standard prints both. ' +
                      'Units known for a ' + (kind || 'length') + ': ' +
                      Object.keys(family).join(', '));

    const unit = m[2];
    const key = Object.keys(family).filter(
      u => u.toLowerCase() === unit.toLowerCase())[0];
    if (!key)
      throw new Error(where + ': unit "' + m[2] + '" is not a ' +
        (kind || 'length') + '. Known: ' + Object.keys(family).join(', ') +
        '. Add it to the family rather than pre-converting in the JSON ' +
        '-- a pre-converted number has nothing left to check.');

    return Number(m[1]) / family[key];
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

          const derived = parsePrinted(printed[k], at + ' asPrinted.' + k,
                                       kindOf(k, at));
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

  LPE.catalogue = { load: load, TOL: TOL, UNITS: UNITS, KIND_OF: KIND_OF,
                    /* Kept: consumers and tests reach for the length
                       family by its old name, and renaming it would be
                       churn for nothing. */
                    PER_INCH: UNITS.length,
                    parsePrinted: parsePrinted };

})(window.LPE = window.LPE || {});
