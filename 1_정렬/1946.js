// 입력
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const testNum = input.shift(); // 테스트케이스 수
const result = [];
/* 
서류 성적 1등은 무조건 합격
이후엔 면접 성적이 높아야지만 합격 
*/
for (let t = 0; t < testNum; t++) {
  const caseNum = +input.shift();
  // 서류 성적 순으로 정렬해 scores 배열에 저장
  const employeeMap = input
    .splice(0, caseNum)
    .map((employee) => employee.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  let ans = 1; // 합격자 수
  let interviewScore = employeeMap[0][1];

  // 면접 성적 비교
  for (let i = 1; i < employeeMap.length; i++) {
    if (interviewScore > employeeMap[i][1]) {
      interviewScore = employeeMap[i][1];
      ans++;
    }
  }
  result.push(ans);
}

// 출력
console.log(result.join("\n"));
