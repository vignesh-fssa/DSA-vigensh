// 2 1
// 1

function getReveseNumSequence(n) {
  let numseq_str = "";
  for (let i = n; i >= 1; i--) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

console.log(getReveseNumSequence(2));
console.log(getReveseNumSequence(1));
