const CleanCSS = require('clean-css')
const htmlmin = require('html-minifier')

module.exports = function(eleventyConfig) {

  // Copy favicon
  eleventyConfig.addPassthroughCopy("site/*.txt")

  // Minify HTML
  // https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        // Keep license
        ignoreCustomComments: [ /^ SPDX-(.*)/ ],
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
      })
      return minified
    }

    return content
  })

  // Minify CSS inline https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Config
  return {
    dir: {
      input: 'site',
      output: 'dist',
    }
  }

}
