/**
 * LeetCode 217 - Contains Duplicate ⭐
 *
 * Difficulty: Easy
 * Pattern: Set tracking
 * Priority: HIGH - Hash map warm-up
 *
 * Problem:
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  // TODO: Implement duplicate detection
  // Hint: Use Set to track seen numbers

}

// ============ TEST CASES ============

console.log("Running Contains Duplicate tests...\n");

console.log("Test 1:", containsDuplicate([1,2,3,1]), "| Expected: true ✅");
console.log("Test 2:", containsDuplicate([1,2,3,4]), "| Expected: false ✅");
console.log("Test 3:", containsDuplicate([1,1,1,3,3,4,3,2,4,2]), "| Expected: true ✅");
console.log("Test 4:", containsDuplicate([1]), "| Expected: false ✅");
