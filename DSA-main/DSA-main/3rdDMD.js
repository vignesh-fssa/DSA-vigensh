let n = 3;
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(number(n) + first(n) + number(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(spaces(n) + first(n));
}
function first(n) {
  for (let i = 1; i < n; i++) {
    let run = i + " ";
    return run;
  }
}
function number(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "3 ";
  }
  return str;
}
function spaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "  ";
  }
  return str;
}
