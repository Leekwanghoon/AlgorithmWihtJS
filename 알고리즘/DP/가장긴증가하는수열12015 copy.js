

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function binarySearch(result, input, i) {
    let left = 0;
    let right = result.length - 1;

    while (left < right) {
        const mid = parseInt((left + right) / 2);
        if (result[mid] < input[1][i]) {
            left = mid + 1;
        } else if (result[mid] > input[1][i]) {
            right = mid;
        } else {
            return mid;
        }
    }
    return right;
}
const input = [];
let count = 2;

rl.on("line", function (line) {
    input.push(line.split(" ").map((v) => parseInt(v)));
    count--;
    if (count === 0) rl.close();
}).on("close", function () {
    const n = input[0];
    const result = [input[1][0]];

    for (let i = 1; i < n; i++) {
        if (result[result.length - 1] < input[1][i]) {
            result.push(input[1][i]);
            continue;
        }

        const idx = binarySearch(result, input, i);
        result[idx] = input[1][i];
    }
    
    console.log(result.length);
    process.exit();
});