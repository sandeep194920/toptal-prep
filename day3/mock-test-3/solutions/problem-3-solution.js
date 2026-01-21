/**
 * SOLUTION: John's Journey - Combinatorics
 * Pattern: Multiplication Principle + Set
 * Time: O(n), Space: O(n)
 */

function solution(A, B, C) {
  // Count unique cities in each country using Set
  const countA = new Set(A).size;
  const countB = new Set(B).size;
  const countC = new Set(C).size;
  
  // Multiplication principle: choices multiply
  const result = countA * countB * countC;
  
  // Check for overflow
  const MAX = 1000000000;
  if (result > MAX) {
    return -1;
  }
  
  return result;
}

// Test
console.log(solution([2, 1, 1], [4, 4], [5, 6]));    // 4 (2*1*2)
console.log(solution([1], [2], [3]));                // 1 (1*1*1)
console.log(solution([1, 1, 1], [2, 2, 2], [3, 3, 3])); // 1 (1*1*1)
console.log(solution([], [1], [2]));                 // 0 (0*1*1)

// Large test - overflow
const largeA = new Array(1000).fill(0).map((_, i) => i);
const largeB = new Array(1000).fill(0).map((_, i) => i);
const largeC = new Array(1000).fill(0).map((_, i) => i);
console.log(solution(largeA, largeB, largeC));       // -1 (1000*1000*1000 > 1B)
