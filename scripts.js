function arr(str) {
  return str.split("").reverse().join("");
}
console.log(arr("hello"));
// n2
function str(a) {
  return a.length;
}
console.log(str("hello"));
// n3
function connvertToUppercase(str) {
  let newStr = "";
  newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      newStr = newStr + " " + str[i + 1].toUpperCase();
      i++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
//
function maxMin(tab) {
  if (tab.length === 1) {
    return tab[0];
  }
  let min = tab[0];
  let max = tab[1];
  for (let elt of tab) {
    if (elt > max) {
      max = elt;
    }
    if (elt < min) {
      min = elt;
    }
  }
  return { max, min };
}
//
function filterArr(tab) {
  let newArr = [];
  for (let elt of tab) {
    if (elt % 2 === 0) {
      newArr.push(elt);
    }
  }
  return newArr;
}
console.log(filterArr[(44, 15, 1, 8, 7)]);
//
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(0));
//
function isPrime(n) {
  if (n === 1) return true;
  for (i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) break;
    return true;
  }
  return false;
}
console.log(isPrime(17));
//
function Fibonacci(n) {
  if (n === 0) return [0];
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[n - 1] + result[n - 2]);
  }

  return result;
}
