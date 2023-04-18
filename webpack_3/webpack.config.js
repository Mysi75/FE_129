const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
    }, 
    devServer: {
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            }, 
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: ['file-loader']
            }
        ]
    }
}