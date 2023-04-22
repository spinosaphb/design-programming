import { runCLI } from '../core/cli';
import { MotorCycle, Person } from './motorcycle';

let motorcycle: MotorCycle;

function init(power: number): void {
    motorcycle = new MotorCycle(power);
}

const show = (): void => {
    console.log(motorcycle.toString());
}

const insert = (person: Person): void => {
    if (motorcycle.insertPerson(person))
        console.log('Person inserted');
    else
        console.log('Person not inserted');
}

const remove = (): void => {
    let person: Person | null = motorcycle.removePerson();
    if (person)
        console.log(`Person removed: ${person.toString()}`);
    else
        console.log('No person to remove');
}

const buyTime = (time: number): void => {
    motorcycle.buyTime(time);
    console.log(`Time bought: ${time}`);
}

const drive = (time: number): void => {
    motorcycle.drive(time);
    console.log(`Time driven: ${time}`);
}

const honk = (): void => {
    console.log(motorcycle.honk());
}

const evaluate = (command: string, args: string[]): void => {
    switch (command) {
        case 'init':
            init(Number(args[0] || 1));
            break;
        case 'show':
            show();
            break;
        case 'enter':
            insert(new Person(Number(args[0]), args[1]));
            break;
        case 'remove':
            remove();
            break;
        case 'buy':
            buyTime(Number(args[0]));
            break;
        case 'drive':
            drive(Number(args[0]));
            break;
        case 'honk':
            honk();
            break;
        case 'end':
            console.log('Bye :)');
            process.exit(0);
        default:
            console.log(`Command not found: ${command}`);
    }
}

runCLI("Motorcycle CLI", evaluate);