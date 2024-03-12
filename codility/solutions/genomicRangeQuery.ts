/**
 * goal: find minimal impact factor of sequence
 *
 * @param S CAGCCTA --> string w/ nucleotides
 * @param P start of sequence (inclusive)
 * @param Q end of sequence (inclusive)
 *
 * diagram
 * S = C A G C C T A
 *     0 1 2 3 4 5 6
 *
 * approach:
 * - sequence ('slices' van string): start by creating arrays of sequences X
 * - use a string method, e.g. substring or something similar that can get the right sequence based on index
 *
 * Next:
 * - translate sequences to array of impact factor
 * -
 */
function genomicRangeQuery(S: string, P: number[], Q: number[]): number[] {
  const impactMap: {
    [key: string]: number;
  } = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };

  const impactFactors = new Array();
  const sequences = new Array();

  // assumption: P.length === Q.length
  for (let i = 0; i < P.length; i++) {
    // positions P through Q (inclusive) of S
    sequences.push(S.slice(P[i], Q[i] + 1));
  }

  // translate sequence to impact
  sequences.map((seq: string) => {
    const currentImpactFactors = new Array(); // aggregate impact factors

    /**
     * - go over every character for the `seq`
     * - look up the character in the `impactMap`
     * - store the translation (impact) in an array
     * - get the lowest number from that array
     */
    for (let i = 0; i < seq.length; i++) {
      console.log(seq[i]);
      currentImpactFactors.push(impactMap[seq[i]]);
    }

    // we now have the impact factors per sequence
    // get the lowest number

    const lowestImpactFactor = Math.min(...currentImpactFactors);

    return impactFactors.push(lowestImpactFactor);
  });

  //  finally, return the impactFactors array
  return impactFactors;
}

/**
 * tests
 * Example test:
 * - 'CAGCCTA', [2, 5, 0], [4, 5, 6] --> expected [2, 4, 1]
 *
 * Find EDGE CASES
 * - N=1 --> string S consisting of N characters
 * - M=1 --> P and Q
 *
 * Test
 * - ('G', [1,1], [1,1]) --> expect 3
 */

console.log(genomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6]));
