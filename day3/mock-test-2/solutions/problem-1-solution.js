/**
 * SOLUTION: Binary Gap
 * Pattern: Bit Manipulation
 * Time: O(log N), Space: O(log N) for binary string
 */

function solution(N) {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;
  let inGap = false;
  
  for (let char of binary) {
    if (char === '1') {
      if (inGap) {
        // End of gap - update max
        maxGap = Math.max(maxGap, currentGap);
      }
      // Start tracking new gap
      inGap = true;
      currentGap = 0;
    } else if (inGap) {
      // Inside a gap (we've seen a 1 before)
      currentGap++;
    }
  }
  
  return maxGap;
}

// Test
console.log(solution(9));    // 2 (binary: 1001)
console.log(solution(529));  // 4 (binary: 1000010001)
console.log(solution(20));   // 1 (binary: 10100)
console.log(solution(15));   // 0 (binary: 1111)
console.log(solution(32));   // 0 (binary: 100000)
