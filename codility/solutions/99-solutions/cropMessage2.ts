import { test } from "../../util/test";

/**
 * A notification message is given with a maximum allowed length for that message.
 *
 * When the message exceeds the maximum allowed length, it should be cropped, according to the following rules:
 * - no spaces at the start or end of the cropped messages
 * - only full words, no truncated words
 * - when cropped, end with ` ...` (space...)
 * - there should always be a space between words and '...'
 *
 * @param message input message - to be cropped following specific rules
 * @param maxLength
 * @returns
 */
function cropMessage2(message: string, maxLength: number): string {
  // if the message fits, return it unchanged
  if (message.length <= maxLength) {
    return message;
  }

  // start constructing the cropped message
  const messageArray = message.split(" ");
  let croppedMessage = "";
  let maxCroppedLength = maxLength - 3; // '...' (...) takes up 3 characters

  /**
   * Add another word if:
   * - `croppedMessage` plus one more word (with space) is shorter than `maxCroppedLength`
   *
   * loop over array with words
   * - for every iteration, add a word until length is reached
   * - when length is reached, break out of loop
   */
  for (let i = 0; i < messageArray.length; i++) {
    let nextWord = messageArray[i];

    // 1 accounts for space after word
    if (croppedMessage.length + nextWord.length + 1 <= maxCroppedLength) {
      croppedMessage += nextWord + " ";
    } else {
      break;
    }
  }

  /**
   * after constructing the cropped message up to the length limit, add '...'
   */
  croppedMessage += "...";

  return croppedMessage;
}

const testCropMessage2 = [
  {
    input: ["and now here is my secret", 15],
    expected: "and now ...",
  },
  {
    input: ["yes hello", 9],
    expected: "yes hello",
  },
  {
    input: ["yes hello its me", 9],
    expected: "yes ...",
  },
  {
    input: ["hello", 9],
    expected: "hello",
  },
  {
    input: ["four", 3],
    expected: "...",
  },
  {
    input: ["hi", 3],
    expected: "hi",
  },
  {
    input: ["hi", 2],
    expected: "hi",
  },
];

test(testCropMessage2, cropMessage2);
