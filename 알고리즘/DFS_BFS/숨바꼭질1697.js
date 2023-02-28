const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준1697input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let [start,end] = input[0].split(" ").map(Number);
let ch = new Array(100001).fill(0);

let queue = [];
queue.push([start,0]);
ch[start] = 1;
while(queue.length) {
    let [x,index] = queue.shift();
    if(x===end) {
        console.log(index);
        break;
    }
    for(let nx of [x-1,x+1,x*2]) {
        if(ch[nx] === 0 && nx>=0 && nx<= 100000) {
            ch[nx] = 1;
            queue.push([nx,index+1]);
        }
    }
}
