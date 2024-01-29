//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ");
const home = input.map(Number).sort((a, b) => a - b);
let ans = 0;

//가장 인접한 두 공유기 사이 거리가 dist일때 설치된 공유기 개수
function cntRouter(dist) {
  //첫번째 집에 무조건 공유기 설치
  let cnt = 1;
  let cur = home[0];

  for (let i = 1; i < home.length; i++) {
    if (home[i] - cur >= dist) {
      //가장 가까운 집과 거리가 dist 이상
      cnt++; //공유기 설치
      cur = home[i];
    }
  }
  return cnt; //설치된 공유기 수
}

function upperSearch(left, right, target) {
  //left: 최단거리(1), right: 최장거리
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let installed = cntRouter(mid);

    if (installed >= target) {
      left = mid + 1; //너무 많이 설치하면 dist 증가
    } else {
      right = mid - 1; //너무 적게 설치하면 dist 감소
    }
  }
  return left - 1; //upperbound - 1
}

ans = upperSearch(1, home[N - 1] - home[0], C);

//출력
console.log(ans);
