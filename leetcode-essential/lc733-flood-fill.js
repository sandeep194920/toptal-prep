/**
 * LeetCode 733 - Flood Fill ⭐
 *
 * Difficulty: Easy
 * Pattern: Basic DFS
 * Priority: HIGH - Simplest graph problem
 *
 * Problem:
 * You are given an image represented by an m x n grid of integers, where
 * image[i][j] represents the pixel value. You are also given three integers
 * sr, sc, and color. Perform a flood fill starting from pixel (sr, sc).
 *
 * To perform a flood fill:
 * 1. Begin with the starting pixel
 * 2. Change color of all connected pixels of same color
 * 3. Connected means 4-directionally adjacent
 *
 * Example 1:
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 *
 * Example 2:
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * Output: [[0,0,0],[0,0,0]]
 *
 * Constraints:
 * - m == image.length
 * - n == image[i].length
 * - 1 <= m, n <= 50
 * - 0 <= image[i][j], color < 2^16
 * - 0 <= sr < m, 0 <= sc < n
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) for recursion stack
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  // TODO: Implement flood fill with DFS
  // Hint: Watch out for when newColor === oldColor!

}

// ============ TEST CASES ============

console.log("Running Flood Fill tests...\n");

const image1 = [[1,1,1],[1,1,0],[1,0,1]];
const result1 = floodFill(image1, 1, 1, 2);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [[2,2,2],[2,2,0],[2,0,1]]");

const image2 = [[0,0,0],[0,0,0]];
const result2 = floodFill(image2, 0, 0, 0);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [[0,0,0],[0,0,0]]");

const image3 = [[0,0,0],[0,1,1]];
const result3 = floodFill(image3, 1, 1, 1);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: [[0,0,0],[0,1,1]] (already target color)");
