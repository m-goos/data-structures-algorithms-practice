/**
 * @param A cars on a road;
 * - 0: car travels east      CAR --->
 * - 1: car travels west <--- CAR
 *
 * Goal: count passing cars.
 * - basically, count the number of cars (different number to self) to the right
 * - note that the array can start with a `1` or `0`
 *
 * Edge cases
 * - The function should return -1 if the number of pairs of passing cars exceeds 1,000,000,000.
 * @SEE https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 */
function solution(A: number[]): number {
  /**
   * steps:
   * - find with which number array starts
   * - loop over array
   * - if the car at index+1 is not equal to the starting direction (1||0)
   *

   */
  const startingDirection = A[0]; // start counting from this direction
  let passingCars = 0; // initialize counter

  /**
   * diagram
   * i=0
   * startingDirection = 1
   * A=[0,1,0,1,1]
   * A[0] = 0
   *
   */

  for (let i = 0; i < A.length; i++) {
    // if a car travels in a different direction
    // don't count double

    // start counting passing cars when traveling in correct direction
    if (A[i] === startingDirection) {
      // go over array starting after current position
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] !== startingDirection) {
          passingCars++;

          // edge case
          if (passingCars > 1000000) {
            return -1;
          }
        }
      }
    }
  }

  return passingCars;
}

/**
 * test cases
 * - [1,0,0,0,0,0] --> expect 5
 * - [0,1,1,1,1,1] --> expect 5
 * - [1,1,0,0]     --> expect 4
 * - [0,0,0,1,1,1,0] --> expect 9
 */

/**
 * improvements:
 * note to self: is there any smart math for this?
 * - probably in a second iteration: keep a counter of 'different cars to the right of my position' and handle that instead of nested for-loop
 */
