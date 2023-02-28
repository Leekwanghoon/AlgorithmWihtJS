const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "백준7576input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number); //n개의 줄에 미로의 갯수


let _graph = [];



for(let i=0; i<m; i++) {
    _graph.push(input[i+1].split(' ').map((val) => {return Number(val)}));
}


let dx = [-1,1,0,0];
let dy = [0,0,-1,1];

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

let queue = new Queue();



//토마토의 좌표를 먼저 queue에 넣어줌.
for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
        if(_graph[i][j] == 1) {
            // queue.push([i,j]);
            queue.enqueue([i,j,0])
        }
    }
}

while(queue.length) {
    // queue.shift의 문제로 queue를 직접 class로 빼서 구현하겠다.
    let [x,y,cnt] = queue.dequeue(); //해당 shift연산은 O(n)이 발생
    for(let i=0; i<4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx >= 0 && ny>=0 && nx<m & ny<n && _graph[nx][ny] == 0) {
            _graph[nx][ny] = _graph[x][y]+1
            queue.enqueue([nx,ny,cnt+1]);
        }
    }
}

let max = 0;
for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
        if(_graph[i][j] === 0) {
            console.log("-1");
            return;
        } else {
            if(max < _graph[i][j]) {
                max = _graph[i][j];
            }
        }
    }
}

console.log(max-1);

