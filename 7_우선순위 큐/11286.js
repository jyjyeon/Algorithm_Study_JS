//입력
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const heap = [];
heap[0] = 0;
let ans = [];

function swap(idx1, idx2) {
  let temp;
  temp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = temp;
}

/*elem1이 elem2보다
1) 절댓값 작으면
2) 절댓값 같지만 값 작으면
true를 반환한다
*/
function cmp(elem1, elem2) {
  if (Math.abs(elem1) != Math.abs(elem2)) {
    return Math.abs(elem1) < Math.abs(elem2);
  }
  return elem1 < elem2;
}

//힙에 요소 추가
function addHeap() {
  let idx = heap.length - 1;
  while (idx > 1 && cmp(heap[idx], heap[Math.floor(idx / 2)])) {
    swap(idx, Math.floor(idx / 2));
    idx = Math.floor(idx / 2);
  }
}

//힙에 요소 제거
function deleteHeap() {
  if (heap.length > 2) {
    heap[1] = heap.pop();
    let size = heap.length;
    let parent = 1;
    let child = 2;

    while (child < size) {
      if (child + 1 < size && cmp(heap[child + 1], heap[child])) {
        child += 1;
      }

      if (cmp(heap[child], heap[parent])) {
        swap(child, parent);
        parent = child;
        child = 2 * parent;
      } else {
        break;
      }
    }
  } else {
    heap.pop();
  }
}

for (let i = 0; i < N; i++) {
  input[i] = Number(input[i].trim());
  switch (input[i]) {
    case 0:
      //빈 배열일 경우
      if (heap.length === 1) {
        ans.push(0);
      } else {
        ans.push(heap[1]);
        deleteHeap();
      }
      break;
    default:
      heap.push(input[i]);
      addHeap();
      break;
  }
}

//출력
console.log(ans.join("\n"));
