/**
 * Pollution Filters (Prefix Sums)
 *
 * Problem: Given pollution array P[], calculate total cost of installing filters.
 * Filter at position i reduces remaining pollution by half.
 *
 * Difficulty: Medium
 * Pattern: Prefix Sums for range queries
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Insight: Precompute cumulative sums. Pollution after filter i = sum from (i+1) to end.
 * Cost = ceil(pollutionAfter / 2)
 *
 * Example:
 * Input: P = [5, 3, 7, 1], S = [1, 2, 3, 4]
 * Output: 10
 * Explanation: Filter 1 costs ceil(11/2)=6, Filter 2 costs ceil(8/2)=4, etc.
 */

function solution(P, S) {
  // TODO: Implement using prefix sums
  // Hint: Build prefix sum array first
  // prefix[i+1] = prefix[i] + P[i]

}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running Pollution Filters tests...\n");

// Test 1: Basic case
const result1 = solution([5, 3, 7, 1], [1, 2, 3, 4]);
console.log("Test 1:", result1);
console.log("Expected: 10");
console.log(result1 === 10 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Single element
const result2 = solution([5], [1]);
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: All zeros
const result3 = solution([0, 0, 0], [1, 2, 3]);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Two elements
const result4 = solution([10, 10], [1, 2]);
console.log("Test 4:", result4);
console.log("Expected: 5");
console.log(result4 === 5 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Use ceil() for half calculation!");
