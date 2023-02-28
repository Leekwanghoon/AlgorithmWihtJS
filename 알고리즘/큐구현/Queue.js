//  각각의 노드, 노드의 data와 다음 노드를 가리키고 있다.
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
        console.log(data);
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


const queue = new Queue(); //인스턴스 생성

queue.enqueue([3,5,0])

let [i,j,cnt] = queue.dequeue();
console.log(i,j,cnt);

