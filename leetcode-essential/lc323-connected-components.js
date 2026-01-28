/**
 * LeetCode 323 - Number of Connected Components in Undirected Graph 🔥
 *
 * Difficulty: Medium
 * Pattern: Union-Find or DFS
 * Priority: CRITICAL - Similar to Toptal Tree Distance
 *
 * Problem:
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges,
 * write a function to find the number of connected components.
 *
 * Example 1:
 * Input: n = 5, edges = [[0,1],[1,2],[3,4]]
 * 0 -- 1 -- 2    3 -- 4
 * Output: 2
 *
 * Example 2:
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
 * 0 -- 1 -- 2 -- 3 -- 4
 * Output: 1
 *
 * Constraints:
 * - 1 <= n <= 2000
 * - 0 <= edges.length <= 5000
 * - edges[i].length == 2
 * - 0 <= ai, bi < n
 * - ai != bi
 * - No duplicate edges
 *
 * Approach 1 (DFS):
 * 1. Build adjacency list
 * 2. DFS from each unvisited node
 * 3. Count number of DFS calls
 *
 * Approach 2 (Union-Find):
 * 1. Initialize parent array
 * 2. Union nodes for each edge
 * 3. Count unique parents
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  // TODO: Implement connected components counting
  // Hint: Build graph, then DFS from each unvisited

}

// ============ TEST CASES ============

console.log("Running Connected Components tests...\n");

const result1 = countComponents(5, [[0,1],[1,2],[3,4]]);
console.log("Test 1:", result1);
console.log("Expected: 2");
console.log(result1 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = countComponents(5, [[0,1],[1,2],[2,3],[3,4]]);
console.log("Test 2:", result2);
console.log("Expected: 1");
console.log(result2 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = countComponents(4, []);
console.log("Test 3:", result3);
console.log("Expected: 4 (all isolated)");
console.log(result3 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = countComponents(1, []);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: DFS or Union-Find!");
console.log("Key: Each DFS call = one component.");
