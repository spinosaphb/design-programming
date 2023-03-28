"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cli_1 = require("../core/cli");
var calc_1 = require("./calc");
var calc;
function init(batteryMax) {
    calc = new calc_1.Calculator(batteryMax);
}
function show() {
    console.log(calc.toString());
}
function charge(v) {
    calc.chargeBattery(v);
}
function sum(n1, n2) {
    calc.sum(n1, n2);
}
function div(n1, n2) {
    calc.division(n1, n2);
}
function evaluate(command, args) {
    switch (command) {
        case 'init':
            init(Number(args[0]));
            break;
        case 'show':
            show();
            break;
        case 'charge':
            charge(Number(args[0]));
            break;
        case 'sum':
            sum(Number(args[0]), Number(args[1]));
            break;
        case 'div':
            div(Number(args[0]), Number(args[1]));
            break;
        case 'end':
            console.log('Bye :)');
            process.exit(0);
        default:
            console.log("Command not found: ".concat(command));
    }
}
(0, cli_1.runCLI)("Calculator CLI", evaluate);
