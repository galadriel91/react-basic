const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js' , '.jsx' , '.scss' , '.module.scss' , '.css'],
        alias:{
            Style:path.resolve('./src/assets/scss/'),
            Img:path.resolve('./src/assets/image/'),
            Components:path.resolve('./src/components/'),
        }
    },
    entry:{
        app:'./main.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env' , '@babel/preset-react']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader' , 'css-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader' , 'css-loader' , 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[contenthash].[ext]',
                          outputPath: 'static/img',
                          esModule: false
                        }
                    }
                ],
            }
        ]
    },
    output:{
        filename:'app.js',
        path:path.join(__dirname , 'dist'),
        publicPath:'/dist'
    },
    devServer:{
        devMiddleware:{ publicPath:'/dist' },
        static:{ directory : path.resolve(__dirname)},
        hot:true
    }
}