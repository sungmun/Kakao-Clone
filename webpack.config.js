module.exports={
    mode: 'development',
    /* 이 부분은 entry와 output의 기본값으로 생략 가능합니다.
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }, */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                   loader: 'babel-loader'
                }
            }
        ]
    }
}