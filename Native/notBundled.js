let jsPdf = require('jsPdf');


var _user$elm_pdf$Native_Pdf = function() {

    console.log("this never get's called why?!");

    function getBlob(instructions) {

        return _elm_lang$core$Native_Scheduler.nativeBinding((callback) => {

            const doc = new jsPDF('portrait', 'mm', 'a4');
            // instructions.reduce((instruction) =>
            //     switch instruction {
            //         case "AddPage"
            //             doc.addPage()
            //     }
            //
            // )

            doc.addPage();
            doc.text("my text", 100, 100);

            console.log('problems!');

            callback(_elm_lang$core$Native_Scheduler.succeed(doc.output('bloburl')));
        })

    }

    return {
        getBlob: getBlob
    }
}();





// const jsStuff = require ('../js/printDocument');


// let jsPDF = jspdf;
//
// // require('jsPDF');
// const iframe = document.getElementById('my-iframe');
//
//
// let doc = new jsPDF('portrait', 'mm', 'a4');
//
// doc.addPage();
// doc.setFontSize(14);
// doc.text("name", 100, 100);
//
// console.log(doc);
//
//
//
// setTimeout(() => {
//     let blob = doc.output('bloburl');
//     iframe.src = blob;
//     console.log(blob);
// }, 0)


// // inject bundled Elm app into div#main
// const Elm = require( '../elm/Main.elm' );
//
// let app = Elm.Main.embed( document.getElementById( 'main' ) );
//
// app.ports.generateBlob.subscribe(function(obj) {
//
//     });
//
//
