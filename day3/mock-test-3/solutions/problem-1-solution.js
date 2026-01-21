/**
 * SOLUTION: Perm Missing Element
 * Pattern: Mathematical Formula
 * Time: O(n), Space: O(1)
 */

function solution(A) {
  const n = A.length;
  
  // Expected sum of 1 to (n+1): (n+1) * (n+2) / 2
  const expectedSum = (n + 1) * (n + 2) / 2;
  
  // Actual sum of array elements
  const actualSum = A.reduce((sum, val) => sum + val, 0);
  
  // Missing element = expected - actual
  return expectedSum - actualSum;
}

// Test
console.log(solution([2, 3, 1, 5])); // 4
console.log(solution([1, 2, 3]));    // 4
console.log(solution([]));           // 1
console.log(solution([2]));          // 1
console.log(solution([1]));          // 2
