const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let config = {
    devtool: "inline-source-map",
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: "./src/index.js",
    },
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'docs'),
        },
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        server: "http",
    },
    module: {
        rules: [
            {
                test: /\.(svg|jpe?g|png|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ],
    optimization: {
        minimize: false
    }
};


if ('production' === config.mode) {
    config = {
        ...config,
        devtool: false,
        devServer: false,
        optimization: {
            minimize: true,
            minimizer: [
                "...",
                new CssMinimizerPlugin(),
            ]
        }
    }
}

module.exports = config;