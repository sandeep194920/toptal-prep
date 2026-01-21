/**
 * SOLUTION: MaxCounters
 * Pattern: Lazy Propagation
 * Time: O(N + M), Space: O(N)
 */

function solution(N, A) {
  const counters = new Array(N).fill(0);
  let currentMax = 0;
  let lastUpdate = 0;
  
  for (let operation of A) {
    if (operation >= 1 && operation <= N) {
      // increase(X) operation
      const idx = operation - 1;
      counters[idx] = Math.max(counters[idx], lastUpdate);
      counters[idx]++;
      currentMax = Math.max(currentMax, counters[idx]);
    } else if (operation === N + 1) {
      // max counter operation - lazily update
      lastUpdate = currentMax;
    }
  }
  
  // Final pass: apply lazy updates
  for (let i = 0; i < N; i++) {
    counters[i] = Math.max(counters[i], lastUpdate);
  }
  
  return counters;
}

// Test
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // [3, 2, 2, 4, 2]
console.log(solution(1, [1]));                    // [1]
console.log(solution(3, [2, 1, 1, 4, 3]));        // [2, 2, 2]
console.log(solution(5, [1, 2, 3, 4, 5]));        // [1, 1, 1, 1, 1]
console.log(solution(2, [1, 3, 2, 3, 1]));        // [2, 2]
