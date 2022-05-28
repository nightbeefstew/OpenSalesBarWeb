module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            "^/api/": {
                target: 'http://localhost:3000',
                logLevel: 'debug',
                pathRewrite: {"^/api/": "/api/"}
            },
        }
    }
}