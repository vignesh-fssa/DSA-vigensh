// Find a prime number

let n = 27;
let match = false;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    match = true;
    break;
  } else {
    match = false;
  }
}

if (match == true) {
  console.log("N is not a prime number");
} else {
  console.log("N is a prime number");
}
