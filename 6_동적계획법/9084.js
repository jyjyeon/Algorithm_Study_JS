//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input.shift()); //테스트 케이스 수
let idx = 0;

while (t--) {
  let n = Number(input[idx++].trim()); //동전 수
  let coin = input[idx++].split(" ").map(Number); //동전 종류
  let m = Number(input[idx++].trim()); //만들어야 하는 금액

  const knapsack = () => {
    let dp = Array.from({ length: m + 1 }, () => 0);

    dp[0] = 1;
    for (let i = 0; i < n; i++) {
      for (let j = coin[i]; j <= m; j++) {
        dp[j] += dp[j - coin[i]];
      }
    }
    return dp[m];
  };

  let ans = knapsack();
  console.log(ans);
}
