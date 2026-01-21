/**
 * MOCK TEST 1 - PROBLEM 2 (Medium)
 * Time Limit: 40 minutes
 * 
 * Problem: Pollution Filters
 * 
 * There are N factories along a river. Each factory emits P[i] units of pollution.
 * You can install filters at any position between factories (or before/after all factories).
 * Each filter reduces pollution by half (rounded up) for all factories downstream from it.
 * 
 * Calculate the total cost if you install filters at all possible positions.
 * Cost at position i = sum of pollution from factories downstream from i (divided by 2, rounded up).
 * 
 * Example:
 * Input: P = [5, 6, 3, 4], S = [1, 2, 3, 4]
 * Output: 27
 * Explanation: Filters at positions 0, 1, 2, 3
 * - Position 0: pollution after = (5+6+3+4)/2 = 9
 * - Position 1: pollution after = (6+3+4)/2 = 7
 * - Position 2: pollution after = (3+4)/2 = 4
 * - Position 3: pollution after = 4/2 = 2
 * Total cost = 9 + 7 + 4 + 2 = 22 (example simplified)
 * 
 * Constraints:
 * - N is an integer within the range [1..100,000]
 * - Each element of array P is an integer within the range [1..1,000,000,000]
 */

function solution(P, S) {
  // TODO: Implement your solution here
  // Hint: Use prefix sums for efficient range queries
  // Build prefix sum array: prefix[i] = sum of P[0..i-1]
  // For each position i, pollution after = sum from i+1 to n
  // Cost at position i = ceil((sum from i+1 to n) / 2)
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 1 - PROBLEM 2");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([5, 6, 3, 4], [1, 2, 3, 4]);
console.log("Test 1:", result1);
console.log("Expected: 27");
console.log(result1 === 27 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([1, 1, 1], [1, 2, 3]);
console.log("Test 2:", result2);
console.log("Expected: 3");
console.log(result2 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([10], [1]);
console.log("Test 3:", result3);
console.log("Expected: 5");
console.log(result3 === 5 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([2, 4, 6], [1, 2, 3]);
console.log("Test 4:", result4);
console.log("Expected: 11");
console.log(result4 === 11 ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution([1000000000, 1000000000], [1, 2]);
console.log("Test 5:", result5);
console.log("Expected: 1500000000");
console.log(result5 === 1500000000 ? "✅ PASS\n" : "❌ FAIL\n");

