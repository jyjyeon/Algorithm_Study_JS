//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let K = Number(input.shift());
let index = 0;
let ans = [];

/**
 * 이분 그래프 판별법
 * 정점을 탐색하며 값 두 개를 번갈아 부여
 * 만약 인접한 정점끼리 값이 같다면 이분 그래프가 아니다
 */

while (K--) {
  let flag = 1; //이분그래프 여부
  let [V, E] = input[index++].split(" ").map(Number);
  //그래프 생성
  let graph = Array.from({ length: V + 1 }, () => []);
  for (let i = 0; i < E; i++) {
    let [from, to] = input[index++].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  //BFS 연산
  let visited = Array.from({ length: V + 1 }, () => 0);

  const bfs = (start) => {
    let queue = [];
    queue.push(start);

    while (queue.length) {
      let x = queue.shift();

      for (let i = 0; i < graph[x].length; i++) {
        let next = graph[x][i];
        if (visited[next] === 0) {
          if (visited[x] === 1) {
            visited[next] = 2;
          } else {
            visited[next] = 1;
          }
          queue.push(next);
        } else if (visited[next] === visited[x]) {
          return;
        }
      }
    }
  };

  //모든 정점이 연결되어 있지 않을 수 있음
  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      bfs(i);
    }
  }

  //인접 노드끼리 색 같은 경우 있는지 확인
  loop: for (let i = 1; i <= V; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (visited[i] === visited[graph[i][j]]) {
        ans.push("NO");
        flag = 0;
        break loop;
      }
    }
  }
  if (flag) {
    ans.push("YES");
  }
}

//출력
console.log(ans.join("\n"));
