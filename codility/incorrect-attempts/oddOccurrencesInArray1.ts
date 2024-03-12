/**
 * NOTE - for this solution, I made the assumption, based on the examples, that integers are ONLY matched on their:
 * - index + 2 (`i+2`) or
 * - index -2
 *
 * This is not the case..
 *
 * */

/**
 * - The array contains an odd number of elements,
 * - each element of the array can be paired with another element that has the same value
 * - except for one element that is left unpaired.
 *
 * **Goal:** return the value of the unpaired element.
 *
 * Data
 * - N is an odd integer within the range [1..1,000,000];
 * - each element of array A is an integer within the range [1..1,000,000,000];
 * - all but one of the values in A occur an even number of times.
 *
 * Extra assumption:
 * - integers are matched in their index + 2 (`i+2`) or index -2. Example:
 * - [1,2,1,2] --> i=0 and i=2 match; i=1 and i=3 match
 *
 * Edge cases - unpaired number at:
 * - index 0
 * - index 1
 * - index A.length-2
 * - index A.length-1
 *  */
function singularOccurrence(A: number[]): number {
  // check test cases
  if (A.length % 2 === 0) {
    console.log(
      "Check your Array, it has an even amount of values instead of odd."
    );
  }

  // all but one of the values in A occur an even number of times.

  let indexForMatch: number;

  // for every index, check if the number matches 2 positions back
  // start at index=2, go until index=A.length-1
  const unpaired = A.find((current, i) => {
    // start at index 2
    // actually start at index 1!
    let noMatchBack = true;
    let noMatchForward = true;

    // check if it matches 2 positions back
    // there is only an `i-2` starting at `i=2`
    if (i > 1) {
      noMatchBack = current !== A[i - 2];
    }

    // Diagram - example array
    // [1,2,1,3,4,3,4,5,6,5]
    // [1,2,1,3,4,3,4,6,5,6] i < array.lengh - 2 - 1
    //  0 1 2 3 4 5 6 7 8 9 <-- indexes
    // check until index 8; array.length for 10 indexes is 10; check until length-2

    /**
     * Example array:
     * - length: 8
     * - indexes: 7 (0...7)
     * - cannot check forward for an index of `6` or above, so skip and return false
     * - check until `i === 5`, so `i < 6`, so: `i < length - 2`
     */
    if (i < A.length - 2) {
      noMatchForward = current !== A[i + 2];
    }
    return noMatchBack && noMatchForward;
  });

  //
  /**
   * hard assumption:
   * `A` is always an array that has one single occurring number
   * Therefore, `unpaired` is always defined
   */
  return unpaired!;
}
