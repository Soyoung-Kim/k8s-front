const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const zopfli = require('@gfx/zopfli');

module.exports = {
    devServer: {
        proxy: 'http://localhost:80',
    },
    transpileDependencies: ['vuetify'],

    publicPath: '',
    assetsDir: '',
    outputDir: 'deploy',
    lintOnSave: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerMode: 'static',
                reportFilename: 'report.html',
            }),
        ],
    },
    pluginOptions: {
        compression: {
            zopfli: {
                compressionOptions: {
                    numiterations: 15,
                },
                algorithm(input, compressionOptions, callback) {
                    return zopfli.gzip(input, compressionOptions, callback);
                },
            },
        },
    },
};
