const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Goal: ', env.goal)
    console.log('dev: ', env.dev)
    
    
    return {
    mode: 'development', 
    entry: {
        index: './src/index.js', 
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    output: {
        filename: '[name].[contenthash].bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
        clean: true
    }, 
    optimization: {
        usedExports: true,
        moduleIds: 'deterministic', 
        runtimeChunk: 'single', 
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, 
                    name: 'vendors', 
                    chunks: 'all'
                }
            }
        }

    }
}}