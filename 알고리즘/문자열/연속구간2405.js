const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준2405input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");




for(let i=0; i<3; i++) {
    let _sequence = input[i].slice(0,8);
    let dy = Array.from({length:_sequence.length},() => 0);

    dy[0] = 1
    let previousValue = _sequence[0];
    let maxCnt = 1;
    for(let i=1; i<_sequence.length; i++) {
        if(previousValue==_sequence[i]) {
            dy[i] = dy[i-1] + 1
            if(maxCnt < dy[i]) maxCnt = dy[i]; 
        } else {
            dy[i] = 1;
            previousValue = _sequence[i];
        }
    }

    console.log(maxCnt);

}


