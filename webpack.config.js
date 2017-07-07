module.exports = {
    entry: "./example/main.js",
    output: {
        path: __dirname,
        filename: "./example/bundle.js"
    },
    module: {
        rules: [{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: ['elm-hot-loader', 'elm-webpack-loader?verbose=true&warn=true&debug=true']
        }]
    }
};
