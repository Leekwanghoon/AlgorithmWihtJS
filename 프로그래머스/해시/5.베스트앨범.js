function solution(genres, plays) {
// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다


    let mapMaxValue = new Map();

    let genresSort = new Map();

    for(let i=0; i<genres.length; i++) {
        if(!mapMaxValue.get(genres[i])) {
            mapMaxValue.set(genres[i],plays[i]);
        } else {
            mapMaxValue.set(genres[i],mapMaxValue.get(genres[i])+plays[i]);
        }
    }

    // 장르: [ [플레이횟수,고유번호],[플레이횟수,고유번호] ]
    for(let i=0; i<genres.length; i++) {
        if(!genresSort.get(genres[i])) {
            genresSort.set(genres[i],[[plays[i],i]])
        } else {
            genresSort.set(genres[i],[...genresSort.get(genres[i]),[plays[i],i]])
        }
    }

    //노래가 많이 재생된 장르정렬완료
    const sortedMaxValue = Array.from(mapMaxValue).sort((a,b) => b[1]-a[1]);

    const sortedGenre = Array.from(genresSort).map((value,index) => {
        let genreName = value[0]; // 'classic
        let genreList = value[1]; // [[500,0],[150,2]];

        let sortedGenre = genreList.sort((a,b) => {
            if(a[0]===b[0]) {
                return a[1]-b[1]
            } 
            return b[0]-a[0]
        });

        return [genreName,sortedGenre];
    });

    let objectMap = new Map();

    for(let i=0; i<sortedGenre.length; i++) {
        let arr = sortedGenre[i];
        objectMap.set(arr[0],arr[1]);
    }
    let answer = [];
    for(let i=0; i<sortedMaxValue.length; i++) {
        let genreName = sortedMaxValue[i][0];
        let mapValue = objectMap.get(genreName);
        let cnt = 0;
        for(let val of mapValue) {
            if(cnt<2) {
                answer.push(val[1]);
            }
            cnt +=1;
        }
    }
    return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];


console.log(solution(genres, plays)); 