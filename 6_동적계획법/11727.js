const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
const MOD = 10007;
let dp = new Array();
dp[1] = 1; //2*1
dp[2] = 3; //2*2
for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + 2 * dp[i - 2];
  dp[i] %= MOD;
}

console.log(dp[N]);
