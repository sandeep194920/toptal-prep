/**
 * MOCK TEST 2 - PROBLEM 3 (Hard)
 * Time Limit: 40 minutes
 * 
 * Problem: Triangle Inequality
 * 
 * An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if:
 * - 0 ≤ P < Q < R < N
 * - A[P] + A[Q] > A[R]
 * - A[Q] + A[R] > A[P]
 * - A[R] + A[P] > A[Q]
 * 
 * Write a function that returns 1 if there exists a triangular triplet, or 0 otherwise.
 * 
 * Example:
 * A = [10, 2, 5, 1, 8, 20] → 1 (triplet: (10, 5, 8) satisfies triangle inequality)
 * A = [10, 50, 5, 1] → 0 (no valid triplet)
 * 
 * Constraints:
 * - N is an integer within the range [0..100,000]
 * - Each element of array A is an integer within the range [-2,147,483,648..2,147,483,647]
 */

function solution(A) {
  // TODO: Implement your solution here
  // Hint: Sort the array first, then use two-pointer technique
  // For sorted array: if A[i] + A[i+1] > A[i+2], we found a triangle
  // This is because in sorted order, A[i+1] + A[i+2] > A[i] and A[i] + A[i+2] > A[i+1] are automatically satisfied
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 2 - PROBLEM 3");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([10, 2, 5, 1, 8, 20]);
console.log("Test 1:", result1);
console.log("Expected: 1");
console.log(result1 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([10, 50, 5, 1]);
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([1, 2, 3]);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([3, 4, 5]);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution([1, 1]);
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");
