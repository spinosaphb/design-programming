import { runCLI } from '../core/cli';
import { Calculator } from './calc';

let calc: Calculator;

function init(batteryMax: number): void {
    calc = new Calculator(batteryMax);
}

function show(): void {
    console.log(calc.toString());
}

function charge(v: number): void {
    calc.chargeBattery(v);
}

function sum(n1: number, n2: number): void {
    calc.sum(n1, n2);
}

function div(n1: number, n2: number): void {
    calc.division(n1, n2);
}

function evaluate(command: string, args: string[]): void {
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
            console.log(`Command not found: ${command}`);
    }
}

runCLI("Calculator CLI", evaluate);