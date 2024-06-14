const vowels = ["a", "e", "i", "o", "u"];

function getNumberOfVowels(str) {
  let numVowel = 0;

  for (let vowel of vowels) {
    if (str.includes(vowel)) {
      numVowel++;
    }
  }

  return numVowel;
}

console.log(getNumberOfVowels("hello"));

//GetNumberOfVowels
  // for a,e,i,o,u
     //if (string contains (vowel))
       // ++

//GetNumberOfVowels
  // for (letter of str)
    // if (isVowel(letter))
      // ++