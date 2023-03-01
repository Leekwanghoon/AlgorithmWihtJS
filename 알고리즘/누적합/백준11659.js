const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11659input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");



let [n,m] = input.shift().trim().split(" ").map((value) => Number(value));

const _graph = Array.prototype.concat([0],input.shift().trim().split(" ").map((value) => Number(value)));
let prefixSum = Array.from({length:n+1},() => 0);



for(let i=1; i<_graph.length; i++) {
    prefixSum[i] = prefixSum[i-1] + _graph[i];
}




_list = [];
for(let i=0; i<m; i++) {
    let [start,end] = input[i].trim().split(" ").map((val) => Number(val));
    _list.push(prefixSum[end]-prefixSum[start-1]);
}

console.log(_list.join("\n"));



