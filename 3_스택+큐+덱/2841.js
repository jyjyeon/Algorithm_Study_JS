//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");

let arr = new Array(7); //줄번호 = 배열의 인덱스로 하기 위해 크기 7로 선언
let ans = 0; //정답

//이차원 배열 생성
for (let i = 0; i < 7; i++) {
  arr[i] = new Array();
}

for (let i = 0; i < N; i++) {
  let [note, fret] = input[i].trim().split(" ");
  note = Number(note);
  fret = Number(fret);

  let last = arr[note].at(-1);
  //손가락 떼는 경우
  while (last > fret) {
    arr[note].pop();
    last = arr[note].at(-1);
    ans++;
  }
  //손가락 누르는 경우
  if (last === undefined || last < fret) {
    arr[note].push(fret);
    ans++;
  } else if (last === fret) continue;
}

//출력
console.log(ans);
