const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let ans = 0;

/**
 * 123부터 999까지의 숫자를 모두 반복문으로 돌면서
 * 1) 0 포함 or 중복숫자 포함하는 숫자 제거
 * 2) 숫자와 민혁이가 질문한 숫자와의 strike, ball 수 계산
 * 3) 계산된 strike, ball 수가 영수가 대답한 strike, ball 수와 다르면 check = false
 * 4) input 다 돌아도 영수의 대답과 strike, ball 수 동일하면 ans++
 */

for (let j = 123; j < 999; j++) {
  let check = true;
  let num = j.toString();

  //0 있으면 패스
  if (num.includes("0")) {
    continue;
  }

  //중복된 숫자 있으면 패스
  if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) {
    continue;
  }

  for (let i = 1; i < N + 1; i++) {
    let [guess, strike, ball] = input[i].split(" ").map(Number);
    let [strikeCnt, ballCnt] = count(num, guess.toString());
    if (strikeCnt != strike || ballCnt != ball) {
      check = false;
      break;
    }
  }
  if (check) {
    ans++;
  }
}

function count(num, guess) {
  let str = 0;
  let b = 0;

  for (let i = 0; i < 3; i++) {
    if (num[i] === guess[i]) {
      str++;
    } else if (num.includes(guess[i])) {
      b++;
    }
  }

  return [str, b];
}

console.log(ans);
