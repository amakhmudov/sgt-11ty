module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/main.css');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');
  return {
    dir: {
      input: 'src',
      output: 'dest',
    },
  };
};
