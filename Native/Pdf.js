var _AionDev$elm_pdf$Native_Pdf = function() {

    function getBlob(instructions) {



        return _elm_lang$core$Native_Scheduler.nativeBinding((callback) => {
            // console.log("this never get's called why?!");
            // const doc = new jsPDF('portrait', 'mm', 'a4');
            // // instructions.reduce((instruction) =>
            // //     switch instruction {
            // //         case "AddPage"
            // //             doc.addPage()
            // //     }
            // //
            // // )
            //
            // doc.addPage();
            // doc.text("my text", 100, 100);
            //
            // console.log('problems!');

            callback(_elm_lang$core$Native_Scheduler.succeed("12"));
        })

    }

    return {
        getBlob: getBlob
    }
}();
