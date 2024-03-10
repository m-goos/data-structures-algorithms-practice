/**
 * NOTE - More efficient solution:
 *
 * alternative approach, should be much more efficient:
 * - get the sum of the left part
 * - get and store the total sum, once
 * - subtract the left part of the total sum to get the right part
 *
 * the sum of the left part can be updated every time by just one element (sum += Array[i])
 */

/**
 * Problem: Array A represents numbers on a tape.
 * - Any integer P, such that 0 < P < N, splits this tape into two non-empty parts
 * - Return the minimal _absolute_ difference that can be achieved when subtracting the sum of the parts before P and after P
 *
 * Example: `A = [3,1,5,6,7,3,10]`
 *
 * Approach
 * - loop over array
 * - get the sum of the parts: left and right
 * - convert sum to absolute value
 * - store sum
 * - if the sum of the next element is lower than the current sum, update sum
 *
 * Assumptions
 * - N is an integer within the range [2..100,000]; --> the array contains at least 2 items
 * - each element of array A is an integer within the range [-1,000..1,000].
 *
 * **EDGE CASES**
 * - array of 2 elements; make sure to not calculate the sum for 2 elements if there are only 2 elements
 *
 * @returns the minimal difference that can be achieved
 * @SEE https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 */
function tapeEquilibrium(A: number[]): number {
  let minimalDifference;

  function calcLeftSum(P: number): number {
    let sum;

    for (let i = 0; i <= P; i++) {
      sum = sum ? sum + A[i] : A[i];
    }
    return sum;
  }

  function calcRightSum(P: number) {
    let sum;

    // start at P, go until last item
    for (let i = P; i < A.length; i++) {
      sum = sum ? sum + A[i] : A[i];
    }

    return sum;
  }

  let leftSum = A[0];
  let rightSum = A[A.length - 1]; // TODO

  for (let P = 0; P < A.length; P++) {
    // leftSum: go until second last element
    if (P < A.length - 1) {
      leftSum = calcLeftSum(P);
    }

    // rightSum: start after first element (P+1);
    // go until last element (P + 1 < length)
    if (P + 1 < A.length) {
      rightSum = calcRightSum(P + 1);
    }

    const absDifference = Math.abs(leftSum - rightSum);

    if (absDifference < minimalDifference || minimalDifference === undefined) {
      minimalDifference = absDifference;
    }
  }

  return minimalDifference;
}
