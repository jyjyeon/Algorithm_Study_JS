const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
let inputArray = input[1].split(" ").map(Number);
let sortedArray = inputArray.slice().sort((a, b) => a - b);
let sortedMap = new Map();
let ans = 0;

for (let i = 0; i < N; i++) {
  sortedMap.set(sortedArray[i], i);
}

for (let j = 1; j < N; j++) {
  if (j > sortedMap.get(inputArray[j])) {
    ans = Math.max(ans, j - sortedMap.get(inputArray[j]));
  }
}

console.log(ans);
