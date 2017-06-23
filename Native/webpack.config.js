module.exports = {
    entry: "./notBundled.js",
    output: {
        path: __dirname,
        filename: "Pdf.js"
    },
    module: {
        loaders: []
    }
};
