// TODO - simplify solution

import { test } from "../util/test";

/**
 * goal:
 *
 * assumptions:
 * - N is at least 2 digits
 *
 * @param N will contain at least one `5`
 * @returns highest possible value after deleting one 5 from the number
 *
 * approach:
 * - start at the left
 * - if the number next to the 5 is higher than the 5, delete the five
 * - move on to next five
 *
 * 'Edge' cases
 * - handle negative numbers
 * - only zeros are left?
 * - N only has one `5`
 * - 5 is at the end
 */
function minWithoutFive(N: number): number {
  /**
   * handle negative numbers
   * -->
   * diagram
   * N = -151 --> -11
   * N = -151 * -1 --> do 'positive' logic --> convert back --> -11
   * N = -5678
   * N = -5656 --> remove last five --> -566 is bigger than -656; reverse logic
   *
   */
  let isNegative = N < 0 ? true : false;

  // looking for the maximum possible value
  // for negative numbers, inverse the comparison logic

  // deal with negative numbers, here and at the return
  if (isNegative) {
    N = N * -1;
  }

  // create array from number
  let numArray = Array.from(N.toString()).map(Number);
  let fiveCount = 0;

  // count how many fives
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] === 5) {
      fiveCount++;
    }
  }

  if (fiveCount === 1) {
    // remove 5
    numArray = numArray.filter((v) => v !== 5);
  }

  for (let i = 0; i < numArray.length; i++) {
    /**
     * conditions:
     * - if the number next to the 5 is higher than the 5, delete the five
     * - if the element is a 5 and it's the last element, delete it
     */
    if (numArray[i] === 5) {
      // positive numbers
      if (
        (!isNegative && numArray[i] < numArray[i + 1]) ||
        i === numArray.length - 1
      ) {
        numArray.splice(i, 1);
        break;
      }

      // negative numbers: reverse logic
      // note: length - 2, because we need to remove the second-to-last element
      if (
        (isNegative && numArray[i] > numArray[i + 1]) ||
        i === numArray.length - 2
      ) {
        numArray.splice(i, 1);
        break;
      }
    }
  }

  // can't parse from 0; in that case set to 0
  const result = parseInt(numArray.join("")) || 0;

  if (result === 0) {
    return 0;
  }

  return isNegative ? result * -1 : result;
}

const testminWithoutFive = [
  { input: [-5859], expected: -589 },
  { input: [15958], expected: 1958 },
  { input: [-5000], expected: 0 },
  { input: [-598595], expected: -59859 },
  { input: [5000], expected: 0 },
  { input: [654321], expected: 64321 },
  { input: [15], expected: 1 },
  { input: [5], expected: 0 },
];

test(testminWithoutFive, minWithoutFive);
