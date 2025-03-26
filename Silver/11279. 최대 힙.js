// 문제 번호: 11279번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const numbers = input.splice(0).map(Number);

const maxHeap = [];

function swap(idx1, idx2) {
    [maxHeap[idx1], maxHeap[idx2]] = [maxHeap[idx2], maxHeap[idx1]];
}

function heapPush(value) {
    maxHeap.push(value);
    heapifyUp();
}

function heapifyUp() {
    let curIdx = maxHeap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    while (maxHeap[parentIdx] && maxHeap[parentIdx] < maxHeap[curIdx]) {
        swap(curIdx, parentIdx);
        curIdx = parentIdx;
        parentIdx = Math.floor((curIdx - 1) / 2);
    }
}

function heapPop() {
    if (maxHeap.length === 1) {
        return maxHeap.pop();
    } else if (maxHeap.length <= 0) {
        return 0;
    }

    const value = maxHeap[0];
    maxHeap[0] = maxHeap[maxHeap.length - 1];
    maxHeap.pop();
    heapifyDown();
    return value;
}

function heapifyDown() {
    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;

    while (
        (maxHeap[leftIdx] && maxHeap[leftIdx] > maxHeap[curIdx]) ||
        (maxHeap[rightIdx] && maxHeap[rightIdx] > maxHeap[curIdx])
    ) {
        let largerIdx = leftIdx;
        if (maxHeap[rightIdx] > maxHeap[leftIdx]) {
            largerIdx = rightIdx;
        }

        swap(curIdx, largerIdx);
        curIdx = largerIdx;
        leftIdx = curIdx * 2 + 1;
        rightIdx = curIdx * 2 + 2;
    }
}

const answer = [];
for (let number of numbers) {
    if (number === 0) {
        answer.push(heapPop());
    } else {
        heapPush(number);
    }
}

console.log(answer.join("\n"));
