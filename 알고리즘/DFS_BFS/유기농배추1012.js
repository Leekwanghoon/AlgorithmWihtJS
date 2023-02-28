const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준1012input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let iterNum = input.shift();


let dx = [-1,1,0,0]
let dy = [0,0,-1,1]
for(let k=0; k<iterNum; k++) { //테스트케이스 2개
    let [n, m, v] = input.shift().split(" ").map(Number); //가로길이, 세로길이, 배추가심어져있는 위치의 갯수.
    let _graph = Array.from(Array(m),() => new Array(n).fill(0));

    for(let j=0; j<v;j++) {
        let [가로,세로] = input.shift().split(" ").map(Number); // from이 세로, to가 가로
        _graph[세로][가로] = 1;
    }

    let cnt = 0;
    for(let i=0; i<m; i++) {
        for(j=0; j<n; j++) {
            if(_graph[i][j] == 1) {
                cnt += 1;
                let queue = [];
                _graph[i][j] = 0;
                queue.push([i,j]);
                while(queue.length) {
                    let [x,y] = queue.shift();
                    for(let d=0; d<4; d++) {
                        let nx = x + dx[d];
                        let ny = y + dy[d];
                        if(nx>=0 && ny>=0 && nx<m && ny<n && _graph[nx][ny] == 1) {
                            _graph[nx][ny] = 0;
                            queue.push([nx,ny]);
                        }
                    }
                }
            }
        }
    }

    console.log(cnt);

}

