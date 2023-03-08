function solution(nums) {
    let set = new Set(nums);

    if( nums.length/2 >= set.size) {
        return set.size
    } else {
        return nums.length/2
    }
}

let nums = [3,3,3,2,2,2];
console.log(solution(nums));