// 문제 번호: 1991번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const arr = input.map((el) => el.split(" "));
function solution(arr) {
    const graph = {};
    // 순회를 돌 때 사용할 그래프를 생성한다. 각 노드에 연결되어있는 노드를 [왼쪽노드, 오른쪽노드] 형태로 연결해준다.
    arr.forEach((v) => {
        graph[v[0]] = [v[1], v[2]];
    });

    // 각각의 순회에서 순회를 돈 순서대로 노드를 담아줄 배열 생성
    const preorderArr = [];
    const inorderArr = [];
    const postorderArr = [];

    // 전위순회
    function preorder(cur) {
        // 배열에 모든 노드가 담겼다면 배열을 반환한다.
        if (preorderArr.length === n) return preorderArr;
        // 전위 순회는 루트(부모) 노드 방문 -> 왼쪽 노드 방문 -> 왼쪽 노드 방문이 끝나면 오른쪽 노드 방문 순으로 돌기 때문에, 루트노드를 먼저 배열에 넣어준다.
        preorderArr.push(cur);

        const [left, right] = graph[cur];

        // 그 다음 루트(부모) 노드의 왼쪽 노드부터 순회하고, 왼쪽에 있는 노드들을 끝까지 방문했다면 현재 레벨의 오른쪽 노드를 방문한다.
        // 현재 레벨의 왼쪽과 오른쪽 노드 순회를 완료했다면 오른쪽의 서브 노드(한단계 위 레벨의 오른쪽 노드)로 옮겨 순회를 계속한다.
        if (left !== ".") {
            preorder(left);
        }
        if (right !== ".") {
            preorder(right);
        }
    }

    // 중위 순회
    function inorder(cur) {
        // 배열에 모든 노드가 담겼다면 배열을 반환한다.
        if (inorderArr.length === n) return inorderArr;

        const [left, right] = graph[cur];

        // 중위 순회는 마지막 레벨의 가장 왼쪽에 위치한 노드 방문 -> 이전 레벨의 부모 노드 방문 -> 해당 부모 노드의 오른쪽 노드 방문 순으로 돌게 된다.
        // 그래서 우선 가장 아래쪽의 왼쪽에 위치한 노드까지 우선 내려가주어야 한다.
        if (left !== ".") {
            inorder(left);
        }
        // 더 이상 내려갈 왼쪽 노드가 없으면 배열에 해당 노드를 담아준다.
        // 부모 노드의 경우, 왼쪽 노드 탐색이 끝나면 오른쪽 노드 탐색을 시작하기 전에 부모 노드를 먼저 배열에 담아준 후 오른쪽 노드 탐색을 한다.
        inorderArr.push(cur);
        if (right !== ".") {
            inorder(right);
        }
    }

    // 후위 순회
    function postorder(cur) {
        // 배열에 모든 노드가 담겼다면 배열을 반환한다.
        if (postorderArr.length === n) return postorderArr;

        const [left, right] = graph[cur];

        // 후위 순회는 마지막 레벨의 가장 왼쪽에 위치한 노드 방문 -> 오른쪽 형제 노드 방문 -> 해당 부모 노드 방문 순으로 돈다.
        // 따라서 중위 순회와 마찬가지로 우선 가장 왼쪽, 아래쪽에 위치한 노드로 내려간 후, 왼쪽 노드 탐색이 끝나면 형제노드로 이동한다.
        if (left !== ".") {
            postorder(left);
        }
        if (right !== ".") {
            postorder(right);
        }
        // 부모 노드의 왼쪽, 오른쪽 노드 탐색이 완료되면 이후에 부모 노드를 배열에 담아준다.
        postorderArr.push(cur);
    }

    preorder("A");
    inorder("A");
    postorder("A");
    return [
        preorderArr.join(""),
        inorderArr.join(""),
        postorderArr.join(""),
    ].join("\n");
}

console.log(solution(arr));
