import { runCLI } from "../core/cli";
import { Tamagotchi } from "./tamagotchi";

let tamagotchi: Tamagotchi;

function init(energyMax: number, hungryMax: number, cleanMax: number): void {
    tamagotchi = new Tamagotchi(energyMax, hungryMax, cleanMax);
}

function handleAction (action: () => void): void {
    try {
        action();
    } catch (e) {
        console.log(e.message);
    }
}

const show   = (): void => console.log(tamagotchi.toString());
const eat    = (): void => handleAction(() => tamagotchi.eat());
const play   = (): void => handleAction(() => tamagotchi.play());
const sleep  = (): void => handleAction(() => tamagotchi.sleep());
const shower = (): void => handleAction(() => tamagotchi.shower());

const end = (): void => {
    console.log("Bye :)");
    process.exit(0);
}

function evaluate(command: string, args: string[]): void {
    switch (command) {
        case "init": init(Number(args[0]), Number(args[1]), Number(args[2])); break;
        case "show": show(); break;
        case "eat": eat(); break;
        case "play": play(); break;
        case "sleep": sleep(); break;
        case "shower": shower(); break;
        case "end": end(); break;
        default: console.log("Invalid command");
    }
}

runCLI("Tamagotchi", evaluate);