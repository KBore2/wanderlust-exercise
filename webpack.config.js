const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        bundle:path.resolve(__dirname,'src/main.js')
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash].js',
        clean:true
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Wanderlust',
            filename:'index.html',
            template:'src/template.html'
        })
    ]
}