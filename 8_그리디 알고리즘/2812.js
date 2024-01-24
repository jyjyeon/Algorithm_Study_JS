//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ");
const num = input.shift().trim();
let cnt = 0;
let arr = [];
let ans = "";

//연산
for (let i = 0; i < N; i++) {
  while (cnt < K && arr.length !== 0 && arr.at(-1) < num[i]) {
    arr.pop();
    cnt++;
  }
  arr.push(num[i]);
}

for (let i = 0; i < N - K; i++) {
  ans += arr[i];
}

//출력
console.log(ans);
