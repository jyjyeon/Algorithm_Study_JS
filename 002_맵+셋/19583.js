const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [start, end, finalEnd] = input.shift().split(" ");
start = Number(start.replace(":", "")); //개강총회 시작 시간
end = Number(end.replace(":", "")); //개강총회 끝 시간
finalEnd = Number(finalEnd.replace(":", "")); //스트리밍 끝 시간

const members = new Set();
let ans = 0; //출석 확인된 회원 수

for (let i = 0; i < input.length; i++) {
  let [timeString, name] = input[i].trim().split(" ");
  let time = Number(timeString.replace(":", "")); //회원이 채팅한 시간
  if (time <= start) {
    //시작전 출석 확인
    members.add(name);
  } else if (end <= time && time <= finalEnd && members.has(name)) {
    //끝난후 출석 확인
    members.delete(name);
    ans++;
  }
}
//출력
console.log(ans);
