const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

require('./build');

module.exports = (env) => {
    const mode = env.production ? 'production' : 'development';

    return {
        mode,

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                },
            ],
        },

        resolve: {
            extensions: ['.ts', '.js', '.json'],
            alias: {
                '@2gis/mapgl-utils': path.resolve(__dirname, '../src'),
            },
        },

        entry: './index.ts',

        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist',
        },

        plugins: [new ForkTsCheckerWebpackPlugin()],

        devtool: mode === 'production' ? false : 'source-map',

        devServer: {
            host: '0.0.0.0',
            port: 3000,
            stats: {
                modules: false,
            },
            disableHostCheck: true,
            publicPath: '/dist',
        },
    };
};
