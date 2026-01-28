/**
 * LeetCode 41 - First Missing Positive 🔥🔥🔥
 *
 * Difficulty: Hard
 * Pattern: MEX (Minimum Excluded Value) / Cyclic Sort
 * Priority: CRITICAL - Identical to Toptal Card Flipping!
 *
 * Problem:
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 *
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 *
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 *
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 *
 * Approach:
 * 1. Place each number in its "correct" position (num at index num-1)
 * 2. Ignore numbers <= 0 or > n (can't be the answer)
 * 3. After placement, first index without correct value is answer
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  // TODO: Implement MEX pattern
  // Hint: Place each number at index num-1 if possible
  // Hint: Then scan for first missing position

}

// ============ TEST CASES ============

console.log("Running First Missing Positive tests...\n");

// Test 1: Example from problem
const result1 = firstMissingPositive([1, 2, 0]);
console.log("Test 1:", result1);
console.log("Expected: 3");
console.log(result1 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Missing in middle
const result2 = firstMissingPositive([3, 4, -1, 1]);
console.log("Test 2:", result2);
console.log("Expected: 2");
console.log(result2 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: All large numbers
const result3 = firstMissingPositive([7, 8, 9, 11, 12]);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Single element
const result4 = firstMissingPositive([1]);
console.log("Test 4:", result4);
console.log("Expected: 2");
console.log(result4 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Consecutive sequence
const result5 = firstMissingPositive([1, 2, 3, 4, 5]);
console.log("Test 5:", result5);
console.log("Expected: 6");
console.log(result5 === 6 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: All negative
const result6 = firstMissingPositive([-1, -2, -3]);
console.log("Test 6:", result6);
console.log("Expected: 1");
console.log(result6 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 7: Duplicates
const result7 = firstMissingPositive([1, 1, 1, 1]);
console.log("Test 7:", result7);
console.log("Expected: 2");
console.log(result7 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: MEX - Place numbers at correct indices!");
console.log("Key: Answer is always between 1 and n+1.");
