const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "적록색약input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


let n = Number(input[0]); //그래프의 갯수


// R,G,B구분됨
let 정상인 = [];

//G와 B만 보임
let 색약인 = [];



for(let i=0; i<n;i++) {
    정상인.push(input[i+1].split("").slice(0,n));
    색약인.push(input[i+1].split("").slice(0,n).map((value) => {
        if(value === 'R') {
            value = 'G';
        }
        return value;
    }))
}


let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

let 정상인cnt = 0;
let 색약인cnt = 0;




for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        //정상인 구획
        if(정상인[i][j] !== 'X') {
            let queue = [];
            let search = '';
            if(정상인[i][j] === 'R') {
                search = 'R';
            }
            if(정상인[i][j] === 'G') {
                search = 'G';
            }
            if(정상인[i][j] === 'B') {
                search = 'B';
            }
            정상인[i][j] = 'X';
            정상인cnt += 1;
            queue.push([i,j,search]);

            while(queue.length) {
                let [x,y,target] = queue.shift();
                for(let k=0; k<4; k++) {
                    let nx = x+dx[k];
                    let ny = y+dy[k];
                    if(nx>=0 && ny>=0 && nx<n && ny<n && 정상인[nx][ny] !== 'X' && 정상인[nx][ny] === target) {                        
                        정상인[nx][ny] = 'X';
                        queue.push([nx,ny,target])
                    }
                }
            }

        }
    }
} 





for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        //정상인 구획
        if(색약인[i][j] !== 'X') {
            let queue = [];
            let search = '';
            if(색약인[i][j] === 'G') {
                search = 'G';
            }
            if(색약인[i][j] === 'B') {
                search = 'B';
            }
            색약인[i][j] = 'X';
            색약인cnt += 1;
            queue.push([i,j,search]);

            while(queue.length) {
                let [x,y,target] = queue.shift();
                for(let k=0; k<4; k++) {
                    let nx = x+dx[k];
                    let ny = y+dy[k];
                    if(nx>=0 && ny>=0 && nx<n && ny<n && 색약인[nx][ny] !== 'X' && 색약인[nx][ny] === target) {                        
                        색약인[nx][ny] = 'X';
                        queue.push([nx,ny,target])
                    }
                }
            }

        }
    }
} 
console.log(정상인cnt,색약인cnt);