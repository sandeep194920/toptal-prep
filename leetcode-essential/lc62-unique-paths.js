/**
 * LeetCode 62 - Unique Paths ⭐
 *
 * Difficulty: Medium
 * Pattern: Combinatorics / Dynamic Programming
 * Priority: HIGH - Similar to John's Journey
 *
 * Problem:
 * A robot is on an m x n grid, starting at top-left corner.
 * The robot can only move right or down. How many unique paths
 * are there to reach bottom-right corner?
 *
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 *
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 *
 * Constraints:
 * - 1 <= m, n <= 100
 *
 * Approach 1 (Combinatorics):
 * To go from (0,0) to (m-1, n-1), need (m-1) downs and (n-1) rights.
 * Total moves = m + n - 2
 * Choose (m-1) positions for down moves: C(m+n-2, m-1)
 *
 * Approach 2 (DP):
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 *
 * Time Complexity: O(m * n) for DP, O(m) for combinatorics
 * Space Complexity: O(m * n) for DP, O(1) for combinatorics
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  // TODO: Implement unique paths counter
  // Hint: Use DP or combinatorics

}

// ============ TEST CASES ============

console.log("Running Unique Paths tests...\n");

console.log("Test 1:", uniquePaths(3, 7), "| Expected: 28 ✅");
console.log("Test 2:", uniquePaths(3, 2), "| Expected: 3 ✅");
console.log("Test 3:", uniquePaths(1, 1), "| Expected: 1 ✅");
console.log("Test 4:", uniquePaths(2, 2), "| Expected: 2 ✅");
console.log("Test 5:", uniquePaths(3, 3), "| Expected: 6 ✅");
