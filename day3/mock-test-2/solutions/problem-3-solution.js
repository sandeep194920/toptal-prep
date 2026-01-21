/**
 * SOLUTION: Triangle Inequality
 * Pattern: Sorting + Greedy
 * Time: O(n log n), Space: O(1)
 */

function solution(A) {
  if (A.length < 3) return 0;
  
  // Sort array
  A.sort((a, b) => a - b);
  
  // For sorted array, we only need to check if A[i] + A[i+1] > A[i+2]
  // The other two conditions are automatically satisfied:
  // - A[i+1] + A[i+2] > A[i] (since A[i+2] >= A[i])
  // - A[i] + A[i+2] > A[i+1] (since A[i+2] >= A[i+1])
  
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1; // Triangle exists
    }
  }
  
  return 0; // No triangle found
}

// Test
console.log(solution([10, 2, 5, 1, 8, 20])); // 1
console.log(solution([10, 50, 5, 1]));       // 0
console.log(solution([1, 2, 3]));            // 0 (1+2=3, not >)
console.log(solution([3, 4, 5]));            // 1 (3+4>5)
console.log(solution([1, 1]));               // 0 (too few elements)
