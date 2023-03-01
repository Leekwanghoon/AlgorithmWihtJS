const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "16953input.txt";

let [start,end] = fs.readFileSync(filePath).toString().trim().split(" ").map((value) => Number(value));


let queue = [[start,1]];
let dx = [2,10];
let dy = [0,1];


let finalCnt = -1;
while(queue.length) {
    let [x,cnt] = queue.shift();
    for(let i=0; i<2; i++) {
        let nx = x*dx[i]+dy[i];
        if(nx < 0 || nx > end) {
            break;
        }
    
        if(nx === end) {
            finalCnt = cnt;
            break;
        }
        if(nx < end) {
            queue.push([nx,cnt+1]);
        }

        

    }   
}

if(finalCnt === -1) {
    console.log(-1)
} else {
    console.log(finalCnt+1);
}