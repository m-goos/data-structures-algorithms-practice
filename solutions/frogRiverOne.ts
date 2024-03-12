/**
 * A frog start at position `0`
 * @param X opposite river bank, **after** adding 1 (`+1`)
 * @param A array where the index (`K`) matches the second that a leave drops in position `A[i]`
 *
 * If the frog can never jump the river, the function should return `-1`.
 *
 * Approach
 * One way could be to keep a list of positions to cover, for example:
 * - Cross until X, so array needs to cover positions: `requiredLeaves = [1,2 ... X]`
 * - Go over the provided array `A`, for every match, remove the number from the `requiredLeaves` array.
 * - If that happens, return the index of the item at which that happened
 *
 * **EDGE CASES**
 * - A = [1]; X = 1
 * - returned index is `0` (check for undefined, make sure to not trigger this condition for `0`)
 *
 * @SEE https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 */
function frogRiverOne(X: number, A: number[]): number {
  let requiredLeaves: number[] = [];
  let completedIndex;

  // Step 1, fill array with items to cover (start at `1`)
  for (let i = 0; i < X; i++) {
    requiredLeaves.push(i + 1);
  }

  /**
   * Step 2:
   * - for every leave that we find, remove the matching leave
   * - find index for matching item
   * - remove item at index from `requiredLeaves`
   * - if the length of array `requiredLeaves` is 0, return the index
   * - stop looping over array when condition is met
   */
  A.some((v, i) => {
    // find and remove match from requiredLeaves
    const requiredIndex = requiredLeaves.findIndex((r) => r === v);

    // remove item at required index
    if (requiredIndex !== -1) {
      requiredLeaves.splice(requiredIndex, 1);
    }

    if (requiredLeaves.length === 0) {
      completedIndex = i;
    }

    // stop loop when complete
    return requiredLeaves.length === 0;
  });

  // if path is never completed, frog is stuck: -1
  return completedIndex !== undefined ? completedIndex : -1;
}

/**
 * Alternative solution, quicker and simpler:
 * - keep track of the remaining number of leaves to complete the 'bridge of leaves' (`missingLeaves = X`)
 * - when the missing leaves = 0; the leave bridge is complete
 *
 * - keep an array that tracks whether a leave has fallen in a position or not: `coveredPositions`
 * - the `coveredPositions` has a length of `X`: the required length of the leave bridge: `coveredPositions = new Array(X)`
 * - when a leave falls in a position and it has not fallen there yet, do 2 things:
 *   - mark the leave as fallen in the array: use a `1` or a boolean
 *   - subtract `1` from `missingLeaves`
 *
 * Return:
 * - in the loop for checking `coveredPositions`: when `missingLeaves` === 0 --> return the index of `A`
 * - if the leave bridge is never completed, `missingLeaves` never gets to 0. In that case, return `-1`
 */
