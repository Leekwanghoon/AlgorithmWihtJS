const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "섬의갯수input.txt";



let input = fs.readFileSync(filePath).toString().trim().split("\n");



while(true) {
    let [w,h] = input.shift().trim().split(" ").map((value) => Number(value));
    if(w==0 && h==0) {
        break;
    }
    let _graph = [];
    
}

console.log(w,h);
console.log(input);
