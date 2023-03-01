const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11660input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


const [n,m] = input.shift().trim().split(" ");
console.log(n,m);