/**
 *
 * Goal: Find the largest binary gap for the input number `N`
 * A binary gap is the number of zeros that have a `1` before and after them:
 * - `010001` --> 3
 * - `001010` --> 1
 * - `111111` --> 0
 *
 * steps:
 * - convert number to binary
 * - check binary (loop) until a `1` is found
 * - if a `1` is found, start counting `0`s that follow it
 * - store result (gap) when a `1` is encountered
 *   - only store gap if it exceeds previously stored gap
 * - return `gap`
 *
 *
 * @param N
 * @returns
 */
function solution(N: number): number {
  const binary = N.toString(2);
  // console.log(binary); // sanity check

  let zeros = 0;
  let gap = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      // start counting zeros

      for (let j = i + 1; j < binary.length; j++) {
        if (binary[j] === "0") {
          // count zeros
          zeros++;
        }
        if (binary[j] === "1") {
          if (gap < zeros) {
            // only store the biggest gap
            gap = zeros;
          }
          // reset zeros after storing gap
          zeros = 0;
        }
      }

      // reset zeros when leaving loop
      zeros = 0;
    }
  }

  return gap;
}

const testCases: {
  input: number;
  expected: number;
}[] = [
  { input: 1, expected: 0 },
  { input: 9, expected: 2 },
  { input: 15, expected: 0 },
  { input: 20, expected: 1 },
  { input: 32, expected: 0 },
  { input: 42, expected: 1 },
  { input: 328, expected: 2 },
  { input: 529, expected: 4 },
  { input: 1162, expected: 3 },
];

testCases.map((t) => {
  console.log(
    t.input,
    "/",
    t.expected,
    "/",
    solution(t.input),
    "input / expected / solution"
  );
});
