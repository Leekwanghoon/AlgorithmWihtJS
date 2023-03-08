function solution(phone_book) {

  
    

    let map = new Map();
    for(let x of phone_book) {
        map.set(x,x.length)
    }
    // console.log(map);

    let sortMap = [...map.entries()].sort((a,b) => {
        return a[1]-b[1]
    });


    let _str = '97674223';
    
    // let _substr = _str.substr(0,3); //0~2인덱스까지
    let answer = true;
    for(let i=0; i<sortMap.length; i++) {
        let findValue = sortMap[i][0];
        let strLength = sortMap[i][1];
        for(let j=i+1; j<sortMap.length; j++) {
            let targetValue = sortMap[j][0].substr(0,strLength);
            // console.log(findValue,"find","0|0",targetValue,"target");
            // console.log(findValue,targetValue);
            if(targetValue === findValue) {
                return false
            }
        }
    }


    return answer;
}
const phone_book =["12","123","1235","567","88"]
// const phone_book = ["119", "1195524421","97674223"];
// const phone_book = ["123","456","789"];

console.log(solution(phone_book));