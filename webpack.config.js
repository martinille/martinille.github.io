const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const cssConfig = ['css-loader', 'postcss-loader']

let config = {
    devtool: "inline-source-map",
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: "./src/index.js",
        //style1: "./src/style/style1.less",
        //style1: "./src/style/tailwind.css",
    },
    output: {
        clean: true,
        //publicPath: '/assets/',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 9000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
        //     test: /\.svg$/i,
        //     use: ["file-loader", "svgo-loader"],
        // },{
        //     test: /\.less$/i,
        //     use: [MiniCssExtractPlugin.loader, ...cssConfig, "less-loader"]
        // }, {
            test: /\.css$/,
            //include: path.resolve(__dirname, 'src/style'),
            use: [MiniCssExtractPlugin.loader, ...cssConfig],
        },{
        },]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main']
        })
    ],
};


if ('production' === config.mode) {
    config = {...config,
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