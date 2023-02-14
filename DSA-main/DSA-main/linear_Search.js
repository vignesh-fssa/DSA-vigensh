//  Find X count in A

let a = [13, 11, 13, 4, 10, 9, 1];
let x = [11, 13, 4, 17];

for (let i = 0; i < x.length; i++) {
  let count = 0;

  for (let j = 0; j < a.length; j++) {
    if (x[i] == a[j]) {
      count++;
      //   console.log(a[j]);
    }
  }

  if (count == 0) {
    console.log(x[i] + " is Not found in the array");
  } else if (count == 1) {
    console.log(x[i] + "  1 time found in the array");
  } else {
    console.log(x[i] + " " + count + "  times in the array");
  }
}
