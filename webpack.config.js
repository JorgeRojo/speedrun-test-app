const path = require('path');

module.exports = {
    entry: { 
        bundle: './src/clientRender.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    }
}