//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();

const SIZE = 8;
const [N, M] = input.split(" ").map(Number);
const num = Array.from({ length: SIZE }, () => 0);
const check = Array.from({ length: SIZE + 1 }, () => false);
let temp = [];
const ans = [];

function backtracking(cnt) {
  //cf.여기서 출력할 경우 시간 초과
  //기저조건
  if (cnt === M) {
    for (let i = 0; i < cnt; i++) {
      temp.push(num[i]);
    }
    ans.push(temp.join(" "));
    temp = [];
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!check[i]) {
      num[cnt] = i;
      check[i] = true;
      backtracking(cnt + 1);
      //다시 돌아왔을 때
      check[i] = false;
    }
  }
}

backtracking(0);

//출력
console.log(ans.join("\n"));
