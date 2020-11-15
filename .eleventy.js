const pluginPingendo = require("pingendo-11ty");
const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {

  
  eleventyConfig.setEjsOptions({
    openDelimiter: "{{",
    closeDelimiter: "}}"
  });
  eleventyConfig.addPlugin(pluginPingendo);


  // eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setDynamicPermalinks(true);
 
  eleventyConfig.addPlugin(pluginSass, {"remap":true});

  return {
    templateFormats: [
      "ejs",
      "md",
      "html",
      "js",
      "yml",
      "jpg",
      "scss",
      "css" // css is not yet a recognized template extension in Eleventy
    ],



    passthroughFileCopy: true,
    markdownTemplateEngine: "ejs",
    htmlTemplateEngine: "ejs",
    dataTemplateEngine: "ejs",
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };

};