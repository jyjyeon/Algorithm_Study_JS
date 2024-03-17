//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const N = Number(fs.readFileSync(filePath).toString());

let ans = 0;
const SIZE = 15;

let checkCol = Array(SIZE).fill(0);
let checkLeft = Array(SIZE * 2).fill(0);
let checkRight = Array(SIZE * 2).fill(0);

function backtracking(row) {
  //기저 조건
  if (row === N) {
    ans++;
    return;
  }

  for (let i = 0; i < N; i++) {
    //i: 열
    if (!checkCol[i] && !checkLeft[row + i] && !checkRight[row - i + N]) {
      checkCol[i] = 1;
      checkLeft[row + i] = 1;
      checkRight[row - i + N] = 1;
      backtracking(row + 1);
      checkCol[i] = 0;
      checkLeft[row + i] = 0;
      checkRight[row - i + N] = 0;
    }
  }
}

backtracking(0);

console.log(ans);
