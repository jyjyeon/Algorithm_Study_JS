//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [N, M] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let ans = 1;

/**
 * 이동횟수 4번 이상인 경우
 * - move 2,3번 한번씩 한 후 move 1,4번 반복하는게 최대
 * - move 2,3번 한번 할 때 제외 모든 세로 줄마다 한 칸씩 방문 -> 세로길이 - 2
 */
if (N >= 3) {
  //이동횟수 4번 이상
  if (M >= 7) {
    ans = M - 2;
  }
  //이동횟수 4번 미만 or 4번 이상 가능하나 모든 이동 불가
  else {
    ans = Math.min(4, M);
  }
} else if (N === 2) {
  if (M < 9) {
    ans = Math.ceil(M / 2);
  }
  //이동 4번 이상 가능하나 모든 이동 불가
  else {
    ans = 4;
  }
}

//출력
console.log(ans);
