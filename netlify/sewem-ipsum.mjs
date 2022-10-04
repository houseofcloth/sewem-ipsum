/**!
 * sewem-ipsum.mjs
 * - Fabric/sewing/dressmaking lorem ipsum-like generator.
 * SPDX-License-Identifier: Jam
 */

/**
 * List of sewing/fabric/dressmaking/quilting terms
 */
 const termlist = [
  "a-line", "absorbency", "abutted dart", "abutted seam", "accent", "accordian pleats", "acetate", "acrylic", "african print", "aida fabric", "allowance", "alpaca", "alter", "anchoring stitch", "angora", "anti-pill", "apex", "apparrel", "applique", "arabesque", "argyle", "armscye", "atelier", "awl", "back stitch", "backing", "backless", "bamboo", "band", "bar tack", "basic block", "basket weave", "baste", "batik", "batting", "bell sleeve", "besom pocket", "bias", "bias binding", "bias tape", "binding", "bishop collar", "bishop sleeve", "blanket stitch", "bleed", "blind stitch", "block", "blouse", "blouse placket", "blouson", "boatneck", "bobbin", "bodice", "bodkin", "boiled", "boiled wool", "bolt", "bonding", "boning", "bootcut", "boutique", "broadcloth", "buckle", "bunting", "bust dart", "button hole", "cable stitch", "calico", "cashmere", "casing", "challis", "chambray", "circumference", "classic style", "closure", "coat", "coating", "contemporary", "cord", "cording", "corduroy", "cotton", "couching", "couturier", "cowl neck", "crease", "crepe", "crew neck", "crochet", "cross back", "cross grain", "cross stitch", "crotch length", "cuff", "cupro", "cutting line", "cutting mat", "darning", "darning foot", "darning mushroom", "dart", "dazzle", "decorative stitch", "denim", "dobby", "dolman", "double knit", "double weave", "double-breasted", "drafting", "drape", "draping", "drawstring", "dress", "dressmaker", "drill", "drop stitch", "duck cloth", "ease", "edge stitch", "edging", "embroidery", "eyelet", "face", "facing", "fairisle", "fat quarter", "feed dog", "felt", "fitted garment", "flanellette", "flax", "fold line", "fray", "french curve", "french seam", "fusible", "fusible interfacing", "gathering", "gauge", "gauze", "georgette", "gingham", "girth", "godet", "gore", "grain", "grain line", "grogram", "grois point", "grosgrain", "gusset", "haberdasher", "haberdashery", "ham", "haute couture", "hem", "hemming tape", "hemp", "herringbone", "high waist", "homewares", "houndstooth", "ikat", "inseam", "interfacing", "interlock", "invisible zipper", "iron", "jacket", "jacquard", "jersey", "jute", "knit", "lace", "lapel", "lawn", "leather", "linen", "lining", "llama", "lock stitch", "lycra", "mandarin collar", "mannequin", "melange", "millinery", "modal", "mohair", "muslin", "needlework", "notions", "nylon", "oilcloth", "organic", "organza", "overlay", "oxford cloth", "pants", "patchwork", "pattern", "percale", "petersham", "pin cushion", "pincord", "pins", "pinstripe", "pintuck", "piping", "pique", "placket", "plaited", "pleat", "pocket", "point turner", "poplin", "preshrunk", "princess seam", "pyjamas", "quilted", "quilting", "ramie", "raw edge", "rayon", "ribbing", "ribbon", "ric-rac", "right side", "rolled hem", "ruching", "ruffler", "sateen", "satin", "satin stitch", "scalloped edge", "seam allowance", "seam ripper", "seamstress", "seersucker", "selvage", "serger", "serging", "sewing", "shantung", "shirred", "shirt", "shirt collar", "shirt pocket", "shirt sleeve", "shrinkage", "silk", "sisal", "skirt", "sloper", "slubbed", "spool", "stitch", "suede", "surplice", "taffeta", "tailor", "tailor-made", "tape measure", "tartan", "tencel", "thimble", "third hand", "thread", "ticking", "tissue", "toile", "top", "top stitch", "toweling", "trim", "tuck", "tulip sleeve", "tulle", "tweed", "twill tape", "underlay", "velcro", "velour", "velvet", "viscose", "wadding", "waist line", "walking foot", "warp", "weft", "wool", "worsted", "wrong side", "yak", "yard", "yardage", "yarn", "yarn-dyed", "yoke", "zipper foot",
]

// Default values
const defaults = {
  count_min: 2,
  count_max: 10,
}

/**
 * From: https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
 */
String.prototype.capitalise = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

/**
 * Generate random number
 */
const randomCount = (min = defaults.count_min, max = defaults.count_max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Get random term from the list
 * 
 * @returns {String}  - A single term.
 */
const randomTerm = () =>
  termlist[
    Math.floor(
      Math.random() * (termlist.length - 1)
    )
  ]

/**
 * Generate a random sentence
 * 
 * @returns {String} - A sentence.
 */
const randomSentence = () =>
  Array.from(
    { length: randomCount() },
    () => randomTerm()
  )
  .join(' ')
  .capitalise()
  .concat('.')

/**
 * Generate a random paragraph.
 * 
 * @returns {String} - A paragraph.
 */
const randomParagraph = () =>
  Array.from(
    { length: randomCount() },
    () => randomSentence()
  )
  .join(' ')

/**
 * 
 * @param {Number} count - Number of terms to return
 * @returns {Array}      - Array of terms
 */
const getTerms = count =>
  Array.from(
    { length: count},
    () => randomTerm()
  )
/**
* 
* @param {Number} count - Number of sentences to return
* @returns {Array}      - Array of sentences, with uppercase first letter and full stop.
*/
const getSentences = count =>
  Array.from(
    { length: count },
    () => randomSentence()
  )
/**
* 
* @param {Number} count - Number of paragraphs to return
* @returns {Array}      - Array of paragraphs
*/
const getParagraphs = count =>
  Array.from(
    { length: count },
    () => randomParagraph()
  )

 export {
  getTerms,
  getSentences,
  getParagraphs,
}
