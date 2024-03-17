//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, X] = input.shift().split(" ").map(Number);
const visit = input.shift().split(" ").map(Number);
const sum = Array.from({ length: N + 1 }, () => 0);
let maxVisit = 0;
let cnt = 0;

for (let i = 0; i < N; i++) {
  sum[i + 1] = sum[i] + visit[i];
}

//연산
for (let i = X; i <= N; i++) {
  if (sum[i] - sum[i - X] > maxVisit) {
    maxVisit = sum[i] - sum[i - X];
    cnt = 1;
  } else if (sum[i] - sum[i - X] === maxVisit) {
    cnt++;
  }
}

//출력
if (maxVisit === 0) {
  console.log("SAD");
} else {
  console.log(maxVisit);
  console.log(cnt);
}
