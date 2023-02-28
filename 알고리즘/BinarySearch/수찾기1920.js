//이것도 시간초과네;;
// 시간초과의 원인은 매번 console.log로 출력하는 문제때문임
// 배열에 push해서 모은다음 한번에 출력.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준1920input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


//입력받은 배열.
const N = parseInt(input.shift())
const arr = input.shift().split(' ').map((val) => Number(val));

//이분탐색은 정렬이 선행되어야한다.
arr.sort((a,b) => {
    return a-b
});

const M = parseInt(input.shift())
const arrM = input.shift().split(' ').map((val) => Number(val));


/**
 * 
 * @param {*} target 찾으려는 값 
 * @param {*} list  원본배열
 * @param {*} lt 왼쪽인덱스
 * @param {*} rt 오른쪽인덱스
 * @returns 있는경우 1 없는경우 0
 */
function BinarySearch(target,list,lt,rt) {
    while(lt<=rt) {
        let mid = parseInt((lt+rt)/2);

        if(list[mid] === target) {
            return 1;
        } else if(list[mid] > target) {
            //왼쪽이 큰 경우
            rt = mid-1;
        } else {
            lt = mid+1;
        }
    }
    return 0;
}

let answer = [];

for(let i=0; i<arrM.length; i++) {
    //매번 console.을 찍는 것은 비선호
    // console.log(BinarySearch(arrM[i],arr,0,arr.length-1));
    answer.push(BinarySearch(arrM[i],arr,0,arr.length-1));
}

//이렇게 찍어야 효율적임.
console.log(answer.join('\n'));
