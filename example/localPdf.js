"use strict"
const jsPDF = require('jsPDF');

// CHECK TO SEE what browser the user has.
// const Browser = {
//     // Firefox 1.0+
//     isFirefox: () => {
//         return typeof InstallTrigger !== 'undefined'
//     },
//     // Internet Explorer 6-11
//     isIE: () => {
//         return !!document.documentMode
//     },
//     // Edge 20+
//     isEdge: () => {
//         return !Browser.isIE() && !!window.StyleMedia
//     },
//     // Chrome 1+
//     isChrome: () => {
//         return !!window.chrome && !!window.chrome.webstore
//     },
//     // At least Safari 3+: "[object HTMLElementConstructor]"
//     isSafari: () => {
//         return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ||
//             navigator.userAgent.toLowerCase().indexOf('safari') !== -1
//     }
// }


// applyElmCommandsToPdfDoc : pdfDoc -> List Comand -> pdfDoc
function applyElmCommandsToPdfDoc(pdfDoc, commands) {

    let newPdfDoc = commands.reduce((acc, cmd) => {
        // console.log(cmd.instruction);

        switch (cmd.instruction) {

            case "Rect":
                acc.rect(cmd.x, cmd.y, cmd.w, cmd.h);
                break;

            case "Text":
                acc.text(cmd.text, cmd.x, cmd.y);
                break;
            case "AddPage":
                acc.addPage();
                break;
            default:
                console.log("Default.");
        }

        return acc;

    }, pdfDoc);

    return newPdfDoc;
}



const ExportObj = {

    elmPdfInitialize: function(elmApp) {




        // generate a new blob url for this document. after this action the document is garbage colected./
        elmApp.ports.commandJsTo_previewDocument.subscribe((document) => {

            emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            // construct the blob and send it to elm.
            let blob = pdfDoc.output('bloburl');
            console.log("blob is:", blob);

            elmApp.ports.receive_previewBlobUrl.send(blob);
        });




        // print document given from elm. after this action the document is garbage colected./
        elmApp.ports.commandJsTo_printDocument.subscribe((document) => {

            let emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            let pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            try {
                pdfDoc.autoPrint();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_printStatus.send(false);
                } else {
                    elmApp.ports.received_printStatus.send(true);
                }
            }
        });




        // donwload document given form elm. after this action - the document is garbage colected.
        elmApp.ports.commandJsTo_downloadDocument.subscribe((document) => {

            let emptyDoc = new jsPDF(document.orientation, document.unit, document.format);

            let commands = document.commands;
            // console.log("commands", commands);
            let pdfDoc = applyElmCommandsToPdfDoc(emptyDoc, commands);

            try {
                pdfDoc.save();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_downloadStatus.send(false);
                } else {
                    elmApp.ports.received_downloadStatus.send(true);
                }
            }
        });



        // generate a persisten pdf document object. this will be updated form elm with each incomming instruction.
        let persistentPdfDocument = null;

        elmApp.ports.commandJsTo_createNewDocumentAndPreview.subscribe((document) => {

            let newDoc = new jsPDF(document.orientation, document.unit, document.format);
            let commands = document.commands;
            // console.log("commands", commands);

            // mutate the persistentPdfDocument with each create new command.
            persistentPdfDocument = applyElmCommandsToPdfDoc(newDoc, commands);

            // construct a new blob and send it back to elm.
            let blobUrl = persistentPdfDocument.output('bloburl');
            elmApp.ports.received_previewBlobUrl.send(blobUrl);
        });



        elmApp.ports.commandJsTo_update.subscribe((instructions) => {

            persistentPdfDocument = applyElmCommandsToPdfDoc(persistentPdfDocument, instructions);

            // -- TODO: find out if is necesary to update the blobUrl with each update of the doc..
            // construct a new blob and send it back to elm.
            let blobUrl = persistentPdfDocument.output('bloburl');
            elmApp.ports.received_previewBlobUrl.send(blobUrl);
        });



        elmApp.ports.commandJsTo_print.subscribe(() => {
            try {
                persistentPdfDocument.autoPrint();
            } catch (err) {
                if (err) {
                    elmApp.ports.received_printStatus.send(false);
                } else {
                    elmApp.ports.received_printStatus.send(true);
                }
            }
        });



        elmApp.ports.commandJsTo_download.subscribe((fileName) => {
            try {
                persistentPdfDocument.save(fileName);
            } catch (err) {
                if (err) {
                    elmApp.ports.received_downloadStatus.send(false);
                } else {
                    elmApp.ports.received_downloadStatus.send(true);
                }
            }
        });



        elmApp.ports.commandJsTo_delete.subscribe(() => {
            persistentPdfDocument = null;
        });


    }
}


module.exports = ExportObj;
