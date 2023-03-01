const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준13549input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let [start,end] = input[0].split(" ").map(Number);
let ch = new Array(100001).fill(false);

let queue = [];
queue.push([start,0]);
ch[start] = true;


while(queue.length) {
    let [x,cnt] = queue.shift();
    if(x===end) {
        console.log(cnt);
        break;
    }

    for(let nx of  [x*2,x+1,x-1]) {
        if(nx <0 || nx > 100000 || ch[nx]) continue;
        
        if(nx === x*2) {
            queue.unshift([nx,cnt]);
        } else {
            queue.push([nx,cnt+1])
        }
        ch[nx] = true;
    }
    
}
