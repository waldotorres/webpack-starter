const HtmlWebpack = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = {
    mode:'production',
    output:{
        clean:true,
        filename: 'main.[contenthash].js'
    },
    module:{
        rules:[
        {
            test:/\.html$/,
            loader:'html-loader',
            options:{
                sources:false
            }
        },
        {
            test:/\.css$/,
            exclude: /styles.css$/,
            use:['style-loader', 'css-loader']
        },
        {
            test: /styles.css$/,
            use: [ MiniCssExtract.loader, 'css-loader' ]
        },
        {
            test:/\.(png|jpg?e|gif)/,
            loader: 'file-loader'
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options:  {
                            presets: ['@babel/preset-env']
                        }
                }
        }
        ]
    },
    optimization:{
        minimize:true,
        minimizer:  [
                        new Terser(),
                        new CssMinimizer()
                    ]
    },
    plugins :[
        new HtmlWebpack({
            title:'Mi webpack App',
            template:'./src/index.html'
        }),
        new MiniCssExtract ({
            filename:'[name].[fullhash].css',
            ignoreOrder:true
        }),
        new CopyPlugin(
            {
                patterns: [
                {
                    from:'src/assets/', 
                    to: 'assets/'
                }
                ]
            }
        ),
        

    ],  
}