module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
