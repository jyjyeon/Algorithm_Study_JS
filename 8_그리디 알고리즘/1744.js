//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();
let neg = input.filter((v) => v <= 0).sort((a, b) => a - b);
let pos = input.filter((v) => v > 0).sort((a, b) => b - a);
let ans = 0;

//음수 + 0
for (let i = 0; i < neg.length; i += 2) {
  if (i === neg.length - 1) {
    ans += neg[i];
  } else {
    ans += neg[i] * neg[i + 1];
  }
}

//양수
for (let i = 0; i < pos.length; i += 2) {
  if (i === pos.length - 1) {
    ans += pos[i];
  } else if (pos[i] * pos[i + 1] > pos[i] + pos[i + 1]) {
    ans += pos[i] * pos[i + 1];
  } else {
    ans += pos[i] + pos[i + 1];
  }
}

//출력
console.log(ans);
