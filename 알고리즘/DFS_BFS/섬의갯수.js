const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "섬의갯수input.txt";



let input = fs.readFileSync(filePath).toString().trim().split("\n");


let dx = [0,0,-1,1,-1,-1,1,1];
let dy = [-1,1,0,0,-1,1,-1,1];

while(true) {
    let [w,h] = input.shift().trim().split(" ").map((value) => Number(value));
    if(w==0 && h==0) {
        break;
    }
    
    let _graph = [];
    for(let i=0; i<h; i++) {
        _graph.push(input.shift().slice(0,w*2-1).split(" ").map((value) => Number(value)));
    }
    let cnt = 0;
    //1은땅 , 0은 바다
    for(let i=0; i<w; i++) {
        for(let j=0; j<h; j++) {
            if(_graph[j][i] == 1) {
                let queue = [];
                cnt += 1; //땅의갯수
                queue.push([i,j]);
                while(queue.length) {
                    let [x,y] = queue.shift(); // 가로,세로
                    for(let k=0; k<8; k++) {
                        let nx = x + dx[k]; //가로
                        let ny = y + dy[k]; //세로
                        if(nx>=0 && ny>=0 && nx<w && ny<h && _graph[ny][nx] == 1) {
                            _graph[ny][nx] = 0;
                            queue.push([nx,ny])
                        }
                    }
                }
            }
        }
    }
    console.log(cnt);
}

