//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ");
const snack = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let ans = 0;

//과자 길이가 length일때 조카 몇명에게 나누어줄 수 있는지 구하기
function cntSnack(length) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (snack[i] >= length) {
      cnt += Math.floor(snack[i] / length);
    }
  }
  return cnt;
}

function findLength(left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = cntSnack(mid);

    if (cnt >= M) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
}

ans = findLength(1, snack[N - 1]);

//출력
console.log(ans);
