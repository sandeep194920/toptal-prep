/**
 * LeetCode 200 - Number of Islands 🔥🔥🔥
 *
 * Difficulty: Medium
 * Pattern: DFS/BFS on 2D Grid
 * Priority: CRITICAL - Most asked graph problem!
 *
 * Problem:
 * Given an m x n 2D binary grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * surrounded by water.
 *
 * Example 1:
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 * Example 2:
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 300
 * - grid[i][j] is '0' or '1'
 *
 * Approach:
 * 1. Iterate through each cell in grid
 * 2. When you find a '1', increment island count
 * 3. Use DFS/BFS to mark all connected '1's as visited
 * 4. Continue until all cells processed
 *
 * Time Complexity: O(m * n) where m, n are grid dimensions
 * Space Complexity: O(m * n) for recursion stack in worst case
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  // TODO: Implement island counting with DFS/BFS
  // Hint: Use DFS to mark all connected land cells

}

// ============ TEST CASES ============

console.log("Running Number of Islands tests...\n");

// Test 1: Example from problem - single island
const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
const result1 = numIslands(grid1);
console.log("Test 1:", result1);
console.log("Expected: 1");
console.log(result1 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Multiple islands
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
const result2 = numIslands(grid2);
console.log("Test 2:", result2);
console.log("Expected: 3");
console.log(result2 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: No islands
const grid3 = [
  ["0","0","0"],
  ["0","0","0"]
];
const result3 = numIslands(grid3);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: All land
const grid4 = [
  ["1","1"],
  ["1","1"]
];
const result4 = numIslands(grid4);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Single cell island
const grid5 = [
  ["1"]
];
const result5 = numIslands(grid5);
console.log("Test 5:", result5);
console.log("Expected: 1");
console.log(result5 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Diagonal doesn't connect
const grid6 = [
  ["1","0","1"],
  ["0","1","0"],
  ["1","0","1"]
];
const result6 = numIslands(grid6);
console.log("Test 6:", result6);
console.log("Expected: 5 (diagonals don't connect)");
console.log(result6 === 5 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: DFS on 2D grid - mark visited cells!");
console.log("Key: Only horizontal/vertical connections count.");
