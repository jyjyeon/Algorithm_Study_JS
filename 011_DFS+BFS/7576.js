//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const dr = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; //방향
let visited = [...Array(N)].map((e) => Array(M).fill(0));
let queue = [];
let cnt = M * N; //익을 떼까지의 일수
let idx = 0;
let ans;

for (let i = 0; i < input.length; i++) {
  let box = input[i].split(" ").map(Number);

  box.forEach((tomato, pos) => {
    if (tomato === 1) {
      queue.push([i, pos, 0]);
      visited[i][pos] = 1;
      cnt--;
    } else if (tomato === -1) {
      visited[i][pos] = 1;
      cnt--;
    }
  });
}

//BFS
while (queue.length != idx) {
  const [x, y, day] = queue[idx];
  for (let i = 0; i < 4; i++) {
    const xPos = x + dr[i][0];
    const yPos = y + dr[i][1];

    if (xPos < 0 || yPos < 0 || xPos >= N || yPos >= M) continue;
    if (!visited[xPos][yPos]) {
      //방문 안했으면
      visited[xPos][yPos] = 1;
      queue.push([xPos, yPos, day + 1]);
      cnt--;
    }
  }

  idx++;
  ans = day;
}

//출력
console.log(cnt ? -1 : ans);
