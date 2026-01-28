/**
 * LeetCode 283 - Move Zeroes ⭐
 *
 * Difficulty: Easy
 * Pattern: Two pointers
 * Priority: HIGH - In-place array manipulation
 *
 * Problem:
 * Given an integer array nums, move all 0's to the end while maintaining
 * the relative order of the non-zero elements.
 * You must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 *
 * Follow-up: Minimize total number of operations
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  // TODO: Implement in-place zero moving
  // Hint: Two pointers - one for next non-zero position

}

// ============ TEST CASES ============

console.log("Running Move Zeroes tests...\n");

const test1 = [0,1,0,3,12];
moveZeroes(test1);
console.log("Test 1:", JSON.stringify(test1), "| Expected: [1,3,12,0,0]");

const test2 = [0];
moveZeroes(test2);
console.log("Test 2:", JSON.stringify(test2), "| Expected: [0]");

const test3 = [1,2,3,4,5];
moveZeroes(test3);
console.log("Test 3:", JSON.stringify(test3), "| Expected: [1,2,3,4,5]");

const test4 = [0,0,0,1];
moveZeroes(test4);
console.log("Test 4:", JSON.stringify(test4), "| Expected: [1,0,0,0]");
