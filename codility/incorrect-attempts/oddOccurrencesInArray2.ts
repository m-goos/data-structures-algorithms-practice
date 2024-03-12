/**
 * for every element:
 * - check fowards and backwards for match
 * - if there is no match, return the current number
 *
 * "All but one of the values in A occur an even number of times."
 * Q:
 */
function oddOccurrencesInArray2(A: number[]): number {
  const length = A.length; // stop looping based on length

  /**
   * for every number, check forwards and backwards if there is an identical (matching) number
   *
   * A single match is good enough to move to the next number, because:
   * "All but one of the values in A occur an even number of times."
   */
  const oddNumber = A.find((n, i) => {
    // look forwards; start looking at current index + 1
    // only look forwards if it's not the last number (length - 2)
    // if length=6, max i=5, so until i=4 (length - 2) --> < length - 1
    let noMatchForwards = true;
    for (let forwardIndex = i + 1; forwardIndex < length - 1; forwardIndex++) {
      if (n === A[forwardIndex]) {
        console.log("number", n, "at index", i, "has no match forwards");
        noMatchForwards = false;
      }
    }

    /**
     * Look back for a match;
     * - start looking at index - 1
     * - look until the first item of the array, index of 0
     */
    let noMatchBackwards = true;
    for (let backwardIndex = i - 1; backwardIndex > -1; backwardIndex--) {
      if (n === A[backwardIndex]) {
        console.log("number", n, "at index", i, "has no match backwards");
        noMatchBackwards = false;
      }
    }

    /**
     * if the number has no match backwards AND no match forwards:
     * return it, because it is the odd number
     */

    console.log(n, i);
    console.log({ noMatchForwards });
    console.log({ noMatchBackwards });

    return noMatchForwards && noMatchBackwards;
  });

  // assumption: there is always a match!
  return oddNumber!;
}

// [2, 2, 3, 3, 4]
console.log(oddOccurrencesInArray2([2, 2, 3, 3, 4]));
