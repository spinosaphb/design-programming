import { runCLI } from '../core/cli';
import { Lead, Pencil } from './graphite';

let pencil: Pencil;

function init(thickness: number): void {
    pencil = new Pencil(thickness);
}

function show(): void {
    console.log(pencil.toString());
}

function insert(lead: Lead): void {
    pencil.insert(lead);
}

function remove(): void {
    pencil.remove();
}

function write(): void {
    pencil.writePage();
}

function evaluate(command: string, args: string[]): void {
    switch (command) {
        case 'init':
            init(Number(args[0]));
            break;
        case 'show':
            show();
            break;
        case 'insert':
            insert(new Lead(Number(args[0]), args[1], Number(args[2])));
            break;
        case 'remove':
            remove();
            break;
        case 'write':
            write();
            break;
        case 'end':
            console.log('Bye :)');
            process.exit(0);
        default:
            console.log(`Command not found: ${command}`);
    }
}

runCLI("Pencil CLI", evaluate);
