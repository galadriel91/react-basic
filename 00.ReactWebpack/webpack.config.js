const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js' , '.jsx' , '.scss' , '.module.scss' , '.css'],
        alias:{
            Style:path.resolve('./src/assets/scss/')
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