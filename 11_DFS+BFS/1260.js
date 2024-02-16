const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
let graph = new Array(N + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((e) => {
  e.sort((a, b) => a[0] - b[0]);
});
let visited = new Array(N + 1).fill(0);
let dfs = [];
let bfs = [];

// DFS
function dfsSearch(v) {
  if (visited[v]) return;
  visited[v] = 1;
  dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      dfsSearch(next);
    }
  }
}

//출력
dfsSearch(V);
console.log(dfs.join(" "));

visited.fill(0);

// BFS
function bfsSearch(v) {
  let queue = [v];
  //큐가 빌 때까지
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}

// 출력
bfsSearch(V);
console.log(bfs.join(" "));
