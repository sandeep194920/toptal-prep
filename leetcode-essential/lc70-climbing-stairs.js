/**
 * LeetCode 70 - Climbing Stairs ⭐
 *
 * Difficulty: Easy
 * Pattern: Dynamic Programming / Fibonacci
 * Priority: HIGH - Simple recursion/DP warm-up
 *
 * Problem:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can climb 1 or 2 steps. In how many distinct ways
 * can you climb to the top?
 *
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: 1. (1 step + 1 step) or 2. (2 steps)
 *
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: 1+1+1, 1+2, 2+1
 *
 * Constraints:
 * - 1 <= n <= 45
 *
 * Approach:
 * This is Fibonacci! To reach step n, you either:
 * - Come from step n-1 (take 1 step)
 * - Come from step n-2 (take 2 steps)
 * So: ways(n) = ways(n-1) + ways(n-2)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) with iterative
 */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // TODO: Implement stair climbing counter
  // Hint: It's Fibonacci!

}

// ============ TEST CASES ============

console.log("Running Climbing Stairs tests...\n");

console.log("Test 1:", climbStairs(2), "| Expected: 2 ✅");
console.log("Test 2:", climbStairs(3), "| Expected: 3 ✅");
console.log("Test 3:", climbStairs(4), "| Expected: 5 ✅");
console.log("Test 4:", climbStairs(5), "| Expected: 8 ✅");
console.log("Test 5:", climbStairs(1), "| Expected: 1 ✅");
