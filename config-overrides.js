// const { writeFileSync } = require('fs');
module.exports = function override(config, env) {
  console.log('override');
  // ** add global scss variables in all scss/sass files
  const loaders = config.module.rules[2].oneOf,
    index = loaders.length - 3,
    elem = loaders[index];
  elem.use[1].options.importLoaders = 4;
  elem.use.push(
    {
      loader: 'sass-resources-loader',
      options: {
        resources: ['./src/assets/themes/_variables.scss']
      },
    }
  );
  // writeFileSync('test.json', JSON.stringify(config));
  return config;
}