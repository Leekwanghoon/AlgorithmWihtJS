function solution(clothes) {
    
    let map = new Map();

    for(let i=0; i<clothes.length; i++) {
        if(!map.get(clothes[i][1])) {
            map.set(clothes[i][1],2);
        } else {
            map.set(clothes[i][1],map.get(clothes[i][1])+1);
        }
    }

    let answer = 1;
    for(const[index,value] of map) {
        answer *= value;
    }

    return answer-1;
}



//[의상의이름,의상의종류]
const clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
const clothes2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]; 


console.log(solution(clothes2));