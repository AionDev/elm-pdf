module.exports = {
    entry: "./Native/notBundled.js",
    output: {
        path: __dirname + "/Native",
        filename: "Pdf.js"
    },
    module: {
        loaders: []
    }
};
