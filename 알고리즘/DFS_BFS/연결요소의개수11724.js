const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11724input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number); //n개의 줄에 미로의 갯수


let graph = Array.from({length:n+1},() => []);

let visited = Array.from({length:n+1},() => 0);

visited[0] = 1;
for(let i=0; i<m; i++) {
    let [start,end] = input[i+1].split(' ').map((val) => Number(val));
    graph[start].push(end);
    graph[end].push(start);
}

function DFS(L) {
    for(let nv of graph[L]) {
        if(visited[nv] == 0) {
            visited[nv] = 1;
            DFS(nv);
        }
    }
}

let cnt = 0;

for(let i=1; i<graph.length; i++) {
    if(visited[i] === 0) {
        visited[i] = 1;
        DFS(i); //탐색할 노드
        cnt += 1;
    }
}

console.log(cnt);


