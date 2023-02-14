//  Find the minimum value of array

let a = [10, 20, 100, 1, 2, 300, 1000];

let min = a[0];

for (let i = 0; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  }
}

console.log(min);
