const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
input.sort((a, b) => a - b);
let avg = 0,
  middle,
  max = 1,
  range = 0;
const map = new Map();

//산술평균
for (let i = 0; i < N; i++) {
  avg += input[i];
}
avg = Math.round(avg / N);

//중앙값
middle = input[Math.floor(N / 2)];

//최빈값
for (let num of input) {
  if (map.has(num)) {
    max = Math.max(max, map.get(num) + 1);
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}
const maxArr = [];
for (let [key, val] of map) {
  if (val === max) {
    maxArr.push(key);
  }
}
max = maxArr.length === 1 ? maxArr[0] : maxArr[1];

//범위
range = input[N - 1] - input[0];

const ans = [avg, middle, max, range];

console.log(ans.join("\n"));
