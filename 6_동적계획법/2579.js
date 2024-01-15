//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const score = input.map(Number); //각 계단의 점수
let dp = new Array();

dp[0] = score[0];
dp[1] = score[0] + score[1];
dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

/*
i번째 계단의 최대 점수 구하기
1) i-2 -> i (2칸 뛰기)
2) i-3 -> i-1 -> i (3칸 연속되지 않게 1칸 뛰기)
위 2가지 중 더 큰 값 선택
*/
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + score[i - 1]) + score[i];
}

//출력
console.log(dp[N - 1]);
