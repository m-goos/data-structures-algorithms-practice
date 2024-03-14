type TestInput = { input: number; expected: number };

export const test = (testInput: TestInput[], fn: Function) => {
  console.log("-------------------");

  console.log("Testing ", fn.name);
  testInput.map((t) => {
    console.log(""); // empty line
    console.log("output:  ", fn(t.input));
    console.log("expected:", t.expected);
    console.log("input:   ", t.input);
  });

  console.log("-------------------");
};
