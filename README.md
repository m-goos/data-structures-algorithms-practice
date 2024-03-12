# code-puzzle-practice

> Simple solutions for leetcode-style puzzles in TypeScript.

This repository shows basic problem solving and algorithms practice using `codility` exercises. There are many platforms that provide similar code problems. Most of them are used as interview platforms as well. Leetcode and hackerrank are popular and neetcode is recommended for structuring Data Structures and Algorithms (DSA) practice through leetcode.

Mostly, the solutions are first iterations. They have not been optimized for execution speed. Usually, at least one better and faster alternative is available. The point with this repository was not to optimize directly, but to get some exposure to solving these kind of problems. It's also kind of fun.

## Improved solutions

After solving most problems, I looked up solutions from other people to see how my solution could be simplified and improved. I took notes at the bottom of each file with possible alternatives and improvements.

## Running the solutions

TypeScript files cannot be directly run with node. To run TypeScript files, install `ts-node`:

```sh
# ts-node runs TypeScript directly
npm i -g ts-node

ts-node codePuzzle.ts
```

When writing code, it is nice to automatically re-run for every change. For _watch_ functionality, use `nodemon` instead of `ts-node`:

```sh
# nodemon watches a file, so it keeps refreshing output in the console
npm i -g nodemon

# execute code
nodemon solutions/myPuzzle.ts
```
