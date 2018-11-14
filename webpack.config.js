const HtmlWebPackPlugin=require('html-webpack-plugin');
module.exports={
    mode: 'development',
    entry: './client/src/index.js',
    output: {
        path: __dirname+ '/client/build',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader'
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:true}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './client/src/index.html',
            filename: './index.html'
        })
    ]
}