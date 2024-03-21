const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
let graph = Array(N + 1);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

//그래프 생성
for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((e) => {
  e.sort((a, b) => a - b);
});

let visited = Array(N + 1).fill(0);
let dfsResult = [];
function dfs(v) {
  if (visited[v]) return; //1. 방문한 노드면 리턴
  //2. 방문 안했으면 방문 체크
  visited[v] = 1;
  dfsResult.push(v);
  //3. for문 돌며 방문 체크
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      //방문 안 한 노드면 탐색시작
      dfs(next);
    }
  }
}

visited.fill(0);

let bfsResult = [];
function bfs(v) {
  let queue = [v]; //1. 큐 생성
  while (queue.length) {
    //2. 큐가 비어있지 않다면 루프 돌기
    let x = queue.shift();
    if (visited[x] === 1) {
      //3. 방문한 노드면 skip
      continue;
    }
    //4. 방문 안했으면 방문 체크
    visited[x] = 1;
    bfsResult.push(x);
    //5. for문 돌면서 인접한 노트 큐에 push
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
