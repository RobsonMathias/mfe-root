const { override } = require('customize-cra');

module.exports = {
    webpack: override(
        (config) => {
            return config;
        },
    ),

    jest: config => {
        return config;
    },

    devServer: configFunction => (proxy, allowedHost) => {
        proxy = {
            ...proxy,
            '/authentication/': {
                target: 'http://localhost:3001',
            }
        };
        const config = configFunction(proxy, allowedHost);
        config.disableHostCheck = true;
        config.headers = { 'Access-Control-Allow-Origin': '*' };
        config.historyApiFallback = true;
        return config;
    },

    paths: (paths, env) => {
        return paths;
    }
};
