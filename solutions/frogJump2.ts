function frogJump2(X: number, Y: number, D: number): number {
  /**
   * Approach
   * distanceToGo = Y - X
   *
   * divide distance by jumping distance, this is the number of jumps
   * if it has a decimal, round up (add 1 jump, because we cannot jump half a distance)
   *
   * Rounding up can be done in multiple ways, e.g.:
   * - using the remainder operator (`%`)
   * - using the built-in Math.ceil
   */

  const distanceToGo = Y - X;

  // edge case: frog is already on the other side of the road
  if (distanceToGo <= 0) {
    return 0;
  }

  const numberOfJumps = Math.ceil(distanceToGo / D);

  return numberOfJumps;
}
