/**
 * Problem
 * - check if an array is a permutation
 * - in other words: is there a number missing in the sequence?
 *
 * Approach
 * - sort the array
 * - check if numbers are in sequence (A[i] - A[i+1] = - 1)
 * - if a number is missing, return `0`
 * - if not, return `1`
 *
 * @returns `0` if the given array is not a permutation; `1` if it is
 *
 * EDGE CASES:
 * - 1 is missing - is this an edge case? As I understand the definition of a permutation:
 * A permutation is a sequence containing each element from 1 to N once, and only once.
 * - array is 1 element (?)
 *
 * Assumptions:
 * - always non-empty array
 * - positive number (1 and above) only
 *
 * @SEE https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 */
function permCheck(A: number[]): number {
  A.sort((a, b) => a - b);

  // after sorting (ascending), by definition of a permutation, the first element should be 1
  if (A[0] !== 1) {
    return 0;
  }

  // loop over array, print each item
  for (let i = 0; i < A.length; i++) {
    // start checking at index of 1
    if (i > 0 && A[i] - A[i - 1] !== 1) {
      // diagram
      // example 1
      // A = [1,2,3]
      // i = 1 --> A[i] - A[i-1] = 2 - 1 = 1
      // sum is equal to 1: permutation.

      // example 2
      // B = [1,2,4]
      // i = 2 --> A[i] - A[i-1] = 4 - 2 = 2
      // sum is not equal to 1: not a permutation

      // not a permutation
      return 0;
    }
  }

  // A is a permutation
  return 1;
}
