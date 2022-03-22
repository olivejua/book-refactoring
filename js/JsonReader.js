// const invoices = fetch("/json/invoices.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(jsondata => {
//         // console.log(jsondata);
//         return jsondata;
//     });

// const plays = fetch("/json/plays.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(jsondata => {
//         // console.log(jsondata);
//         return jsondata;
//     });

function readJSON(file, callback) {
    return new Promise(function () {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    })
}

function getJSONValue(file) {
    return new Promise(function(resolve) {
        readJSON(file, (text) => {
            resolve(JSON.parse(text));
        });
    });
}


