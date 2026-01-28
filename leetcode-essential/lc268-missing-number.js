/**
 * LeetCode 268 - Missing Number ⭐
 *
 * Difficulty: Easy
 * Pattern: XOR or Math
 * Priority: HIGH - Variant of MEX
 *
 * Problem:
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in [0,3].
 * 2 is the missing number.
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: 2
 *
 * Example 3:
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 *
 * Constraints:
 * - n == nums.length
 * - 1 <= n <= 10^4
 * - 0 <= nums[i] <= n
 * - All numbers are unique
 *
 * Follow-up: Can you solve it in O(n) time and O(1) space?
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  // TODO: Implement missing number finder
  // Hint: Use math - sum of 0..n = n*(n+1)/2
  // Or Hint: Use XOR - a^a = 0, a^0 = a

}

// ============ TEST CASES ============

console.log("Running Missing Number tests...\n");

console.log("Test 1:", missingNumber([3,0,1]), "| Expected: 2 ✅");
console.log("Test 2:", missingNumber([0,1]), "| Expected: 2 ✅");
console.log("Test 3:", missingNumber([9,6,4,2,3,5,7,0,1]), "| Expected: 8 ✅");
console.log("Test 4:", missingNumber([0]), "| Expected: 1 ✅");
