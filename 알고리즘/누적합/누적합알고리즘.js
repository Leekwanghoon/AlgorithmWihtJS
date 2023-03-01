// 완전탐색시 시간복잡도 n*2
// prefix sum 구현시 n

//1. 각구간의 누적된합을 구한다
//2. i번째부터 j번째의합은 = arr[j] - arr[i-j-1] 의 합

let arr = [7,6,3,2,1];

let prefixSum = Array.from({length:arr.length},() => 0);
prefixSum[0] = arr[0]
for(let i=1; i<arr.length; i++) {
    prefixSum[i] = prefixSum[i-1] + arr[i];
}

console.log(prefixSum)


// 인덱스 2(i)~4(j)번사이의 합
// prefixSum[j] - prefixSum[i-j-1]
console.log(prefixSum[4] - prefixSum[1])