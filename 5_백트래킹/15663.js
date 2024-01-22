//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const SIZE = 8;
const [N, M] = input.shift().split(" ").map(Number);
const inputNum = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const num = Array.from({ length: SIZE }, () => 0);
const check = Array.from({ length: SIZE + 1 }, () => false);
let ans = [];
let temp = [];

function backtracking(cnt) {
  //기저조건
  if (cnt === M) {
    for (let i = 0; i < cnt; i++) {
      temp.push(num[i]);
    }
    temp = temp.join(" ");
    ans.includes(temp) ? {} : ans.push(temp);
    temp = [];
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!check[i]) {
      num[cnt] = inputNum[i];
      check[i] = true;
      backtracking(cnt + 1);
      //다시 돌아왔을때
      check[i] = false;
    }
  }
}

backtracking(0);

//출력
console.log(ans.join("\n"));
