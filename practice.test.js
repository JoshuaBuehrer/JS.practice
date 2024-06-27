const sumOfMultiple = require("./practice.js");
const assert = require("assert");

test('sum of multiples of 3 or 5 below 10', () => {
  expect(sumOfMultiple(10).toBe(23))
});