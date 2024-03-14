// TODO - simplify solution

import { test } from "../../util/test";

/**
 * goal:
 *
 * @param N number, contains at least one `5`, at least 2 numbers
 * @returns highest possible value after deleting one 5 from the number
 *
 * approach:
 * - for input N, collect all possible numbers where a 5 is removed in an array
 * - sort by value
 * - returns the lowest value
 *
 * How to deal with negative numbers?
 * - take the absolute value; find the lowest value instead
 */
function minWithoutFive(N: number): number {
  // edge case: 5 / - 5:
  if (Math.abs(N) === 5) return 0;

  let possibleNumbers: number[] = [];

  // create array with all possible numbers
  // find indexes for all fives, construct numbers without five

  // array from input
  const input = Array.from(String(Math.abs(N)), Number);
  let fivesIndex = new Array();
  input.map((v, i) => {
    if (v === 5) return fivesIndex.push(i);
  });

  // diagram
  // - 5 9 8 5 9 5
  /**
   * get all options with one 5 out (deleted)
   * - -98595
   * - -59895
   * - -59859
   * possibleNumbers = [98595, 59895, 59859];
   */

  fivesIndex.forEach((five) => {
    possibleNumbers.push(
      parseInt(input.filter((_, idx) => five !== idx).join(""), 10)
    );
  });

  // sort from high to low, return the first (highest) element
  const highest = possibleNumbers.sort((a, b) => {
    // if the number is negative, sort in the opposite direction
    return N < 0 ? a - b : b - a;
  })[0];

  console.log({ highest });

  if (highest === 0) return 0;

  // return negative number in N < 0
  return N < 0 ? highest * -1 : highest;
}

const testminWithoutFive = [
  { input: [-5859], expected: -589 },
  { input: [15958], expected: 1958 },
  { input: [-5000], expected: 0 },
  { input: [-598595], expected: -59859 },
  { input: [5000], expected: 0 },
  { input: [654321], expected: 64321 },
  { input: [15], expected: 1 },
  // { input: [11], expected: 11 }, --> necessary: there is always at least one `5`.
  // { input: [5], expected: 0 }, --> not necessary: there are always 2 numbers.
];

test(testminWithoutFive, minWithoutFive);
