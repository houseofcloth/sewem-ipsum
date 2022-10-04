const CleanCSS = require('clean-css')
const htmlmin = require('html-minifier')

module.exports = function(eleventyConfig) {

  // Copy favicon
  eleventyConfig.addPassthroughCopy("site/favicon.png")

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

  // Minify CSS
  // Modified version of above combined with https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addTransform("cssmin", function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".css") ) {
      let minified = new CleanCSS({}).minify(content).styles
      return minified
    }

    return content
  })

  // Config
  return {
    dir: {
      input: 'site',
      output: 'dist',
    }
  }

}
