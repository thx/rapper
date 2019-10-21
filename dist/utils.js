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
function moveFile(from, to) {
    return new Promise(function (resolve, reject) {
        mkdirp(path.dirname(to), function (err) {
            if (err)
                return reject("\u8BFB\u53D6\u6587\u4EF6\u5931\u8D25: " + from + ", " + err);
            var contents = fs.readFileSync(from);
            fs.writeFile(to, contents, function (err) {
                if (err)
                    return reject("\u5199\u5165\u6587\u4EF6\u5931\u8D25: " + to + ", " + err);
                resolve();
            });
        });
    });
}
exports.moveFile = moveFile;
