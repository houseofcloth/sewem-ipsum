/**!
 * sewem-ipsum.js
 * - Fabric/sewing/dressmaking lorem ipsum-like generator.
 * SPDX-License-Identifier: Jam
 */

/**
 * List of sewing/fabric/dressmaking/quilting terms
 */
const termlist = [
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
];

/**
 * From: https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
 */
String.prototype.capitalise = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Generate random number
 */
const randomCount = (min = 2, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get random term from the list
 */
const randomTerm = () =>
  termlist[
    Math.floor(
      Math.random() * (termlist.length - 1)
    )
  ];

/**
 * Generate a random sentence
 */
const randomSentence = (wrds, min = 2, max = 10) =>
  Array.from(
    // Create array of `wrds` length
    { length: wrds || randomCount(min, max) },
    // Fill each position with a random term from the list
    () => randomTerm()
    // () => Math.floor(Math.random() * (termlist.length - 1))
  )
  // Join the values to make a string
  .join(' ')
  // Capitalise the first character of the string
  .capitalise()
  // Append a period to the send of the string
  .concat('.');

/**
 * Generate a random paragraph
 */
const randomParagraph = (lngth, min = 3, max = 10, wrds) =>
  Array.from(
    // Generate an array of `lngth` (or random) length
    { length: lngth || randomCount(min, max) },
    // Fill each position with a random sentence of `wrds` or random length
    () => randomSentence(wrds || randomCount(min, max))
  )
  // Join the values to maka a string
  .join(' ');

/**
 * Get multiple terms/sentences/paragraphs using the random generation
 * functions above.
 * All functions return an array.
 */
// Get `count` number of terms
const getTerms = (count) =>
  Array.from(
    { length: count },
    () => randomTerm()
  );

/**
 * Get `count` number of sentecnes
 * Each sentence can have 
 */
const getSentences = (count, terms, min = 2, max = 10) =>
  Array.from({
    length: count || randomCount(min, max)},
    () => randomSentence(terms, min, max)
  );

/**
 * Get `count` number of paragraphs (or random between `min` and `max`.)
 * Specific `lngth` of sentence
 */
const getParagraphs = (count, lngth, min = 2, max = 10) =>
  Array.from({
    length: count || randomCount(min, max)},
    () => randomParagraph(lngth, min, max)
  );
