//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * BigInt를 써야 100점 (안 쓰면 58점)
 */
const N = input.shift();
const distance = input.shift().split(" ").map(Number);
const oil = input.shift().split(" ").map(Number);
let price = BigInt(0);
let curCost = oil[0];

for (let i = 0; i < N - 1; i++) {
  //가격 더 싼 곳 있으면
  if (oil[i] < curCost) {
    curCost = oil[i];
  }
  price += BigInt(curCost) * BigInt(distance[i]);
}

//출력
console.log(String(price));
