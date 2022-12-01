const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const filestream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    });
    let calorieBundle = 0;
    let answerBundle = [];
    for await (const line of rl) {
        if (line == '') {
            let numberpush = answerBundle.push(calorieBundle);
            calorieBundle = 0;
        }
        calorieBundle += Number(line);
    }
    const maxvalues = Object.values(answerBundle);
    answerBundle.sort(function(a, b) { 
        return b - a;
    })
    console.log("Answer 1 is: " + Math.max(...maxvalues));
    console.log("Answer 2 is: " + (answerBundle[0]+answerBundle[1]+answerBundle[2]));
}

processLineByLine();