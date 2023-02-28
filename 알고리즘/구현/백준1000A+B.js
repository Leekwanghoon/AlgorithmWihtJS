const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준1000Input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map((value) => Number(value));

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(Math.floor(input[0] / input[1]));
console.log(input[0] % input[1]);

