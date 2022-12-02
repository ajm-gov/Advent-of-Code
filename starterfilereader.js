const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const filestream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    })

    for await (const line of rl) {

    }
}

processLineByLine();