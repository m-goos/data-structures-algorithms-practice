/**
 * **Goal:** Rotation. Each element is shifted right by `K` steps
 * -->  return the array A rotated K times (mutate array)
 * Given array `A`, rotate (shift right) by `K` steps.
 *
 * Example:
 *
 * ```js
 *  A = [3, 8, 9, 7, 6]
 *  K = 3
 * output = [9, 7, 6, 3, 8]
 * ```
 *
 * **Approach:**
 * - Iteration one: shift right one step (done)
 * - Iteration two: shift right K steps (repeat loop `K` times) (done)
 *
 * @SEE https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */
function cyclicRotation(A: number[], K: number): number[] {
  let valueAtIndex: number = 0;
  let valueToMove: number = 0;

  // repeat loop K times
  for (let j = 0; j < K; j++) {
    // loop over array, for every element, set current element to previous
    // temporary store the next value so it won't be lost
    for (let i = 0; i < A.length; i++) {
      // step one: just set element 0 to the last element
      if (i === 0) {
        // step 1: store A[0] so it can be re-used
        valueToMove = A[0];

        // step 2: set A[0] to the last item in the array
        A[0] = A[A.length - 1];
      } else {
        // step 1: store current value
        // step 2: use previous value to set current value

        // store value at current index
        valueAtIndex = A[i];

        // set value at current index to previous:
        A[i] = valueToMove;

        // update valueToMove for the next loop
        valueToMove = valueAtIndex;
      }
    }
  }

  return A;
}

const testCyclicRotation: {
  input: { A: number[]; K: number };
  expected: number[];
}[] = [
  {
    input: {
      A: [3, 8, 9, 7, 6],
      K: 3,
    },
    expected: [9, 7, 6, 3, 8],
  },
  {
    input: {
      A: [3, 8, 9, 7, 6],
      K: 1,
    },
    expected: [6, 3, 8, 9, 7],
  },
  {
    input: {
      A: [0, 0, 0],
      K: 1,
    },
    expected: [0, 0, 0],
  },
  {
    input: {
      A: [],
      K: 30,
    },
    expected: [],
  },
  {
    input: {
      A: [1, 2, 3, 4],
      K: 4,
    },
    expected: [1, 2, 3, 4],
  },
];

testCyclicRotation.map((t) => {
  console.log(
    cyclicRotation(t.input.A, t.input.K),
    "/",
    t.expected,
    "||",
    t.input,
    "solution / expected || input"
  );
});
