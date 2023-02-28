const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준2178input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number); //n개의 줄에 미로의 갯수


let _graph = [];



for(let i=0; i<n; i++) {
    _graph.push(input[i+1].split('').map((val) => {return Number(val)}));
}


let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

let queue = [];
_graph[0][0] = 2;
queue.push([0,0]);


// 1이 이동할 수 있는 칸
while(queue.length) {
    let [x,y] = queue.shift();
    for(let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx >= 0 && ny>=0 && nx<n & ny<m && _graph[nx][ny] == 1) {
            _graph[nx][ny] = _graph[x][y] + 1;
            queue.push([nx,ny]);
        }
    }
}

console.log(_graph[n-1][m-1]-1);