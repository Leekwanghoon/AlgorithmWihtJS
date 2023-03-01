const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준13549input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


const MAX = 100000000;
// 100001
let [start,end] = input[0].split(" ").map(Number);
let dp = new Array(30).fill(MAX);

let queue = [];

queue.push([start,0]);
dp[start] = 0;

while(queue.length) {
    let [x,level] = queue.shift();
    if(x===end) {
        cnt += 1;
        
        
    }

    for(let nx of  [x*2,x+1,x-1]) {
        if(nx <0 || nx > 30) continue;
        
        if(nx === x*2) {
            dp[nx] = Math.min(dp[x],dp[nx]);
            queue.unshift([nx,level+1]);
        } else {
            dp[nx] = Math.min(dp[x]+1,dp[nx]);
            queue.push([nx,level+1])
        }
    }
}
console.log(dp[end]);
console.log(cnt);