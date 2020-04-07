const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
             rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
     ],
   },
    plugins: [
        new HtmlWebPackPlugin({
            template: "index.html",
            filename: "./index.html"
        }),
    ]
};