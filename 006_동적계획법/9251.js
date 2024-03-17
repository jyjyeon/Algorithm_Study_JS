//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const string1 = input[0].trim();
const string2 = input[1].trim();
const len1 = string1.length;
const len2 = string2.length;

//이차원 배열 선언
const dp = new Array(len1 + 1).fill(0).map(() => new Array());

//이차원 배열 0으로 초기화
for (let i = 0; i <= len1; i++) {
  for (let j = 0; j <= len2; j++) {
    dp[i][j] = 0;
  }
}

for (let i = 1; i <= len1; i++) {
  for (let j = 1; j <= len2; j++) {
    if (string1[i - 1] === string2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

//출력
console.log(dp[len1][len2]);
