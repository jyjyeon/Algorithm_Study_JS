// 입력
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = input.shift().split(" ");
const wordCnt = new Map();
const words = [];

const arr = input
  .filter((item) => {
    if (item.trim().length >= n[1]) {
      return item.trim();
    }
  })
  .sort()
  .sort((a, b) => b.length - a.length);

for (let word of arr) {
  if (wordCnt.has(word)) {
    wordCnt.set(word, wordCnt.get(word) + 1);
  } else {
    wordCnt.set(word, 1);
    words.push(word);
  }
}

words.sort((a, b) => {
  if (wordCnt.get(a) !== wordCnt.get(b)) {
    return wordCnt.get(b) - wordCnt.get(a);
  }
});

console.log(words.join("\n"));
