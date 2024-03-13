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

/**
 * Alternative solution 1: different condition in `if` statement.
 *
 * Instead of comparing elements in the array, compare the element against `i` of the for-loop
 * ```ts
 * for(let i = 0; i < A.length; i++) {
 *   // at i=0, we expect a `1`.
 *   // at i=1, we expect the number 2
 *   if(A[i] !== i+1) {
 *     return 0;
 *   }
 * }
 * ```
 *
 * Alternative solution 2: to avoid using sort, create a hash of the required values.
 *
 * - Create a hash map of required values
 * - fill has with { 1: 1, ... A.length: 1 }
 * --> for A=[1,2,4], hash should be `hash= {1: 1, 2: 1, 3: 1}`
 *
 * Now loop over array `A`:
 * - if the current item in the array does not exist in the hash, the array is not a permutation (return 0)
 * - if the current item exists in the hash, delete it from the hash map
 *
 * By the end, the hash should be empty. If it's not empty, the array is not a permutation
 * - `return Object.keys(hash).length === 0 ? 1 : 0` // return `1` for permutation, return `0` otherwise.
 *
 */
