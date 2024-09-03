const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);
let num = 666;
let cnt = 1;
while (cnt !== N) {
  num++;
  if (String(num).includes("666")) cnt++;
}

console.log(num);
