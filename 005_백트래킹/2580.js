//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const board = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let count = 0; //빈칸 개수
let checkRow = [...Array(9)].map((e) => Array(10).fill(0));
let checkCol = [...Array(9)].map((e) => Array(10).fill(0));
let checkBox = [...Array(9)].map((e) => Array(10).fill(0));
for (let i = 0; i < 9; i++) {
  board[i].forEach((e) => {
    if (e === 0) count++;
  });
  checkRow[i] = board[i];
  checkCol[i] = board.map((row) => row[i]);
  checkBox[i] = board.map();
}

function backtracking(cnt) {
  //기저 조건
  if (cnt === 0) {
    return;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (!checkRow[i][j] && !checkCol[i][j]) {
      }
    }
  }
}

//연산
backtracking(count);

//출력
console.log(checkCol);
