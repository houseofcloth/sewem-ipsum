/**!
 * sewem-ipsum.js
 * - Fabric/sewing/dressmaking lorem ipsum-like generator.
 * SPDX-License-Identifier: Jam
 */

/**
 * 
 */
declare global {
  interface String {
    capitalise(): string,
  }
}

/**
 * List of sewing/fabric/dressmaking/quilting terms
 */
const termlist: Term[] = [
  "a-line",
  "absorbency",
  "abutted dart",
  "abutted seam",
  "accent",
  "accordian pleats",
  "acetate",
  "acrylic",
  "african print",
  "aida fabric",
  "allowance",
  "alpaca",
  "alter",
  "anchoring stitch",
  "angora",
  "anti-pill",
  "apex",
  "apparrel",
  "applique",
  "arabesque",
  "argyle",
  "armscye",
  "atelier",
  "awl",
  "back stitch",
  "backing",
  "backless",
  "bamboo",
  "band",
  "bar tack",
  "basic block",
  "basket weave",
  "baste",
  "batik",
  "batting",
  "bell sleeve",
  "besom pocket",
  "bias",
  "bias binding",
  "bias tape",
  "binding",
  "bishop collar",
  "bishop sleeve",
  "blanket stitch",
  "bleed",
  "blind stitch",
  "block",
  "blouse",
  "blouse placket",
  "blouson",
  "boatneck",
  "bobbin",
  "bodice",
  "bodkin",
  "boiled",
  "boiled wool",
  "bolt",
  "bonding",
  "boning",
  "bootcut",
  "boutique",
  "broadcloth",
  "buckle",
  "bunting",
  "bust dart",
  "button hole",
  "cable stitch",
  "calico",
  "cashmere",
  "casing",
  "challis",
  "chambray",
  "circumference",
  "classic style",
  "closure",
  "coat",
  "coating",
  "contemporary",
  "cord",
  "cording",
  "corduroy",
  "cotton",
  "couching",
  "couturier",
  "cowl neck",
  "crease",
  "crepe",
  "crew neck",
  "crochet",
  "cross back",
  "cross grain",
  "cross stitch",
  "crotch length",
  "cuff",
  "cupro",
  "cutting line",
  "cutting mat",
  "darning",
  "darning foot",
  "darning mushroom",
  "dart",
  "dazzle",
  "decorative stitch",
  "denim",
  "dobby",
  "dolman",
  "double knit",
  "double weave",
  "double-breasted",
  "drafting",
  "drape",
  "draping",
  "drawstring",
  "dress",
  "dressmaker",
  "drill",
  "drop stitch",
  "duck cloth",
  "ease",
  "edge stitch",
  "edging",
  "embroidery",
  "eyelet",
  "face",
  "facing",
  "fairisle",
  "fat quarter",
  "feed dog",
  "felt",
  "fitted garment",
  "flanellette",
  "flax",
  "fold line",
  "fray",
  "french curve",
  "french seam",
  "fusible",
  "fusible interfacing",
  "gathering",
  "gauge",
  "gauze",
  "georgette",
  "gingham",
  "girth",
  "godet",
  "gore",
  "grain",
  "grain line",
  "grogram",
  "grois point",
  "grosgrain",
  "gusset",
  "haberdasher",
  "haberdashery",
  "ham",
  "haute couture",
  "hem",
  "hemming tape",
  "hemp",
  "herringbone",
  "high waist",
  "homewares",
  "houndstooth",
  "ikat",
  "inseam",
  "interfacing",
  "interlock",
  "invisible zipper",
  "iron",
  "jacket",
  "jacquard",
  "jersey",
  "jute",
  "knit",
  "lace",
  "lapel",
  "lawn",
  "leather",
  "linen",
  "lining",
  "llama",
  "lock stitch",
  "lycra",
  "mandarin collar",
  "mannequin",
  "melange",
  "millinery",
  "modal",
  "mohair",
  "muslin",
  "needlework",
  "notions",
  "nylon",
  "oilcloth",
  "organic",
  "organza",
  "overlay",
  "oxford cloth",
  "pants",
  "patchwork",
  "pattern",
  "percale",
  "petersham",
  "pin cushion",
  "pincord",
  "pins",
  "pinstripe",
  "pintuck",
  "piping",
  "pique",
  "placket",
  "plaited",
  "pleat",
  "pocket",
  "point turner",
  "poplin",
  "preshrunk",
  "princess seam",
  "pyjamas",
  "quilted",
  "quilting",
  "ramie",
  "raw edge",
  "rayon",
  "ribbing",
  "ribbon",
  "ric-rac",
  "right side",
  "rolled hem",
  "ruching",
  "ruffler",
  "sateen",
  "satin",
  "satin stitch",
  "scalloped edge",
  "seam allowance",
  "seam ripper",
  "seamstress",
  "seersucker",
  "selvage",
  "serger",
  "serging",
  "sewing",
  "shantung",
  "shirred",
  "shirt",
  "shirt collar",
  "shirt pocket",
  "shirt sleeve",
  "shrinkage",
  "silk",
  "sisal",
  "skirt",
  "sloper",
  "slubbed",
  "spool",
  "stitch",
  "suede",
  "surplice",
  "taffeta",
  "tailor",
  "tailor-made",
  "tape measure",
  "tartan",
  "tencel",
  "thimble",
  "third hand",
  "thread",
  "ticking",
  "tissue",
  "toile",
  "top",
  "top stitch",
  "toweling",
  "trim",
  "tuck",
  "tulip sleeve",
  "tulle",
  "tweed",
  "twill tape",
  "underlay",
  "velcro",
  "velour",
  "velvet",
  "viscose",
  "wadding",
  "waist line",
  "walking foot",
  "warp",
  "weft",
  "wool",
  "worsted",
  "wrong side",
  "yak",
  "yard",
  "yardage",
  "yarn",
  "yarn-dyed",
  "yoke",
  "zipper foot",
]

