/**
 * LeetCode 695 - Max Area of Island 🔥
 *
 * Difficulty: Medium
 * Pattern: DFS with counting
 * Priority: CRITICAL - Extension of Number of Islands
 *
 * Problem:
 * You are given an m x n binary matrix grid. An island is a group of 1's
 * (representing land) connected 4-directionally (horizontal or vertical).
 * You may assume all four edges of the grid are surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid. If there is no island, return 0.
 *
 * Example 1:
 * Input: grid = [
 *   [0,0,1,0,0,0,0,1,0,0,0,0,0],
 *   [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *   [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *   [0,1,0,0,1,1,0,0,1,0,1,0,0]
 * ]
 * Output: 6 (island in middle-right: 1,1,1,1,1,1)
 *
 * Example 2:
 * Input: grid = [[0,0,0,0,0,0,0,0]]
 * Output: 0
 *
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 50
 * - grid[i][j] is either 0 or 1
 *
 * Approach:
 * 1. Similar to Number of Islands
 * 2. But track area size during DFS
 * 3. Keep track of maximum area found
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) for recursion stack
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  // TODO: Implement max area finding with DFS
  // Hint: Return area count from DFS function
  // Hint: Track maximum area across all islands

}

// ============ TEST CASES ============

console.log("Running Max Area of Island tests...\n");

// Test 1: Example from problem
const grid1 = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
const result1 = maxAreaOfIsland(grid1);
console.log("Test 1:", result1);
console.log("Expected: 6");
console.log(result1 === 6 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: No islands
const grid2 = [[0,0,0,0,0,0,0,0]];
const result2 = maxAreaOfIsland(grid2);
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Single cell island
const grid3 = [[1]];
const result3 = maxAreaOfIsland(grid3);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Entire grid is island
const grid4 = [
  [1,1,1],
  [1,1,1],
  [1,1,1]
];
const result4 = maxAreaOfIsland(grid4);
console.log("Test 4:", result4);
console.log("Expected: 9");
console.log(result4 === 9 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Multiple islands with different sizes
const grid5 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,0,1,1],
  [0,0,0,1,1]
];
const result5 = maxAreaOfIsland(grid5);
console.log("Test 5:", result5);
console.log("Expected: 4");
console.log(result5 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: DFS with counting - return area from DFS!");
console.log("Key: Track max area across all islands.");
