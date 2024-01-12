const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, C] = input.shift().split(" ").map(Number);
const letters = input.shift().split(" ").sort();
const vowels = ["a", "e", "i", "o", "u"];
let result = [];

//암호 만들기
function makePwd(current, index) {
  if (current.length === L) {
    let cnt = 0;
    //모음 개수 세기
    for (let i = 0; i < current.length; i++) {
      if (vowels.includes(current[i])) {
        cnt++;
      }
    }
    //모음 1개이상 + 자음 2개 이상 조건 만족
    if (cnt > 0 && L - cnt > 1) {
      result.push(current);
    }
  } else {
    for (let i = index; i < C; i++) {
      makePwd(current + letters[i], i + 1);
    }
  }
}

makePwd("", 0);

//출력
console.log(result.join("\n"));
