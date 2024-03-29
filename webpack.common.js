const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        index: './src/index.ts',
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production', 
        })
    ], 
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                use: 'ts-loader', 
                exclude: /node_modules/,
            }, 
            {
                test: /\.svg/, 
                type: 'asset/inline'
            },
            {
                test: /\.txt/, 
                type: 'asset/source'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true
    },

}