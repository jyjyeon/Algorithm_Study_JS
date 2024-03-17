//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const liquid = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => Math.abs(a) - Math.abs(b));

let ans = [];
let diff = 2e9 + 1;
for (let i = 1; i < N; i++) {
  let sum = liquid[i] + liquid[i - 1];
  if (sum === 0) {
    ans = [liquid[i], liquid[i - 1]];
    break;
  } else if (Math.abs(sum) < Math.abs(diff)) {
    diff = sum;
    ans = [liquid[i], liquid[i - 1]];
  }
}

//출력
console.log(ans.sort((a, b) => a - b).join(" "));
