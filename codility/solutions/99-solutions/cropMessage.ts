// TODO - revise / fix
// problem: I'm exiting 1 word too early..!

//
/**
 * Hi! I'll try to write down some thoughts while I go through the problem
 * goal:
 *
 * @param message The input message, to be cropped if it exceeds character limit
 * @param K character limit
 *
 * Crop:
 * - use: ...
 * - only whole words should be cropped
 * - the dots should be separated with a single space from last word
 *
 * approach:
 * - get string length (print)
 * - see maximum length
 * - keep in mind: add `...` or ` ...` (space...)
 *
 * edge cases:
 * - K has a length of 4 or smaller: always return '...'
 * - K is bigger than or equal to length --> change nothing
 */
function cropMessage(message: string, K: number): string {
  const length = message.length;
  const dots = "...";

  // split message at space characters, construct new string based on length
  const splitAtSpace = message.split(" ");
  let cropped = splitAtSpace[0]; // initialize to first word
  let finalMessage = ""; //
  let isComplete = false;

  console.log({ splitAtSpace });
  console.log({ cropped });

  if (K <= 4) return dots;
  if (K >= length) return message;

  // given length and K, find the word that needs to be truncated
  /**
   * - create array from string
   * - reverse order (easily map over the first characters) --> or just start the loop at the end.
   * - loop over 'string' (array)
   *
   * diagram
   * if the last 4 characters are ' aaa' --> ' ...'
   *
   * - basically, start looking at the last characters of the string
   * - assumption: message does not contain spaces at the start/end
   *
   * different cases for last 5 characters:
   *    index
   * -  12345
   * - 'aaa a'
   * - 'aa aa' --> look back further
   * - 'a aaa' --> ' ...' (replace last 3 characters)
   * - ' aaaa'
   * - 'aaaaa'
   */

  splitAtSpace.map((word, i) => {
    if (i > 0) {
      // handle whole word at the end
      // AND no more whole words
      if (
        cropped.length + 1 + word.length === K &&
        cropped[i + 1] === undefined
      ) {
        // set message to return
        cropped += " " + word;
        finalMessage = cropped;
        // for efficiency should break out loop here.
      }

      // length should not exceed K
      // +3 is the '...'
      // 'hello there' --> length 11 --> K=7 --> < K-4 --> K-4=3; <3

      // problem: I'm exiting 1 word too early
      if (cropped.length + 1 + word.length + 3 <= K && !isComplete) {
        // K = 15
        // Got There is ... ... ... ... expected There is an ...
        cropped += " " + word;
        finalMessage = cropped;

        if (cropped.length + 1 + word.length + 4 === K) {
          isComplete = true;
          finalMessage += " " + dots;
        }
      }
    }

    console.log({ cropped });
  });

  console.log({ length, K });
  // first run
  return finalMessage;
}

/**
 * test cases
 * - ('yes hello', 9) --> expect 'yes hello'
 * - ('yes hello its me', 9) --> expect 'yes ...'
 */

//
