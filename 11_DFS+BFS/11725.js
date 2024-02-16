//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let tree = new Array(N + 1);
let parent = new Array(N + 1).fill(0);

for (let i = 0; i < tree.length; i++) {
  tree[i] = [];
}
for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

function dfsSearch(prev, curr) {
  if (parent[curr]) {
    return;
  }
  parent[curr] = prev;
  for (let i = 0; i < tree[curr].length; i++) {
    dfsSearch(curr, tree[curr][i]);
  }
}

dfsSearch(1, 1); //1의 부모 1로 설정

//출력
console.log(parent.slice(2).join("\n")); //2번 노드부터 출력
