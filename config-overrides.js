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
        const config = configFunction(proxy, allowedHost);
        config.disableHostCheck = true;
        config.headers = { 'Access-Control-Allow-Origin': '*' };
        return config;
    },

    paths: (paths, env) => {
        return paths;
    }
};
