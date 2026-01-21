/**
 * Triangle Inequality (Sorting + Greedy)
 *
 * Problem: Check if array contains a triangular triplet (3 sides that form a valid triangle).
 * Triangle inequality: A[i] + A[i+1] > A[i+2] for sorted array.
 *
 * Difficulty: Easy
 * Pattern: Sort + Single Pass
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 *
 * Key Insight: Sort first. For sorted array, if A[i] + A[i+1] > A[i+2], triangle exists.
 *
 * Example:
 * Input: [10, 2, 5, 1, 8, 20]
 * Output: 1
 * Explanation: After sorting [1, 2, 5, 8, 10, 20], 5+8>10 forms triangle
 */

function triangle(A) {
  // TODO: Implement
  // Hint: Sort array first with A.sort((a, b) => a - b)
  // Check consecutive triplets

}

// ============ TEST CASES ============

console.log("Running Triangle Inequality tests...\n");

// Test 1: Triangle exists
const result1 = triangle([10, 2, 5, 1, 8, 20]);
console.log("Test 1:", result1);
console.log("Expected: 1");
console.log(result1 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: No triangle
const result2 = triangle([10, 50, 5, 1]);
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Equal sides (not valid: needs >)
const result3 = triangle([1, 2, 3]);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Valid triangle
const result4 = triangle([3, 4, 5]);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Less than 3 elements
const result5 = triangle([1, 2]);
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Exactly 3 elements, no triangle
const result6 = triangle([1, 1, 3]);
console.log("Test 6:", result6);
console.log("Expected: 0");
console.log(result6 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Sort first! Check A[i] + A[i+1] > A[i+2] (strict >)");
