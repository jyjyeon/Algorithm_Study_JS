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
  //정점 번호 오름차순으로 방문하기 위해 배열
  e.sort((a, b) => a - b);
});

//DFS
let visited = Array(N + 1).fill(0);
let dfsResult = [];
function dfs(v) {
  if (visited[v]) return; //1. 방문한 노드면 리턴
  //2. 첫 방문이면 방문 기록
  visited[v] = 1;
  dfsResult.push(v);
  //3. for문 돌며 녿 ㅡ방문
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      dfs(next);
    }
  }
}

dfs(V);
console.log(dfsResult.join(" "));

//BFS
visited.fill(0);
let bfsResult = [];
function bfs(v) {
  let queue = [v]; //0. 큐 생성
  while (queue.length) {
    let x = queue.shift();
    //1. 방문한 노드면 skip
    if (visited[x] === 1) {
      continue;
    }
    //2. 첫 방문이면 방문 기록
    visited[x] = 1;
    bfsResult.push(x);
    //3. for문 돌며 노드 방문
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}

bfs(V);
console.log(bfsResult.join(" "));
