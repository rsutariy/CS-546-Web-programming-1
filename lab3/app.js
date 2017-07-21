/**
 * Created by Ruchika Sutariya on 6/9/2017.
 */

const fileData = require('./fileData');
const textMetrics = require('./textMetrics')

fileData.getFileAsJSON("chapter1.result.json")
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => {
        fileData.getFileAsString("chapter1.txt")
            .then(function (data) {
                let simpleText = textMetrics.simplify(data);
                fileData.saveStringToFile("chapter1.debug.txt", simpleText)
                let createMetricstext = textMetrics.createMetrics(data);
                fileData.saveJSONToFile("chapter1.result.json", createMetricstext)
            })
        
    });

fileData.getFileAsJSON("chapter2.result.json")
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => {
        fileData.getFileAsString("chapter2.txt")
            .then(function (data) {
                let simpleText = textMetrics.simplify(data);
                fileData.saveStringToFile("chapter2.debug.txt", simpleText)
                let createMetricstext = textMetrics.createMetrics(data);
                fileData.saveJSONToFile("chapter2.result.json", createMetricstext)
            })
        
    });

fileData.getFileAsJSON("chapter3.result.json")
    .then(function (data) {
        console.log(data);
    })
    .catch((error) => {
        fileData.getFileAsString("chapter3.txt")
            .then(function (data) {
                let simpleText = textMetrics.simplify(data);
                fileData.saveStringToFile("chapter3.debug.txt", simpleText)
                let createMetricstext = textMetrics.createMetrics(data);
                fileData.saveJSONToFile("chapter3.result.json", createMetricstext)
            })
        
    });
