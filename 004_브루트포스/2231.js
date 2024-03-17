//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = Number(input);

let ans = 0;
let temp;
let sum;

for (let i = 1; i < input; i++) {
  temp = i;
  sum = i;
  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  //생성자 있는 경우
  if (sum === input) {
    ans = i;
    break;
  }
}

//출력
console.log(ans);
