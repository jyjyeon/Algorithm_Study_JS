//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let check = Array(50).fill(false);

while (input[idx] != "0") {
  let [tk, ...arr] = input[idx++].split(" ").map(Number);
  let num = Array(6);
  let ans = [];

  function backtracking(cnt, start) {
    //기저 조건
    if (cnt === 6) {
      ans.push(num.join(" "));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (!check[arr[i]]) {
        num[cnt] = arr[i];
        check[arr[i]] = true;
        backtracking(cnt + 1, i + 1);
        check[arr[i]] = false;
      }
    }
  }

  backtracking(0, 0);

  console.log(ans.join("\n"));
  console.log();
}
