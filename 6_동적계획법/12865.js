//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().trim().split(" ").map(Number);
const dp = Array.from({ length: K + 1 }, () => 0);
let w = [];
let v = [];

for (let i = 0; i < input.length; i++) {
  let [weight, value] = input[i].split(" ").map(Number);
  w.push(weight);
  v.push(value);
}

for (let i = 0; i < N; i++) {
  for (let j = K; j >= w[i]; j--) {
    dp[j] = Math.max(dp[j - w[i]] + v[i], dp[j]);
  }
}

//출력
console.log(dp[K]);
