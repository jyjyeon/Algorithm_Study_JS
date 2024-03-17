const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const paper = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const SIZE = 10;
const INF = 26;
let paperCnt = [0, 5, 5, 5, 5, 5]; //인덱스 = 색종이 크기

function promising(row, col, paperSize) {
  for (let i = row; i < row + paperSize; i++) {
    for (let j = col; j < col + paperSize; j++) {
      if (paper[i][j] == 0) {
        return false;
      }
    }
  }
  return true;
}

function fillPaper(row, col, paperSize, fillValue) {
  for (let i = row; i < row + paperSize; i++) {
    for (let j = col; j < col + paperSize; j++) {
      paper[i][j] = fillValue;
    }
  }
}

function backtracking(idx, cnt) {
  let ans = INF;

  if (idx == SIZE * SIZE) {
    return Math.min(ans, cnt);
  }
  let row = Math.floor(idx / SIZE);
  let col = idx % SIZE;

  if (!paper[row][col]) {
    return backtracking(idx + 1, cnt);
  }
  if (ans <= cnt) {
    return INF;
  }

  for (let i = 5; i >= 1; i--) {
    if (row + i > SIZE || col + i > SIZE || !paperCnt[i]) {
      continue;
    }
    if (promising(row, col, i)) {
      paperCnt[i]--;
      fillPaper(row, col, i, 0);
      ans = Math.min(ans, backtracking(idx + 1, cnt + 1));
      paperCnt[i]++;
      fillPaper(row, col, i, 1);
    }
  }
  return ans;
}

let finalAns = backtracking(0, 0);
if (finalAns === INF) {
  finalAns = -1;
}
console.log(finalAns);
