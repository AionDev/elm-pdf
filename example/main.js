const Elm = require('./Example.elm');
//
//
let app = Elm.Example.embed(document.getElementById('main'));

// require('elm-pdf').elmPdfInitialize(app);
require('./localPdf.js').elmPdfInitialize(app);

// console.log("elmPdfff", elmPdf);
