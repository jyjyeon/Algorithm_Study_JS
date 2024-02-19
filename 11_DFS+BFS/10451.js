//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0].trim());
let idx = 1;

while (t--) {
  let n = Number(input[idx++].trim());
  let arr = input[idx++].split(" ").map(Number);
  arr.unshift(0);

  let cnt = 0; //순열 사이클 개수

  let visited = Array.from({ length: n + 1 }, () => 0);
  const search = (start) => {
    let next = arr[start];
    if (!visited[next]) {
      visited[next] = 1;
      search(next);
    } else {
      cnt++;
      return;
    }
  };
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      search(i);
    }
  }
  console.log(cnt);
}
