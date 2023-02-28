const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준14502input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


let [n, m] = input[0].split(" ").map((val) => Number(val)); //n개의 줄에 미로의 갯수

let _graph = [];


// let visited = Array.from({length:n},() => Array.from({length:m}).map(() => false));

for(let i=0; i<n; i++) {
    _graph.push(input[i+1].split(' ').map((val) => {return Number(val)}));
}

// console.log(_graph);

class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
}

 // 큐 클래스
 class Queue {
    constructor() {
        this.head = null // 제일 앞 노드
        this.rear = null // 제일 뒤 노드
        this.length = 0 // 노드의 길이
    }

    enqueue(data) {
        // 노드 추가.
        const node = new Node(data) // data를 가진 node를 만들어준다.
        if (!this.head) {
        // 헤드가 없을 경우 head를 해당 노드로
        this.head = node
        } else {
        this.rear.next = node // 아닐 경우 마지막의 다음 노드로
        }
        this.rear = node // 마지막을 해당 노드로 한다.
        this.length++
    }

    dequeue() {
        // 노드 삭제.
        if (!this.head) {
        // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
        return false
        }
        const data = this.head.data // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
        this.head = this.head.next
        this.length--

        return data
    }
}

// let queue = new Queue();
// let safetyMax = 0;


// 0은 빈 칸, 1은 벽, 2는 바이러스가 있는 위치이다. 2의 개수는 2보다 크거나 같고, 10보다 작거나 같은 자연수이다.

// 빈 칸의 개수는 3개 이상이다.

//벽세우기
// 


let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

let ans = 0;

function countCntArea(arr) {
    let cnt = 0;
    let queue = new Queue();

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(arr[i][j] === 2) queue.enqueue([i,j,queue.length+1]);
        }
    }
    
    while(queue.length) {
        const [x,y,cnt] = queue.dequeue();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 0) {
              arr[nx][ny] = 2;
              queue.enqueue([nx, ny,cnt+1]);
            }
        }
    }

    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(arr[i][j] === 0) {
                cnt +=1;
            }
        }
    }
    return cnt;
}

function DFS(cnt) {
    if(cnt === 3) {
        let newGraph = _graph.map((v) => [...v]);
        let safeCnt = countCntArea(newGraph);
        ans = Math.max(ans,safeCnt);
        return;
    }

    //백트래킹으로 3개 벽세우기
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(_graph[i][j] === 0) {
                _graph[i][j] = 1;
                DFS(cnt+1);
                _graph[i][j] = 0;
            }
        }
    }
}

DFS(0);

console.log(ans);