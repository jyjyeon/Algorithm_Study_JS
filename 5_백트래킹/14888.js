//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const [N, num, operator] = input;
let max = -1e9;
let min = 1e9;

function backtracking(cnt, sum) {
  //기저 조건
  if (cnt === N - 1) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }

  for (let i = 0; i < operator.length; i++) {
    if (operator[i]) {
      operator[i]--;
      let newSum = 0;
      switch (i) {
        case 0:
          newSum = sum + num[cnt + 1];
          break;
        case 1:
          newSum = sum - num[cnt + 1];
          break;
        case 2:
          newSum = sum * num[cnt + 1];
          break;
        case 3:
          newSum = ~~(sum / num[cnt + 1]); //비트연산자 사용
          break;
      }
      backtracking(cnt + 1, newSum);
      operator[i]++;
    }
  }
}

//연산
backtracking(0, num[0]);

//출력
console.log(max);
console.log(min);
