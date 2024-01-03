// 입력
const fs = require('fs');
const input = fs.readFileSync('1_정렬/example.txt').toString().trim().split('\n');
input.shift();

// 자릿수의 합 구하기
function calSum(serial) {
    let sum = 0;
    for(let i=0; i<serial.length; i++) {
        if(!isNaN(Number(serial[i]))) {
            sum += Number(serial[i]);
        }
    }
    return sum;
}

// 정렬
let results = ``;
input.sort();
input.sort((a,b) => {
    if(a.trim().length !== b.trim().length) {
        return a.length - b.length;
    }
    if(calSum(a) !== calSum(b)) {
        return calSum(a) - calSum(b);
    }
    return a-b;
});

// 출력
for(let i=0; i<input.length; i++) {
    console.log(input[i]);
}