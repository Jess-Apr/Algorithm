// 문제 번호: 1446번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, length] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const shortCut = input.map((el) => el.split(" ").map((n) => +n));

function solution(n, length, shortCut) {
  // 고속도로의 길이만큼 순회를 돌릴 dist 배열을 생성한다.
  // 0부터 고속도로의 길이만큼 돌려야 하기 때문에 배열은 length + 1 길이로 만들어준다.
  let dist = Array.from(Array(length + 1).fill(Infinity));
  // graph 배열에는 각 요소의 index를 출발점이라고 했을때, 그 위치에 지름길이 있다면 도착 지점과 거리를 넣어준다.
  const graph = Array.from(Array(length + 1), () => []);

  // 반복문을 통해 graph의 각 위치에 지름길의 도착점과 길이를 push 해준다.
  // 만약 도착점이 고속도로의 길이보다 크거나, 지름길의 길이가 그냥 일반 길을 통해서 가는 것보다 더 길다면 graph 배열에 넣지 않고 생략한다.
  for (let i = 0; i < n; i++) {
    const [start, end, l] = shortCut[i];
    if (end > length) continue;
    if (end - start <= l) continue;

    graph[start].push([end, l]);
  }

  // prev는 현재 위치까지 오는 데 가장 짧은 거리를 저장한다.
  let prev = -1;
  for (let i = 0; i <= length; i++) {
    // i가 0이 아니라면, prev의 값은 dist[i - 1](현재위치의 바로 전 위치까지의 온 길이 중 가장 짧은 길이)로 갱신된다.
    if (i) prev = dist[i - 1];

    // *
    // prev + 1은 현재 위치를 의미한다. dist[i]에 지름길을 통해 온 기록이 남아있다면, 그 기록과 prev + 1 중 더 짧은 거리를 dist[i](현재 위치)에 갱신한다.
    // dist[i]에 기록된 값이 없다면 dist[i]는 Infinity일 것이므로, 자동적으로 prev + 1이 dist[i]에 기록된다.
    dist[i] = Math.min(dist[i], prev + 1);

    // 만약에 graph의 특정 위치에 지름길이 있다면, 반복문으로 순회를 돌며(지름길이 한개 이상일 수 있으므로) dist의 도착점 위치인 index에 지름길을 질러간 거리를 기록해준다.
    // (* 표시 된 부분) dist[i]가 어떤 지름길의 도착점이라면, 이 반복문을 통해 기록된 길이가 남아있을 것이다.
    for (let [next, cost] of graph[i]) {
      if (dist[next] > dist[i] + cost) {
        dist[next] = dist[i] + cost;
      }
    }
  }

  // 최종 위치인 length에서 가장 최단 거리를 기록한 dist[length]를 출력한다.
  return dist[length];
}

console.log(solution(n, length, shortCut));
