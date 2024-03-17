//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const INF = 1e7;
const N = Number(input.shift());
const M = Number(input.shift());
let graph = [...Array(N + 1)].map((e) => Array(N + 1).fill(INF));
let ans = [];

for (let i = 0; i <= N; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < input.length; i++) {
  let [from, to, cost] = input[i].split(" ").map(Number);
  graph[from][to] = Math.min(graph[from][to], cost); //최소 비용으로
}

//플로이드-워셜 연산
for (let i = 1; i <= N; i++) {
  //중간 정점
  for (let j = 1; j <= N; j++) {
    //출발 정점
    for (let k = 1; k <= N; k++) {
      //도착 정점
      let price = graph[j][i] + graph[i][k];
      graph[j][k] = Math.min(graph[j][k], price); //최소값 선택
    }
  }
}

//출력
for (let i = 1; i <= N; i++) {
  let arr = [];
  for (let j = 1; j <= N; j++) {
    if (graph[i][j] === INF) {
      arr.push(0);
    } else {
      arr.push(graph[i][j]);
    }
  }
  ans.push(arr.join(" "));
}
console.log(ans.join("\n"));
