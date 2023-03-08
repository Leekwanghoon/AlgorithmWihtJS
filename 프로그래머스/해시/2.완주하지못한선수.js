function solution(participants, completions) {
    let map = new Map();
    let nocomp = [];
    for(let part of participants) {
        if(!map.get(part)) {
            map.set(part,1);
        } else {
            map.set(part,map.get(part)+1);
        }
    }

    // console.log(map);
    for(let comp of completions) {
            map.set(comp,map.get(comp)-1);
    }
    // console.log(map);
    for(const [key,value] of map) {
        if(value > 0) {
            nocomp.push(key);
        }

    }

    return nocomp[0];
}

let participants = ["leo", "kiki", "eden"];
let completions = 	["eden", "kiki"];

console.log(solution(participants,completions));