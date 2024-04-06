const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let array = input[1].split(" ").map(Number);
let swapCnt = 0;
let ans = [];

/**
 * 선택 정렬 (Selection sort)
 * 넣을 위치를 먼저 정하고, 알맞은 원소를 찾아 넣는다.
 */

for (let i = N - 1; i > 0; i--) {
  let max = array[i];
  let last = i;
  for (let j = 0; j < i; j++) {
    //최댓값 찾기
    if (array[j] > max) {
      max = array[j];
      last = j;
    }
  }
  if (last !== i) {
    let temp = array[i];
    array[i] = array[last];
    array[last] = temp;
    swapCnt++;
    if (swapCnt === K) {
      ans.push(array[last]);
      ans.push(array[i]);
      break;
    }
  }
}

swapCnt < K ? console.log(-1) : console.log(ans.join(" "));
