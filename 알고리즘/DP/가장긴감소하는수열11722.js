const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11053input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); //수열의 갯수
let _sequence = input[1].split(' ').map((val) => {return Number(val)});

let dy = Array.from({length:n}, () => 0);
dy[0] = 1

let answer = 0;
if(n==1) {
    console.log(1);
    return;
}

for(let i=1; i<n; i++) {
    let max = 0;
    for(let j=i-1;j>=0;j--) {
        if(_sequence[j] > _sequence[i] && dy[j] > max) {
            max = dy[j];
        }
    }
    dy[i] = max+1;
    answer = Math.max(answer,dy[i]);
}
console.log(answer);