/**
 * Problem
 * - find the smallest positive integer that does not occur in A
 *
 * Approach
 * - if there are only negative integers, return `1`
 * - if there are negative and positive integers, the negative integers can be discarded, the positive integers need to be checked
 * - if there are only positive integers, check for missing number
 *
 * basically, we only care about positive integers
 *
 * Edge cases
 * - `0` --> by definition, 0 is an integer; leave 0 out of array
 * - what if the array is, for example, [1,2,3]; return 4?
 *
 * @param A array of N integers;
 * @returns smallest positive integer that does not occur in A
 *
 * @SEE https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 */
function missingInteger(A: number[]): number {
  // step 1: remove negative integers
  // sort array, log it
  A.sort((a, b) => a - b);

  // find index of first positive number (remove `0`)
  const positiveIndex = A.findIndex((v, i) => v > 0);

  if (positiveIndex === -1) {
    return 1;
  }

  // create new array with all positive numbers
  A.splice(0, positiveIndex);

  // edge case: number `1` is missing; note: `0` is already removed
  if (A[0] !== 1) {
    return 1;
  }

  /**
   * find missing number
   * a number is missing if it meets a couple requirements:
   *
   * example, after sorting and filtering out negatives:
   * `A = [1, 1, 2, 3, 4, 6 ]`
   *
   * DIAGRAM
   * for i = 1; A[i] = 1:
   * - A[i] - A[i-1] --> 1 - 1 = 0 --> all good
   *
   * for i = 2; A[i] = 2
   * - A[i] - A[i-1] --> 2 - 1 = 1 --> all good
   *
   * for i = 5; A[i] = 5
   * - A[i] - A[i-1] --> 6 - 4 = 2 --> missing number!
   * - missing number is A[i] - 1 = 6 - 1 = 5
   *
   * approach:
   * - loop over array
   * - check for conditions
   * - return missing number
   */
  for (let i = 0; i < A.length; i++) {
    // step 0: verify conditional logic in for loop.
    // console.log(A[i]);

    // conditions
    const equalNumbers = A[i] - A[i - 1] === 0;
    const consecutiveNumbers = A[i] - A[i - 1] === 1;

    // start at element 1
    if (i > 0 && !equalNumbers && !consecutiveNumbers) {
      // missing number
      return A[i - 1] + 1;
    }
  }

  /**
   * no missing numbers?
   * missing value is at the end: ``
   *  */
  return A[A.length - 1] + 1;
}

const testMissingInteger: {
  input: number[];
  expected: number;
}[] = [
  { input: [1, 2, 3], expected: 4 },
  { input: [9], expected: 1 },
  { input: [1, 10000], expected: 2 },
  { input: [0, 0, 0, 0], expected: 1 },
  { input: [-100000, 0, -999, -4, 6, 2, 2, 2, 2], expected: 1 },
  { input: [2, 2, 2, 3, 4, 4, 5, 6, 7], expected: 1 },
];

testMissingInteger.map((t) => {
  console.log(
    missingInteger(t.input),
    "/",
    t.expected,
    "/",
    t.input, // console.log does not print negative numbers in array and prints numbers sorted --> could be improved, not for now
    "solution / expected / input"
  );
});

/**
 * Alternative solution:
 * - after sorting, logic can be massively simplified:
 * - sort the array
 *   - after sorting, A[0] > 0 --> otherwise, return 1
 *   --> now the logic for removing negative integers can be removed
 *   - next: the array should start with A[0] = 1; otherwise, 1 is the missing number
 *
 *   next:
 *   - while looping over the array, every element should match `i+1`
 *   --> A=[1,2,3]
 *     - i=0; A[0]=1; i+1=1;
 *   --> A=[1,2,3,4,5,6,7]
 *     - i=5; A[5]=6; i+1=6
 */
