"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function runCLI(projectTitle, evaluate) {
    var genrateSlashes = function (qtd) { return "".concat('-'.repeat(qtd)); };
    var prompt = function () { return process.stdout.write('$ '); };
    var terminalWidth = process.stdout.columns;
    var fullSlashes = genrateSlashes(terminalWidth);
    var qtdTitleSlashes = Math.floor((terminalWidth - projectTitle.length) / 2);
    var titleSlashes = genrateSlashes(qtdTitleSlashes);
    console.log("".concat(fullSlashes, "\n").concat(titleSlashes).concat(projectTitle).concat(titleSlashes, "\n").concat(fullSlashes));
    prompt();
    rl.on('line', function (line) {
        var _a = line.split(' '), command = _a[0], args = _a.slice(1);
        evaluate(command, args);
        prompt();
    });
}
exports.runCLI = runCLI;
