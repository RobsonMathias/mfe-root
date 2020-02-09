module.exports = (config, env) => {
    // config.devServer = {
    //     disableHostCheck: true,
    //     proxy: {
    //         '/simulation/**': {
    //             target: 'https://mfe-simulation.netlify.com',
    //             pathRewrite: { '^/stimulation': '' },
    //         },
    //         '/authorization/**': {
    //             target: 'https://mfe-authorization.netlify.com',
    //             pathRewrite: { '^/authorization': '' },
    //         },
    //     },
    // };
    config.devServer = {
        disableHostCheck: true,
        allowedHosts: [
            'localhost',
        ]
    };
    return config;
};
