/**
 * goal: return the number of integers within the range [A..B] that are divisible by K,
 *
 * approach:
 * - generate array with range
 * - for every item, check dividing by K
 *
 * diagram
 * A = 6
 * B = 11
 * K = 2
 *
 * Range: range = [6,7,8,9,10,11]
 * isDivisibleByK --> A[i] % K === 0
 *  [6, 11, 2]
 */
function countDiv(A: number, B: number, K: number): number {
  let range = new Array(); // numbers to check
  let divisible = new Array(); // store divisble numbers

  let divisibleCount = 0;

  for (let i = A; i <= B; i++) {
    if (i % K === 0) divisibleCount++;
  }

  return divisibleCount;
}

/**
 * tests
 * Find edge cases;
 * - A and B are integers within the range [0..2,000,000,000];
 * --> A=0,B=0,K=1
 *
 * [0,0,1] --> expect 0 % 1 = 0 --> expect a 0 in divisible
 * [1,1,1] --> 1 % 1 = 0 --> expect a 1 in divisible
 * [0,1,1] --> expect a 0,1 in divisible
 */

/**
 * improvements at first glance:
 * - if K > v, skip
 * - this can be done based on index, because the starting integer of the array is known and so is the length
 */

const testCountDiv: number[][] = [[6, 11, 2, 3]]; // [A,B,K,expected]

testCountDiv.map((test) => {
  console.log(
    "got:",
    countDiv(test[0], test[1], test[2]),
    "expected:",
    test[3]
  );
});
