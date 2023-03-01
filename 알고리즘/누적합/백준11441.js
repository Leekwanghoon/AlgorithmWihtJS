const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11441input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let length = parseInt(input.shift().trim());

let prefixSum = Array.from({length:length+1},() => 0);

const _graph = input.shift().trim().split(" ").map((value) => Number(value));

_graph.unshift(0);
const iterNum = parseInt(input.shift().trim());


prefixSum[0] = 0;
for(let i=1; i<_graph.length; i++) {
    prefixSum[i] = prefixSum[i-1] + _graph[i];
}

_list = [];
for(let i=0; i<iterNum; i++) {
    let [start,end] = input[i].trim().split(" ").map((val) => Number(val));
    _list.push(prefixSum[end]-prefixSum[start-1]);
}

console.log(_list.join("\n"));


//누적합 알고리즘

