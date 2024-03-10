/**
 *
 * **Problem statement**
 * A frog wants to get to the other side of the road.
 * - The frog is currently located at position X and wants to get to a position greater than or equal to Y.
 * - The small frog always jumps a fixed distance, D.
 * - Count the minimal number of jumps that the small frog must perform to reach its target.
 *
 * **Variables**
 * - `X`: starting position
 * - `Y`: minimal distance to get to (other side of the road)
 * - `D`: jump distance
 *
 * @returns jumps the frog needs to take
 */
function frogJump(X: number, Y: number, D: number): number {
  let jumps = 0;

  // starting distance is Y-X; update after every jump
  let distanceToGo = Y - X;

  // Step 1: edge - frog starts at Y (X===Y)
  if (distanceToGo <= 0) {
    return jumps;
  }

  /**
   * Jumping
   *
   * 1. Check distance: Y - X
   *
   * example input
   * (10,85,30)
   * 1. 85 - 10 = 75 --> distanceToGo
   *
   * 2. if the distance to go is greater than 0, jump
   * 3. record the jump: jumps
   *
   * check again. repeat
   *
   */
  while (distanceToGo > 0) {
    // jump,
    jumps++;

    // update distance by detracting jump size
    distanceToGo = distanceToGo - D;
  }

  return jumps;
}

/**
 * Note: Faster solution
 *
 * A more optimal solution would be to divide the `distanceToGo` by the amount of jumps
 * The answer has to be rounded up (10.5 jumps should be 11)
 */
