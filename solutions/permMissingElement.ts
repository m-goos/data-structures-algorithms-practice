/**
 * An Array of integers is given
 * Once they are all sorted in order, one number is missing
 *
 * Example array
 * ```ts
 * const A = [2,3,1,5];
 * // missing: 4
 * ```
 *
 * Approach:
 * - sort the elements
 * - find the missing number
 * - handle edge cases
 *
 * First 2 possible solutions that come to mind
 * Solution 1
 * - `A[i+1] - A[i]` === 1  -->
 * subtracting the next element from the previous must be 1,
 * otherwise, elements are not consecutive (4-3 === 1; 4-2 !== 1)
 *
 * Solution 2
 * The inverse of solution: addition instead of subtraction
 * - `A[i] + 1 === A[i+1]` --> if this is not true, return the missing number
 *
 * The missing number is A[i] + 1
 *
 * **EDGE CASES**
 * - the `1` is missing             --> [2,3]   (expect a 1)
 * - the last element is missing    --> [1,2,3] (expect a 4)
 *
 * @SEE https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 */
function permMissingElement(A: number[]): number {
  // edge case 2: the last element is missing;
  let missingElement = A[A.length - 1] + 1;

  // sort array
  A.sort((a, b) => a - b);

  // edge case 1: the `1` is missing
  if (A[0] !== 1) return 1;

  // check until the second last element
  // example:
  // [1,2,3,5] --> last check should be if 3 matches 5
  for (let i = 0; i < A.length - 1; i++) {
    // check if current value and next value are consecutive
    if (A[i] !== A[i + 1] - 1) {
      missingElement = A[i] + 1;
    }
  }

  return missingElement;
}

/**
 * Alternative solution: Use Gauss equation
 *
 * ```ts
 * const n = A.length;
 * const expectedSum = (n + 1) * (n + 2) / 2;
 * ```
 * 1. Get expected sum of array for length --> expectedSum
 * 2. Get actual sum of array --> actualSum
 * 3. Missing number: missing = expectedSum - actualSum
 */
