const path = require("path");

const HtmlWebPackPluging = require("html-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry : {
        home: path.resolve(__dirname,"./src/js/index.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "output.bundle.js"
    },
    devServer: {
        hot: true,
        open: true,
        port: 1523
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              },
            {
                test: /.\js?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: "file-loader",    //Nunca logre cargar las imagenes :'c
                  options: {
                    name: "[path][name].[hash].[ext]",
                    outputPath: "images/"
                  },
                },
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[hash].[ext]' 
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPluging({
            title: "personalSite",
            inject: true,
            template: "./public/index.html", //De donde lo toma
            filename: "./index.html" //Lo pega en el dist con ese nombre
        })
    ]
}