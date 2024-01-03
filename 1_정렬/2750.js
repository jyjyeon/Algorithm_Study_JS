const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift(); // 첫번째 숫자 제외
input.sort((a,b) => a-b); // 숫자 오름차순 정렬

// 출력
for(let i=0; i < input.length; i++) {
    console.log(input[i]);
}