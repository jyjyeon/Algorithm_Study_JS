//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const tree = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let ans = 0;

function calHeight(height) {
  let cutTree = 0;
  for (let i = 0; i < N; i++) {
    if (tree[i] >= height) {
      cutTree += tree[i] - height;
    }
  }
  return cutTree;
}

function findHeight(left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cal = calHeight(mid);

    if (cal >= M) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
}

ans = findHeight(1, tree[N - 1]);

//출력
console.log(ans);
