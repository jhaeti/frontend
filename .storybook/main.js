module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-material-ui',
    ],
    framework: '@storybook/react',
    features: {
        emotionAlias: false,
    },
    core: {
        builder: '@storybook/builder-webpack5',
    },
};
