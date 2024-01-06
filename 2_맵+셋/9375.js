// 입력
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let N = input.shift();
let ans = [];

while (N--) {
  let clothNum = input.shift();
  const map = new Map();
  // map에 옷 종류와 개수 저장
  for (let i = 0; i < clothNum; i++) {
    let [cloth, type] = input[i].split(" ");
    type = type.trim();
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
    } else {
      map.set(type, 1);
    }
  }
  input.splice(0, clothNum);

  let result = 1;
  for (const value of map.values()) {
    result *= value + 1; // 옷 개수 + 1 (안 입는 경우)
  }
  ans.push(result - 1); // 알몸인 경우(-1)
}

// 출력
console.log(ans.join("\n"));
