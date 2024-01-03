// 입력
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 배열 생성
input.shift();
const coordsMap = input.map(coords =>
        coords.split(' ').map(nums => parseInt(nums))
);

// 정렬
let results = ``;
coordsMap.sort((a, b) => {
    if(a[0] !== b[0]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
}).forEach(coords => {
    results += `${coords[0]} ${coords[1]}\n`;
});

// 출력
console.log(results);
