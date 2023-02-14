


// 1                                   1 
// 1 2                               2 1 
// 1 2 3                           3 2 1
// 1 2 3 4                       4 3 2 1
// 1 2 3 4 5                   5 4 3 2 1
// 1 2 3 4 5 6               6 5 4 3 2 1
// 1 2 3 4 5 6 7           7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8       8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9   9 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1




let n = 10;

for (i = 1; i <= n - 1; i++) {
  console.log(
    leftNumber(i) + spaces(n - i) + spaces(n - (i + 1)) + rightNumber(i)
  );
}
console.log(lastleft(n) + lastright(n));

function leftNumber(n) {
  let number = "";

  for (let i = 1; i <= n; i++) {
    number += i + " ";
  }
  return number;
}

function spaces(n) {
  let spaces = "";
  for (let i = 1; i <= n; i++) {
    spaces += "  ";
  }
  return spaces;
}

function rightNumber(n) {
  let number = "";

  for (let i = n; i >= 1; i--) {
    number += i + " ";
  }
  return number;
}

function lastleft(n) {
  let lastnum = "";
  for (let i = 1; i <= n; i++) {
    lastnum += i + " ";
  }
  return lastnum;
}

function lastright(n) {
  let lastnum = "";
  for (let i = 1; i <= n - 1; i++) {
    lastnum = i + " " + lastnum;
  }
  return lastnum;
}
