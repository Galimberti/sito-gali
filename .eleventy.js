const pluginPingendo = require("pingendo-11ty");
const pluginSass = require("eleventy-plugin-sass");

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
    dir: {
      input: "src",
      output: "build"
    }
  };

};