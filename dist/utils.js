"use strict";
exports.__esModule = true;
var path = require("path");
var mkdirp = require("mkdirp");
var fs = require("fs");
function withoutExt(p) {
    return p.replace(/\.[^/.]+$/, '');
}
exports.withoutExt = withoutExt;
function relativeImport(from, to) {
    return withoutExt('./' + path.relative(path.dirname(from), to));
}
exports.relativeImport = relativeImport;
function writeFile(filepath, contents) {
    return new Promise(function (resolve, reject) {
        mkdirp(path.dirname(filepath), function (err) {
            if (err)
                return reject("filepath: " + filepath + ", " + err);
            fs.writeFile(filepath, contents, function (err) {
                if (err)
                    return reject("filepath: " + filepath + ", " + err);
                resolve();
            });
        });
    });
}
exports.writeFile = writeFile;
