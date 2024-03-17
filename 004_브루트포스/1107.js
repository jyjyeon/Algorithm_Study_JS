//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = parseInt(input.shift());
const brokenCnt = parseInt(input[0]);
let broken;
if (brokenCnt > 1) {
  broken = input[1].split(" ").map(Number);
} else {
  broken = [parseInt(input[1])];
}
let ans = Math.abs(target - 100); //100번 채널에서 +.-버튼으로 가는 경우
let temp;
for (let i = 0; i < 1000000; i++) {
  let numString = i.toString();
  let canVisit = true; //방문가능 여부
  for (let j = 0; j < numString.length; j++) {
    if (broken.includes(parseInt(String(i)[j]))) {
      //방문 불가능한 채널이면
      canVisit = false;
      break;
    }
  }

  if (canVisit) {
    ans = Math.min(ans, Math.abs(target - i) + numString.length);
  }
}

//출력
console.log(ans);
