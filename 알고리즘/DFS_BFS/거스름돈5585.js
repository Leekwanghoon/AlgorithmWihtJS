const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준5585input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let remainder = 1000-Number(input);

let _max = Number.MAX_SAFE_INTEGER;
let 지폐종류 = [1,5,10,50,100,500];
let ch = new Array(1000).fill(0);
let queue = [];
queue.push([0,0]);
ch[0] = 1
while(queue.length) {
    let [잔돈,지폐수] = queue.shift();
    if(잔돈===remainder) {
        _max = Math.min(_max,지폐수);
    }else {
        for(let nx of 지폐종류) {
            if((nx+잔돈)>=0 && (nx+잔돈)<=1000 && ch[nx+잔돈]===0) {
                ch[nx+잔돈] = 1;
                queue.push([nx+잔돈,지폐수+1])
            }
        }
    }
}

console.log(_max);