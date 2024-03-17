//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
/*
회의를
1. 빨리 끝나는 순으로
2. 끝나는 시각 같다면 빨리 시작하는 순으로
정렬
*/
const meeting = input
  .map((time) => time.split(" ").map(Number))
  .sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let ans = 0;
let endTime = 0;

//연산
for (let i = 0; i < N; i++) {
  //시작 시간이 이전 회의 끝난 시간보다 같거나 늦을 때
  if (meeting[i][0] >= endTime) {
    ans++;
    endTime = meeting[i][1];
  }
}

//출력
console.log(ans);
