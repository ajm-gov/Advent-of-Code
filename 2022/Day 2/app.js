const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const filestream = fs.createReadStream('input.txt');
    const rl = readline.createInterface({
        input: filestream,
        crlfDelay: Infinity
    })
    let currentScore = 0;
    let currentScore2 = 0;
    for await (const line of rl) {
        function switch1() {
            switch (line) {
                case 'A X':
                    currentScore += 4;
                    break;
                case 'A Y':
                    currentScore += 8;
                    break;
                case 'A Z':
                    currentScore += 3;
                    break;
                case 'B X':
                    currentScore += 1;
                    break;
                case 'B Y':
                    currentScore += 5;
                    break;
                case 'B Z':
                    currentScore += 9;
                    break;
                case 'C X':
                    currentScore += 7;
                    break;
                case 'C Y':
                    currentScore += 2;
                    break;
                case 'C Z':
                    currentScore += 6;
                    break;
                default:
                    console.log('No score calculated');
            }
        }
        function switch2() {
            switch (line) {
                case 'A X':
                    currentScore2 += 3;
                    break;
                case 'A Y':
                    currentScore2 += 4;
                    break;
                case 'A Z':
                    currentScore2 += 8;
                    break;
                case 'B X':
                    currentScore2 += 1;
                    break;
                case 'B Y':
                    currentScore2 += 5;
                    break;
                case 'B Z':
                    currentScore2 += 9;
                    break;
                case 'C X':
                    currentScore2 += 2;
                    break;
                case 'C Y':
                    currentScore2 += 6;
                    break;
                case 'C Z':
                    currentScore2 += 7;
                    break;
                default:
                    console.log('No score calculated');
            }
        }
        switch1();
        switch2();
    }
    console.log("The first answer is: " + currentScore);
    console.log("The second answer is: " + currentScore2);
}

processLineByLine();