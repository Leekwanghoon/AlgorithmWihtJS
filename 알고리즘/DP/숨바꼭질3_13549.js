const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준13549input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let [start,end] = input[0].split(" ").map(Number);
let ch = new Array(100001).fill(0);

let queue = [];
queue.push([start,0]);
ch[start] = 1;
let arr = [-1,1,2];

function findNx(index,value) {
    if(index==0) {
        return value-1; 
    }
    if(index==1) {
        return value+1;
    }
    if(index==2) {
        return 2*value;
    }
}
while(queue.length) {
    let [x,index] = queue.shift();
    if(x===end) {
        console.log(index);
        break;
    }

    for(let i= 0; i<arr.length; i++) {
        let nx = findNx(i,x);
        if(ch[nx] === 0 && nx>=0 && nx<= 100000) {
            if(i===2) {
                ch[nx] = 1;
                queue.push([nx,index]);
            } else {
                ch[nx] = 1;
                queue.push([nx,index+1]);
            }
        }
    }
    
}
