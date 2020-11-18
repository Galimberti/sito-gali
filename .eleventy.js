const pluginPingendo = require("pingendo-11ty");
const pluginSass = require("eleventy-plugin-sass");
const fs = require('fs')

var confBuild =  {
  input: "src",
  output: "build"
}

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginSass, {"remap":true});

  eleventyConfig.setEjsOptions({
    openDelimiter: "{{",
    closeDelimiter: "}}"
  });
  eleventyConfig.addPlugin(pluginPingendo);

  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);
 
  eleventyConfig.on('beforeBuild', () => {
    // Run me before the build starts
    if (!fs.existsSync(confBuild.output)) fs.mkdirSync(confBuild.output)
  })

  return {
    templateFormats: [
      "ejs",
      "md",
      "html",
      "yml",
      "jpg",
      "png",
      "ttf",
      "otf"
    ],

    


    passthroughFileCopy: true,
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
    dataTemplateEngine: "ejs",
    dir: confBuild
  };

};