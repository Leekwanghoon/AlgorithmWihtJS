
//input받는거
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준1260input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m, v] = input[0].split(" ").map(Number); //정점의개수:n,m간선의개수,시작점


let graph = Array.from(Array(n+1),() => []);
let visited = Array.from({length:n+1},() => false);

visited[0] = true;

for (let i = 0; i < m; i++) {
    let [from, to] = input[i + 1].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }


// 정렬을 잘해야한다.
graph.forEach((element) => {
  element.sort((a,b) => a-b)
})

let answer_dfs = [];

function DFS(v) {
    if(visited[v]) return;
    visited[v] = true;
    answer_dfs.push(v);
    for(let i=0; i< graph[v].length;i++) {
        let next = graph[v][i];
        if(visited[next] === false) {
            DFS(next);
        };
    }
}


DFS(v);
console.log(answer_dfs.join(" "));

let answer_bfs = [];

let queueVisited = Array.from({length:n+1},() => false);
queueVisited[0] = true;

let queue = [];
queue.push(v);

while(queue.length) {
    let x = queue.shift();
    if(queueVisited[x]) continue;
    else {
        answer_bfs.push(x)
        queueVisited[x] = true;
        for(let i=0;i<graph[x].length;i++) {
            let nx = graph[x][i];
            if(queueVisited[nx] === false) {
                queue.push(nx);
            }
        }
    }
}

console.log(answer_bfs.join(" "));



// function solution(n,arr,start) {
//         let graph = Array.from(Array(n+1),() => []);
//         let visited = Array.from({length:n+1},() => false);
        


//         //좌표정렬
//         visited[0] = true;
        

//         for(let [i,v] of arr) {
//             graph[v].push(i);
//             graph[i].push(v);
//         }

//         graph.forEach((element) => {
//           element.sort((a,b) => a-b)
//         })

//         console.log(graph);
//         // console.dir(graph,{'maxArrayLength':null});
        
//         let answer_dfs = [];

//         function DFS(v) {
//             if(visited[v]) return;
//             visited[v] = true;
//             answer_dfs.push(v);
//             for(let i=0; i< graph[v].length;i++) {
//                 let next = graph[v][i];
//                 if(visited[next] === false) {
//                     DFS(next);
//                 };
//             }
//         }

        
//         DFS(start);
//         console.log(answer_dfs.join(" "));

//         let answer_bfs = [];

//         let queueVisited = Array.from({length:n+1},() => false);
//         queueVisited[0] = true;
        
//         let queue = [];
//         queue.push(start);

//         while(queue.length) {
//             let x = queue.shift();
//             if(queueVisited[x]) continue;
//             else {
//                 answer_bfs.push(x)
//                 queueVisited[x] = true;
//                 for(let i=0;i<graph[x].length;i++) {
//                     let nx = graph[x][i];
//                     if(queueVisited[nx] === false) {
                        
//                         queue.push(nx);
//                     }
//                 }
//             }
//         }
        
//         console.log(answer_bfs.join(" "));

//     }

//     let arr2 = [[5,4],[5,2],[1,2],[3,4],[3,1]]
//     let arr = [[1,2],[1,3],[1,4],[2,4],[3,4]]
//     let arr3 = [[999,1000]]
//     let arr4 = [[5,4],[6,4],[6,8],[8,9],[1,10],[2,10],[10,3],[8,2],[1,7],[4,10]]
//     solution(10,arr4,4)


// // 1000 1 1000
// // 999 1000


// // 5 5 3
// // 5 4
// // 5 2
// // 1 2
// // 3 4
// // 3 1

// // 4 5 1 ,정점의갯수,간선의갯수, 시작할 정점의 번호
// // 1 2
// // 1 3
// // 1 4
// // 2 4
// // 3 4
