/**
 * PermMissingElem (Math Formula)
 *
 * Problem: Array contains N distinct integers from 1..(N+1). Find the missing one.
 *
 * Difficulty: Easy
 * Pattern: Math (Gauss Sum Formula)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Key Insight: Expected sum of 1..N+1 = (N+1)(N+2)/2
 * Missing = expectedSum - actualSum
 *
 * Example:
 * Input: [2, 3, 1, 5]
 * Output: 4
 * Explanation: Array has 4 elements, range is 1..5, missing is 4
 */

function permMissingElem(A) {
  // TODO: Implement
  // Hint: const n = A.length;
  // expectedSum = (n + 1) * (n + 2) / 2
  // actualSum = A.reduce((sum, val) => sum + val, 0)

}

// ============ TEST CASES ============

console.log("Running PermMissingElem tests...\n");

// Test 1: Missing in middle
const result1 = permMissingElem([2, 3, 1, 5]);
console.log("Test 1:", result1);
console.log("Expected: 4");
console.log(result1 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Missing first element
const result2 = permMissingElem([2, 3, 4]);
console.log("Test 2:", result2);
console.log("Expected: 1");
console.log(result2 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Missing last element
const result3 = permMissingElem([1, 2, 3]);
console.log("Test 3:", result3);
console.log("Expected: 4");
console.log(result3 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Single element array (missing 1 or 2)
const result4 = permMissingElem([2]);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Empty array (missing 1)
const result5 = permMissingElem([]);
console.log("Test 5:", result5);
console.log("Expected: 1");
console.log(result5 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Gauss formula for sum 1..N is N(N+1)/2");
