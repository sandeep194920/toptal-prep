/**
 * LeetCode 704 - Binary Search ✓
 *
 * Difficulty: Easy
 * Pattern: Binary Search
 * Priority: MEDIUM - Foundation algorithm
 *
 * Problem:
 * Given a sorted array of integers nums and an integer target,
 * write a function to search target in nums. If target exists,
 * return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All integers in nums are unique
 * - nums is sorted in ascending order
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // TODO: Implement binary search
  // Hint: left, right, mid pointers

}

// ============ TEST CASES ============

console.log("Running Binary Search tests...\n");

console.log("Test 1:", search([-1,0,3,5,9,12], 9), "| Expected: 4 ✅");
console.log("Test 2:", search([-1,0,3,5,9,12], 2), "| Expected: -1 ✅");
console.log("Test 3:", search([5], 5), "| Expected: 0 ✅");
console.log("Test 4:", search([5], -5), "| Expected: -1 ✅");
console.log("Test 5:", search([1,2,3,4,5], 1), "| Expected: 0 ✅");
console.log("Test 6:", search([1,2,3,4,5], 5), "| Expected: 4 ✅");
