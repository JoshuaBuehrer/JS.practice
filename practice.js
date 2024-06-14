
function isVowel(str){
    return str === "a" || str === "e" || str === "i" || str === "o" || str === "u";
}

function getNumberOfVowels(str) {
  let numVowel = 0;

  for (let char of str) {
    if (isVowel(char)) { 
      numVowel++;
    
  }
}

  return numVowel;
}
console.log(getNumberOfVowels(""));