const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let array = input[1].split(" ").map(Number);
let cnt = 0;
let ans = -1;

/**
 * 삽입 정렬 (Insertion sort)
 * 앞의 원소들과 비교해, 원소들을 뒤로 밀어 알맞은 자리에 넣기
 */

for (let i = 1; i < N; i++) {
  let loc = i - 1;
  let newItem = array[i];

  while (loc >= 0 && array[loc] > newItem) {
    array[loc + 1] = array[loc];
    loc--;
    cnt++;
    if (cnt === K) {
      ans = array[loc + 1];
      break;
    }
  }
  if (loc + 1 != i) {
    array[loc + 1] = newItem;
    cnt++;
    if (cnt === K) {
      ans = newItem;
      break;
    }
  }
}

console.log(ans);
