const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준2667input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); //그래프의 갯수

let _graph = [];


for(let i=0; i<n;i++) {
    _graph.push(input[i+1].split('').map((val) => {return Number(val)}));
}


let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

let _list = [];



for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(_graph[i][j] != 0) {
            let queue = [];
            let cnt = 1;
            queue.push([i,j]);
            _graph[i][j] = 0;
            while(queue.length) {
                let [x,y] = queue.shift();
                for(let k=0; k<4; k++) {
                    let nx = x + dx[k];
                    let ny = y + dy[k];
                    if(nx>=0 && ny>=0 && nx<n && ny<n && _graph[nx][ny] !=0) {
                        cnt += 1;
                        _graph[nx][ny] = 0;
                        queue.push([nx,ny])
                    }
                }
            }
            _list.push(cnt);
        }
    }
}

_list.sort((a,b) => {
    return a-b
})


console.log(_list.length);
for(let i=0; i<_list.length; i++) {
    console.log(_list[i])
}