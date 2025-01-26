module.exports = (env) => {
  console.log("en222v", env);
  if (env.production) {
    return require('./config/webpack.prod.js');
  } else {
    return require('./config/webpack.dev.js');
  }
};
