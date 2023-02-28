 
    // while(lt<=rt) {
    //     if(lt === rt) {
    //         if(_list[lt] >= target) return lt;
    //         if(_list[lt] < target) {
    //             return lt+1;
    //         }
    //     }
    //     let mid = Math.floor((lt+rt)/2);
    //     if(target === _list[mid]) {
    //         return mid;
    //     } else if(target > _list[mid]) {
    //         lt = mid + 1;
    //     } else {
    //         rt = mid - 1;
    //     }
    // }

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준11053input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); //수열의 갯수
let _sequence = input[1].split(' ').map((val) => {return Number(val)});


let _list = [_sequence[0]];

/**
 * 
 * @param {*} _list 담겨있는배열
 * @param {*} target 타겟값
 * @param {*} lt 왼쪽인덱스
 * @param {*} rt 오른쪽인덱스
 * @returns 타겟값과 같으면 타겟값인덱스, 타겟값
 */
function binarySearch(_list,target,left,right) {
    while (left < right) {
        const mid = parseInt((left + right) / 2);
        if (_list[mid] < target) {
            left = mid + 1;
        } else if (_list[mid] > target) {
            right = mid;
        } else {
            //같으면 mid값준다.
            return mid;
        }
    }
    //교차하면 왼쪽준다.
    return right;
}

// 10 20 30 40
//시간 복잡도  n(for문) * logn(이분탐색)

for(let i=1; i<_sequence.length; i++) {
    //top보다 큰 경우,
    if(_sequence[i] > _list[_list.length-1]) {
        _list.push(_sequence[i]);
        continue;
    } else {
        let idx = binarySearch(_list,_sequence[i],0,_list.length-1);
        _list[idx] = _sequence[i];
    }
}

console.log(_list.length);



//98%실패
// let answer = 0;
// if(n==1) {
//     console.log(1);
//     return;
// }

// for(let i=1; i<n; i++) {
//     let max = 0;
//     for(let j=i-1;j>=0;j--) {
//         if(_sequence[j] < _sequence[i] && dy[j] > max) {
//             max = dy[j];
//         }
//     }
//     dy[i] = max+1;
//     answer = Math.max(answer,dy[i]);
// }
// console.log(dy);
// console.log(answer);