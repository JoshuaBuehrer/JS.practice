function stringSplit(str) {
  arr = [];

  for (let i = 0; i < str.length; i += 2) {
    let pair = str.substring(i, i + 2);
    if (pair === 1) {
      pair += "_";
    }
    arr.push(pair);
  }
  return arr;
}

console.log(stringSplit("abcde"));

