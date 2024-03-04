//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let dx = [0, 0, 1, 1, 1, -1, -1, -1];
let dy = [-1, 1, 0, 1, -1, 0, -1, 1];
let result = [];

while (idx != input.length - 1) {
  let [w, h] = input[idx++].split(" ").map(Number);
  let ans = 0;

  //지도 생성
  let map = Array.from({ length: h }, () => []);
  for (let i = 0; i < h; i++) {
    map[i].push(...input[idx++].split(" ").map(Number));
  }

  let visited = [...Array(h)].map((e) => Array(w).fill(0));
  const bfs = (start) => {
    let queue = [start];
    let count = 0;
    while (queue.length) {
      let [curX, curY] = queue.shift();
      if (!visited[curX][curY]) {
        if (map[curX][curY]) count++;
        visited[curX][curY] = 1;
        for (let i = 0; i < dx.length; i++) {
          //지도 벗어나는지 확인
          if (
            curX + dx[i] < 0 ||
            curY + dy[i] < 0 ||
            curX + dx[i] >= w ||
            curY + dy[i] >= h
          )
            continue;
          if (visited[curY + dy[i]][curX + dx[i]]) continue;
          if (map[curY + dy[i]][curX + dx[i]]) {
            queue.push([curX + dx[i], curY + dy[i]]);
          }
        }
      }
    }
    return count;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (visited[i][j]) continue;
      let cnt = bfs([j, i]);
      if (cnt) ans++;
    }
  }
  result.push(ans);
}

//출력
console.log(result.join("\n"));
