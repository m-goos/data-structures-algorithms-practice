// note: first iteration, not optimized for performance

/**
 * - pass in a length and value
 * - set the value for every element of the array
 *
 * @param length length of array
 * @param value populates every element in the array with this value
 * @returns e.g. `array = [2, 2, 2];`
 */
function createArrayWithValue(length: number, value: number): number[] {
  let array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(value);
  }

  return array;
}

/**
 * Problem:
 * -
 *
 * @param N number of counters - 2 operations:
 * - increase(X) - counter is increased by 1
 * - max counter - all counters are set to the maximum value of any counter
 * @param A array of M integers, representing consecutive operations;
 * @returns
 *
 * Approach
 * - instantiate array with counters
 * - execute operations, one by one
 *
 * Assumptions
 * - array always has values
 */
function maxCounters(N: number, A: number[]): number[] {
  // create initial counters
  let counters = createArrayWithValue(N, 0);

  // execute operations - loop over array with operations
  // note, could also use A.map
  for (let i = 0; i < A.length; i++) {
    // increase
    if (A[i] >= 1 && A[i] <= N) {
      /**
       * if A[K] = X, such that 1 ≤ X ≤ N
       * diagram - example (N,A) = (5, [3, 4, 4, 6, 1, 4, 4])
       * - N = 5; 5 counters
       * - A = [3, 4, 4, 6, 1, 4, 4]; 7 operations
       *
       * when i = 0;
       * A[i] = 3 --> X = 3; N = 5;
       * 1 =< X =< N ?
       * 1 =< 3 =< 5 --> true
       * operation: increase A[X-1] by 1;
       */

      // step 2: increase A[X-1] by 1
      counters[A[i] - 1] = counters[A[i] - 1] + 1;
    }

    // max counter
    if (A[i] === N + 1) {
      /**
       * diagram - example (N,A) = (5, [3, 4, 4, 6, 1, 4, 4])
       * condition: A[K] = N + 1
       *
       * when i = 0
       * A[i] = 3; N = 5; N + 1 = 6
       * 3 = 6 --> no; skip.
       *
       * when i = 3;
       * A[i] = 6; N = 5; N + 1 = 6;
       * 6 = 6 --> yes; do operation
       *
       * operation: set all elements to the highest value in the array
       * - find highest value in array
       * - set all counters to that value
       * - continue
       *
       * approach:
       * 1. test logic X
       * 2. update counter values: sort array, get last value (highest), X
       * 3. set all values to match the highest value
       */

      // sort, the last element is the highest
      counters.sort((a, b) => a - b);
      const highestValue = counters[counters.length - 1];

      // create array of length N where every value equals `highestValue`
      counters = createArrayWithValue(N, highestValue);
    }
  }

  return counters;
}
