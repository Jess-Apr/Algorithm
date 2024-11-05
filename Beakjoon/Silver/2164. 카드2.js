// 문제 번호: 2164번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const num = +input;

// for문과 pop(), unshift()를 이용해서 문제를 풀려고 하면 O(n^2)의 시간복잡도가 되어 시간 초과가 된다.
// 연결 리스트를 사용하면 head와 tail을 알고 있는 한 데이터의 삽입과 삭제가 O(1)의 시간 복잡도를 가지기 때문에 이 문제를 더욱 효율적으로 해결할 수 있다.

// 하나의 데이터를 가지는 노드를 생성하는 클래스
// 해당 노드가 가지는 값을 가리키는 value 키와, 이전, 다음 노드를 가리키는 prev, next 키가 존재한다.
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

// 연결 리스트를 생성하는 클래스
// 가장 앞의 노드를 가리키는 head, 가장 뒤의 노드를 가리키는 tail, 연결 리스트의 크기를 나타내는 size가 있다.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  // 새로운 노드를 생성한다.
  // 만약 head가 존재하지 않는다면 (연결리스트의 크기가 0이라면) 생성한 노드를 head로 설정한다.
  // head가 존재한다면 (연결리스트의 크기가 1 이상이라면) 현재 tail 노드의 next 값을 새로 생성한 노드로 설정하고, 새로 생성된 노드의 prev 값을 tail 노드로 설정한다.
  // 새롭게 생성되어 추가된 노드를 tail로 재설정하고 size를 1 키운다.
  add(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  // 현재 head 노드의 value 값을 리턴한다.
  getHead() {
    return this.head.value;
  }

  // head 값을 현재 head 노드의 next 값이 가리키는 노드 (즉, 두번째 노드)로 변경하고, 새롭게 head로 설정된 노드의 prev 값을 null로 바꿔 기존의 head였던 노드를 연결 리스트에서 제거한다.
  // size의 값을 하나 감소시킨다.
  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  // 현재 연결 리스트의 크기를 리턴한다.
  getSize() {
    return this._size;
  }
}

// 문제 해결에 사용할 연결 리스트 인스턴스 생성
const node = new LinkedList();

// 인풋으로 들어온 숫자만큼의 연결 리스트 노드 생성
for (let i = 1; i <= num; i++) {
  node.add(i);
}

// 연결 리스트의 사이즈가 1이 될때까지 가장 앞의 노드를 삭제하고, 그 다음 앞의 노드를 맨 뒤에 추가한 뒤 그 노드를 삭제하는 작업을 반복한다.
while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

// 연결 리스트에는 값이 하나만 남아있으므로 getHead로 값을 출력해준다.
console.log(node.getHead());
