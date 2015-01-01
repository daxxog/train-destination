/* TrainDestination / make.js
 * echo 'make script for TrainDestination' && node make
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built TrainDestination in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('train-destination.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "train-destination.min.js": ["header", function(cb) {
            fs.writeFileSync('train-destination.min.js', header + UglifyJS.minify('train-destination.js').code);
            cb();
        }]
    }
});