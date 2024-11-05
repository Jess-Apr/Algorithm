// 문제 번호: 1927번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const numbers = input.splice(0).map(Number);

const minHeap = [];

// 두 요소의 자리를 바꿔주는 함수
function swap(idx1, idx2) {
    [minHeap[idx1], minHeap[idx2]] = [minHeap[idx2], minHeap[idx1]];
}

// 가장 뒤에 추가된 새로운 값을 우선순위대로 정렬해주는 함수
function heapifyUp() {
    // heap의 마지막 요소 idx와 그 부모 node의 index를 계산
    let curIdx = minHeap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    // 부모 node가 추가된 요소보다 크다면 위치 변경
    while (minHeap[parentIdx] && minHeap[parentIdx] > minHeap[curIdx]) {
        swap(curIdx, parentIdx);
        // 바뀐 위치를 갱신하여 다음 while문도 문제 없이 실행되도록 함
        curIdx = parentIdx;
        parentIdx = Math.floor((curIdx - 1) / 2);
    }
}

// heap에 값을 push하고 우선순위대로 정렬해주는 함수
function heapPush(value) {
    minHeap.push(value);
    heapifyUp();
}

// 가장 앞에 채워진 값을 우선순위대로 정렬해주는 함수
function heapifyDown() {
    // 가장 앞의 요소와 왼쪽 node, 오른쪽 node의 index 계산
    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;

    // 왼쪽 node 또는 오른쪽 node중 둘 중 하나는 가장 앞의 요소보다 작아야 우선순위에 변화가 생김
    while (
        (minHeap[leftIdx] && minHeap[leftIdx] < minHeap[curIdx]) ||
        (minHeap[rightIdx] && minHeap[rightIdx] < minHeap[curIdx])
    ) {
        // 왼쪽 node와 오른쪽 node 중 더 작은 node를 찾음
        let smallerIdx = leftIdx;
        if (minHeap[rightIdx] < minHeap[leftIdx]) {
            smallerIdx = rightIdx;
        }

        // 현재 요소와 더 작은 node의 위치 교환
        swap(curIdx, smallerIdx);
        // 바뀐 위치를 갱신하여 다음 while문도 문제 없이 실행되도록 함
        curIdx = smallerIdx;
        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
    }
}

// heap에 요소가 남아있다면 우선순위가 가장 높은 첫번째 요소를 반환하고, 남아있지 않다면 0을 반환해주는 함수
function heapPop() {
    if (minHeap.length === 1) {
        return minHeap.pop();
    } else if (minHeap.length <= 0) {
        return 0;
    }

    // 첫번째 요소가 반환되고 나면 빈자리에 가장 마지막 요소가 채워지고, bubbleDown 함수를 통해 다시 우선순위대로 정렬됨
    const value = minHeap[0];
    minHeap[0] = minHeap.pop();
    heapifyDown();
    return value;
}

const answer = [];
for (let number of numbers) {
    if (number === 0) {
        answer.push(heapPop());
    } else {
        heapPush(number);
    }
}
// for문에서 매번 console.log를 출력하면 속도가 느리기 때문에, 모아서 한번에 출력하기
console.log(answer.join("\n"));

// class MinHeap {
//     constructor() {
//         // Heap 초기화. 첫번째 요소는 계산상 편의를 위해 사용하지 않으므로 null로 설정
//         this.heap = [null];
//     }

//     // 두 요소의 자리를 바꿔주는 함수
//     swap(idx1, idx2) {
//         [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
//     }

//     // heap에 값을 push하고 우선순위대로 정렬해주는 함수
//     heapPush(value) {
//         this.heap.push(value);
//         this.bubbleUp();
//     }

//     // 가장 뒤에 추가된 새로운 값을 우선순위대로 정렬해주는 함수
//     bubbleUp() {
//         // heap의 마지막 요소 idx와 그 부모 node의 index를 계산
//         let curIdx = this.heap.length - 1;
//         let parentIdx = Math.floor(curIdx / 2);

//         // 부모 node가 추가된 요소보다 크다면 위치 변경
//         while (
//             this.heap[parentIdx] &&
//             this.heap[parentIdx] > this.heap[curIdx]
//         ) {
//             this.swap(curIdx, parentIdx);
//             // 바뀐 위치를 갱신하여 다음 while문도 문제 없이 실행되도록 함
//             curIdx = parentIdx;
//             parentIdx = Math.floor(curIdx / 2);
//         }
//     }

//     // heap에 요소가 남아있다면 우선순위가 가장 높은 첫번째 요소를 반환하고, 남아있지 않다면 0을 반환해주는 함수
//     heapPop() {
//         if (this.heap.length === 2) {
//             return this.heap.pop();
//         } else if (this.heap.length <= 1) {
//             return 0;
//         }

//         // 첫번째 요소가 반환되고 나면 빈자리에 가장 마지막 요소가 채워지고, bubbleDown 함수를 통해 다시 우선순위대로 정렬됨
//         const value = this.heap[1];
//         this.heap[1] = this.heap.pop();
//         this.bubbleDown();
//         return value;
//     }

//     // 가장 앞에 채워진 값을 우선순위대로 정렬해주는 함수
//     bubbleDown() {
//         // 가장 앞의 요소와 왼쪽 node, 오른쪽 node의 index 계산
//         let curIdx = 1;
//         let leftIdx = curIdx * 2;
//         let rightIdx = curIdx * 2 + 1;

//         // 왼쪽 node 또는 오른쪽 node중 둘 중 하나는 가장 앞의 요소보다 작아야 우선순위에 변화가 생김
//         while (
//             (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[curIdx]) ||
//             (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[curIdx])
//         ) {
//             // 왼쪽 node와 오른쪽 node 중 더 작은 node를 찾음
//             let smallerIdx = leftIdx;
//             if (this.heap[rightIdx] < this.heap[leftIdx]) {
//                 smallerIdx = rightIdx;
//             }

//             // 현재 요소와 더 작은 node의 위치 교환
//             this.swap(curIdx, smallerIdx);
//             // 바뀐 위치를 갱신하여 다음 while문도 문제 없이 실행되도록 함
//             curIdx = smallerIdx;
//             leftIdx = curIdx * 2;
//             rightIdx = curIdx * 2 + 1;
//         }
//     }
// }

// const minHeap = new MinHeap();
// const answer = [];
// for (let number of numbers) {
//     if (number === 0) {
//         answer.push(minHeap.heapPop());
//     } else {
//         minHeap.heapPush(number);
//     }
// }
// // for문에서 매번 console.log를 출력하면 속도가 느리기 때문에, 모아서 한번에 출력하기
// console.log(answer.join("\n"));
