const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    
    target: 'node',
    entry: './src/server.js',
    devtool: 'eval-source-map',
    output: {
        filename: './dist/server.bundle.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                // test: /\.tsx?$/,
                // loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'./ecosystem.config.js', to: './dist/'},
            {from:'./config.json', to: './dist/'}
        ])
    ]   
};