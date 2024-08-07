//입력
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let nameMap = new Map();
let numMap = new Map();
let ans = [];

//포켓몬 도감
for (let i = 1; i < N + 1; i++) {
  nameMap.set(input[i].trim(), i);
  numMap.set(i, input[i].trim());
}

//문제
for (let j = N + 1; j < input.length; j++) {
  let question = input[j].trim();
  //포켓몬 이름
  if (isNaN(question)) {
    ans.push(nameMap.get(question));
  }
  //포켓몬 번호
  else {
    ans.push(numMap.get(Number(question)));
  }
}

//출력
console.log(ans.join("\n"));
