const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development';
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const environment = require('./environment');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    devtool: mode === 'production' ? false : 'source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[contenthash:8].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                type: 'asset',
                generator: {
                    filename: 'images/design/[name].[hash:6][ext]',
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(environment.paths.source, 'images'),
                    to: path.resolve(environment.paths.output, 'images'),
                    toType: 'dir',
                    globOptions: {
                        ignore: ['*.DS_Store', 'Thumbs.db'],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            filename: 'index.html',
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
    optimization: {
        minimizer: [
            new CopyWebpackPlugin({
                patterns: [{ from: 'static', to: 'static' }],
            }),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
};
