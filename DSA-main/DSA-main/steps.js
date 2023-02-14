// 1
//   2
//     3
//       4

let n = 4;

function left(n) {
  let spaces = "";
  for (let i = 1; i <= n; i++) {
    spaces += "  ";
  }

  return spaces;
}

function right(n) {
  let spaces = "";
  for (let i = n; i < 0; i--) {
    spaces += "   ";
  }
  return spaces;
}

for (let i = 1; i <= n; i++) {
  console.log(left(i - 1) + i) + right(n);
}
