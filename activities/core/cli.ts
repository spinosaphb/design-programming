import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

type Evaluate = (command: string, args: string[]) => void;

function runCLI(projectTitle : string, evaluate: Evaluate): void {
    
    const genrateSlashes = (qtd: number) => `${'-'.repeat(qtd)}`
    const prompt = () => process.stdout.write('$ ');
    
    const terminalWidth: number = process.stdout.columns;
    const fullSlashes = genrateSlashes(terminalWidth);

    let qtdTitleSlashes: number = Math.floor((terminalWidth - projectTitle.length)/2);
    const titleSlashes = genrateSlashes(qtdTitleSlashes);

    console.log(`${fullSlashes}\n${titleSlashes}${projectTitle}${titleSlashes}\n${fullSlashes}`);
    
    prompt();
    rl.on('line', (line) => {
        const [command, ...args] = line.split(' ');

        evaluate(command, args);

        prompt();
    });
}

export { runCLI };