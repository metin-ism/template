const path = require('path');
const webpack = require('webpack');
const videoJs = require("video.js")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
             rules: [
                 {
                     test: /\.js$/,
                     exclude: /node_modules/,
                     use: {loader: "babel-loader"}
                 },
                 {
                     test:/\.html$/,
                     use: [
                         {loader: "html-loader"}
                     ]
                 },
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
                 {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
              'file-loader',
             ],
           },
                 {
                     test: /\.scss$/,
                     use: [
                         "style-loader",
                         "css-loader",
                         "sass-loader"
                     ]
                 },
                 {
                     test: /\.(mov|mp4)$/,
                     use: [
                         {
                             loader: 'file-loader',
                             options: {
                                 name: '[name].[ext]'
                             }
                         }
                     ]
                 }
     ],
   },
    plugins: [
        new HtmlWebPackPlugin({
            template: "index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery"
        })
    ]
};