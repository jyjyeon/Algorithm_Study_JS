const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());
let graph = new Array(N + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
let visited = new Array(N + 1).fill(0);
let dfs = [];

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

dfsSearch(1);

//출력
console.log(dfs.length - 1); //1번 컴퓨터는 빼주기
