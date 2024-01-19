//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const heap = [];
heap[0] = 0;
const ans = [];

function swap(idx1, idx2) {
  let temp;
  temp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = temp;
}

function deleteMax() {
  if (heap.length > 2) {
    heap[1] = heap.pop();
    let parent = 1;
    let child = 2;
    let size = heap.length;
    while (child < size) {
      //오른쪽 노드 존재할 때, 두 노드 중 큰 것 선택
      if (child + 1 < size && heap[child + 1] > heap[child]) {
        child += 1;
      }

      if (heap[parent] < heap[child]) {
        swap(parent, child);
        parent = child;
        child = parent * 2;
      } else {
        break;
      }
    }
  } else {
    heap.pop();
  }
}

function addNumber() {
  let index = heap.length - 1;
  while (index > 1 && heap[index] > heap[Math.floor(index / 2)]) {
    swap(index, Math.floor(index / 2));
    index = Math.floor(index / 2);
  }
}

for (let i = 0; i < N; i++) {
  input[i] = Number(input[i].trim());
  switch (input[i]) {
    case 0:
      //빈 배열인 경우
      if (heap.length === 1) {
        ans.push(0);
      }
      //가장 큰 값 출력 및 삭제
      else {
        ans.push(heap[1]);
        deleteMax();
      }
      break;
    default:
      heap.push(input[i]);
      addNumber();
      break;
  }
}

console.log(ans.join("\n"));
