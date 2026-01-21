/**
 * MEX - Minimum Excluded Value (Card Flipping Game)
 *
 * Problem: Array A[] contains numbers on cards. Find MEX (smallest missing positive).
 * Flip card at position MEX-1 to value MEX. Count operations until all 1..N present.
 *
 * Difficulty: Hard
 * Pattern: MEX calculation using Set
 * Time Complexity: O(n²) worst case
 * Space Complexity: O(n)
 *
 * Key Insight: MEX = smallest positive integer not in array (starts at 1, not 0!)
 * Use Set for O(1) lookups. Loop until MEX > N.
 *
 * Example:
 * Input: [2, 1, 4]
 * Output: 1
 * Explanation: MEX=3, flip index 2 (value 4) to 3. Now [2,1,3], MEX=4>3, done.
 */

function findMEX(arr) {
  // TODO: Implement MEX finder
  // Hint: const set = new Set(arr);
  // let mex = 1; // Start from 1!
  // while (set.has(mex)) mex++;

}

function solution(A) {
  // TODO: Implement card flipping
  // Use findMEX() helper
  // Flip at index (mex-1) to value mex
  // Count operations

}

// ============ TEST CASES ============

console.log("Running MEX (Card Flipping) tests...\n");

// Test 1: One flip needed
const result1 = solution([2, 1, 4]);
console.log("Test 1:", result1);
console.log("Expected: 1");
console.log(result1 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Already sorted
const result2 = solution([3, 2, 1]);
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Reverse order
const result3 = solution([5, 4, 3, 2, 1]);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Multiple flips
const result4 = solution([1, 100, 1000]);
console.log("Test 4:", result4);
console.log("Expected: 2");
console.log(result4 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Single element
const result5 = solution([1]);
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: MEX starts at 1 (not 0)! Use Set for O(1) lookups.");
console.log("Related: First Missing Positive (LC 41)");
