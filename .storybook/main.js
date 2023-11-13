module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
