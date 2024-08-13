const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...commands] = input;
let ans = [];
let topPointer = -1;

const stack = [];
for (let i = 0; i < N; i++) {
  const command = commands[i].trim().split(" ")[0];
  switch (command) {
    case "push":
      stack[++topPointer] = commands[i].split(" ")[1];
      break;
    case "pop":
      if (topPointer !== -1) {
        ans.push(stack[topPointer]);
        topPointer--;
      } else {
        ans.push(-1);
      }
      break;
    case "size":
      ans.push(topPointer + 1);
      break;
    case "empty":
      topPointer === -1 ? ans.push(1) : ans.push(0);
      break;
    case "top":
      topPointer === -1 ? ans.push(-1) : ans.push(stack[topPointer]);
      break;
    default:
      break;
  }
}

console.log(ans.join("\n"));
