module.exports = function babelConfig(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];

  const plugins = [
    'babel-plugin-styled-components',
  ];

  return {
    env: {
      es6: {
        presets: [
          ['@babel/preset-env', {
            modules: false,
          }],
        ],
      },
    },
    presets,
    plugins,
  };
};
