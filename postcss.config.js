const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");


module.exports = function(env, argv) {
  console.log(env)

  if (env.mode === 'development') {
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