// Default values
const defaults: DefaultOptions = {
  countMin: 2,
  countMax: 10,
}

/**
 * From: https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
 */
String.prototype.capitalise = function(): string {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

/**
 * Generate random number
 */
const randomCount = (
  min: number = defaults.countMin,
  max: number = defaults.countMax,
): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Get random term from the list
 */
const randomTerm = (): Term =>
  termlist[
    Math.floor(
      Math.random() * (termlist.length - 1)
    )
  ]

/**
 * Generate a random sentence
 */
const randomSentence = (opts: Options): Sentence =>
  Array.from(
    { length: randomCount(opts?.tMin, opts?.tMax) },
    (): Term => randomTerm()
  )
  .join(' ')
  .capitalise()
  .concat('.')

/**
 * Generate a random paragraph.
 */
const randomParagraph = (opts: Options): Paragraph =>
  Array.from(
    { length: randomCount(opts?.sMin, opts?.sMax) },
    (): Sentence => randomSentence(opts)
  )
  .join(' ')

/**
 * Return (1 or more) terms
 */
const getTerms = (count: number): Array<Term> =>
  Array.from(
    { length: count},
    (): Term => randomTerm()
  )

/**
 * Return (1 or more) sentences
 */
const getSentences = (
  count: number,
  opts: Options
): Array<Sentence> =>
  Array.from(
    { length: (opts?.sMin || opts?.sMax)
        ? randomCount(opts.sMin, opts.sMax)
        : count
    },
    (): Sentence => randomSentence(opts)
  )

/**
 * Return (1 or more) paragraphs
 */
const getParagraphs = (
  count: number,
  opts: Options
): Array<Paragraph> =>
  Array.from(
    { length: (opts?.pMin || opts?.pMax)
        ? randomCount(opts.pMin, opts.pMax)
        : count
    },
    (): Paragraph => randomParagraph(opts)
  )

export {
  randomCount,
  randomTerm,
  randomSentence,
  randomParagraph,
  getTerms,
  getSentences,
  getParagraphs,
}
