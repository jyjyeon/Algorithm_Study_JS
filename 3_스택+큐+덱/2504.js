// 입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

let stack = [];
const brackets = new Map();
brackets.set(")", "(");
brackets.set("]", "[");
const num = new Map();
num.set("(", 2);
num.set("[", 3);
let tmp = 1;
let ans = 0;

//정답 계산
function calSum() {
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "(":
      case "[":
        stack.push(input[i]);
        tmp *= num.get(input[i]);
        break;
      case ")":
      case "]":
        //스택이 비어있거나 괄호 쌍이 옳지 않은 경우 (올바르지 않은 입력)
        if (stack.length == 0 || stack.at(-1) != brackets.get(input[i])) {
          return 0;
        }
        // '()' 또는 '[]'
        if (input[i - 1] == brackets.get(input[i])) {
          ans += tmp;
        }
        tmp /= num.get(brackets.get(input[i]));
        stack.pop();
        break;
    }
  }
  if (stack.length === 0) {
    return ans;
  }
  return 0;
}

//출력
console.log(calSum());
