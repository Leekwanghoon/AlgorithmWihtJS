const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준2606input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let c = Number(input[0]); //컴퓨터의갯수
let vc = Number(input[1]); //바이러스의 갯수


//인접행렬 dfs로풀자
let _graph = Array.from(Array(c+1),() => []);
let visited = Array.from({length:c+1},() => false);

visited[0] = true;

for(let i=1; i<=vc; i++) {
    let [from,to] = input[i+1].split(' ').map(val => {return Number(val)});
    _graph[from].push(to);
    _graph[to].push(from);
}

console.log(_graph);

let cnt = 0;
function DFS(v) {
    console.log(v,cnt);
    if(visited[v]) return
    visited[v] = true;
    cnt += 1;
    for(let i = 0; i <_graph[v].length; i++) {
        let next = _graph[v][i];
        if(visited[next] === false) {
            DFS(next);
        }
    }
}

DFS(1)
console.log(cnt-1);