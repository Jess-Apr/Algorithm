// 문제 번호: 11286번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const numbers = input.splice(0).map(Number);

const absHeap = [];

function swap(idx1, idx2) {
    [absHeap[idx1], absHeap[idx2]] = [absHeap[idx2], absHeap[idx1]];
}

function compareAbs(val1, val2) {
    if (Math.abs(val1) < Math.abs(val2)) {
        return true;
    } else if (Math.abs(val1) === Math.abs(val2) && val1 < val2) {
        return true;
    }

    return false;
}

function heapPush(value) {
    absHeap.push(value);
    heapifyUp();
}

function heapifyUp() {
    let curIdx = absHeap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    while (compareAbs(absHeap[curIdx], absHeap[parentIdx])) {
        swap(curIdx, parentIdx);
        curIdx = parentIdx;
        parentIdx = Math.floor((curIdx - 1) / 2);
    }
}

function heapPop() {
    if (absHeap.length === 1) {
        return absHeap.pop();
    } else if (absHeap.length <= 0) {
        return 0;
    }

    const value = absHeap[0];
    absHeap[0] = absHeap[absHeap.length - 1];
    absHeap.pop();
    heapifyDown();
    return value;
}

function heapifyDown() {
    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;

    while (
        (absHeap[leftIdx] && compareAbs(absHeap[leftIdx], absHeap[curIdx])) ||
        (absHeap[rightIdx] && compareAbs(absHeap[rightIdx], absHeap[curIdx]))
    ) {
        let smallerIdx = leftIdx;
        if (compareAbs(absHeap[rightIdx], absHeap[leftIdx])) {
            smallerIdx = rightIdx;
        }

        swap(curIdx, smallerIdx);
        curIdx = smallerIdx;
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
