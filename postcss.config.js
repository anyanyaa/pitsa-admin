const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = function(__, argv) {

  if (argv.mode === 'development') {
    return {
      plugins: [
        [
          autoprefixer,
        ]
      ]
    }
  } else {
    return {
      plugins: [
        [
          autoprefixer,
          cssnano
        ]
      ]
    }
  }
};
