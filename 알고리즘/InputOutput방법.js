// readline 모듈로 한 번에 한 줄씩 Readble 스트림에서 데이터를 읽기 위한 인터페이스를 제공한다.


//fs모듈은 FileSystem의 약자로 파일 처리와 관련된 모듈이다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
console.log(filePath);
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 5 5 3
// 5 4
// 5 2
// 1 2
// 3 4
// 3 1

let [n, m, v] = input[0].split(" ").map(Number);
console.log(input);
console.log(n,m,v);