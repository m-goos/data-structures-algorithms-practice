/**
 * goal: 
 * - find minimum average
 * - return starting position of slice that has minimum average
 * 
 * 

 * 
 * approach:
 * - loop over array
 * - get current average
 * - keep track of:
 *   - lowest average
 *   - starting position of lowest average
 * 
 * diagram
 * 
 *  * A = [4, 2, 2, 5, 1, 5, 8]
 *         P --->               (outer loop)
 *            Q --->
 *               Q  Q  Q  Q     (inner loop)
 * 
 * every loop, move P by 1; when re-starting, Q is always set to P+1
 * within every loop, try all Q's for a fixed P
 * - store the average in the current Q-loop
 * - store the sum in the current Q-loop
 * - check if the average is the lowest so far: 
 *   --> if average < lowestAverage --> lowestAverage = average (and store position of P --> lowestIndex)
 * 
 * return `lowestIndex`
 * 
 * @SEE https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 * 
 */
function solution(A: number[]): number {
  let currentAverage = Number.MAX_VALUE;
  let lowestAverage = Number.MAX_VALUE;
  let lowestIndex = 0;
  let currentSum = 0;

  /**
   * loop over array
   */
  for (let p = 0; p < A.length - 1; p++) {
    // initialize sum;
    currentSum = A[p];

    // go until the last item in the array
    for (let q = p + 1; q < A.length; q++) {
      // update sum; this is where we start
      currentSum += A[q];

      // (A[P] + A[P + 1] + ... + A[Q]) / (Q - P + 1).
      currentAverage = currentSum / (q - p + 1);

      if (currentAverage < lowestAverage) {
        lowestAverage = currentAverage;
        lowestIndex = p;
      }
    }
  }

  return lowestIndex;
}
