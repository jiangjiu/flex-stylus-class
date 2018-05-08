const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = pathname => path.resolve(__dirname, pathname);
module.exports = {

    entry: {
        app: './test/index.js'
    },
    output: {
        filename: '[name].js'
    },
    plugins:
        [
            new HtmlWebpackPlugin({
                template: './test/index.html'
            })
        ]
    ,
    module: {
        rules: [
            {
                test: /\.styl$/,
                exclude: resolve('node_modules'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'stylus-loader'}
                ]
            },
            {
                test: /\.css$/,
                include: resolve('node_modules/normalize.css'),
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},

                ]
            }
        ]
    }
};
