
function sumOfMultiple(limit) {

if (limit < 0){
  return 0;
}

  let total = 0;

  for (let i = 0; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
    
  }
  return total
}

console.log(sumOfMultiple(10))


module.exports = sumOfMultiple;


/*
find numbers bellow limit that are multiples of 3 / 5

if they are multiples of 3 / 5, add them together
*/