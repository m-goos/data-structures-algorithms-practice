# Data Structures and Algorithms practice (DSA)

> Simple solutions for leetcode-style puzzles in TypeScript.

This repository shows basic problem solving and algorithms practice using `codility` exercises. There are many platforms that provide similar code problems. Most of them are used as interview platforms as well. Leetcode and hackerrank are popular and neetcode is recommended for structuring Data Structures and Algorithms (DSA) practice through leetcode.

Mostly, my solutions in this repository are first iterations. They have not been optimized for execution speed. Usually, at least one better and faster alternative is available, based on a specific algorithm, data structure or a combination of the two. The point of the solutions you'll find in this repository was not to optimize them right away. The goal is to get some exposure to solving these kind of problems and _then_ studying concepts. By looking at solutions from others, I learn about ways of improving my approach, in a way that sticks. It's also kind of fun to do these exercises.

## Improved solutions

After most problems I solved, I looked up solutions online to see how mine could be simplified and improved. I took notes at the bottom of each file with possible alternatives and improvements.

Another way to improve specifically the `codility` solutions is to go over the reading material provided with every lesson. It tends to be quite well-structured and provides great context for improving on exercises: https://app.codility.com/programmers/lessons

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
