//    1
//  1 2
// 1 2 3
//  2 1
//   1

let n = 3;
// Repeat n times
for (let i = 1; i <= n; i++) {
  //spaces + sequence of numbers
  console.log(getSpaces(n - i + 1) + getNumSequence(i));
}

for (let i = 1; i <= n; i++) {
  //spaces + sequence of numbers
  console.log(getSpaces(i + 1) + getReveseNumSequence(n - i));
}

//console.log( getSpaces(3) + getNumSequence(1));

//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getSpaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

function getNumSequence(n) {
  let numseq_str = "";
  for (let i = 1; i <= n; i++) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

function getReveseNumSequence(n) {
  let numseq_str = "";
  for (let i = n; i >= 1; i--) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

//Reverse half diamond
//Repeat 2 times
// spaces + sequence in reverse of numbers
