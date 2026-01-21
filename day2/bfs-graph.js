/**
 * Tree Distance Counter (BFS + Graph Building)
 *
 * Problem: Given an array T where T[i] points to the parent of node i,
 * find the distance from the capital (root) to all other nodes.
 *
 * Difficulty: Hard
 * Pattern: BFS + Graph Building
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Insight: Convert parent array to adjacency list, then BFS from capital.
 * Capital is the node where T[i] == i (self-loop).
 *
 * Example:
 * Input: T = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1]
 * Output: [1, 2, 1, 2, 0, 2, 1, 3, 1, 3]
 * Explanation: T[4] = 4 means node 4 is capital. Distances from capital to all nodes.
 */

function solution(T) {
  // TODO: Implement BFS + Graph Building
  // Step 1: Build graph from parent array
  // Hint: const graph = {}; for (let i = 0; i < T.length; i++) { ... }
  // If T[i] == i, it's the capital (root)
  // Otherwise, create bidirectional edge between i and T[i]
  
  // Step 2: BFS from capital
  // Hint: const queue = [capital]; const visited = new Set([capital]);
  // const distances = new Map([[capital, 0]]);
  
  // Step 3: Count cities at each distance
  // Hint: result[dist - 1]++ for each distance

}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running Tree Distance Counter tests...\n");

// Test 1: Example from problem
const result1 = solution([9, 1, 4, 9, 0, 4, 8, 9, 0, 1]);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [1, 2, 1, 2, 0, 2, 1, 3, 1, 3]");
console.log(JSON.stringify(result1) === JSON.stringify([1, 2, 1, 2, 0, 2, 1, 3, 1, 3]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Simple tree (linear chain)
const result2 = solution([0, 0, 1, 2]);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [0, 1, 2, 3]");
console.log(JSON.stringify(result2) === JSON.stringify([0, 1, 2, 3]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Single node (capital only)
const result3 = solution([0]);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: [0]");
console.log(JSON.stringify(result3) === JSON.stringify([0]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Star graph (all connect to capital)
const result4 = solution([2, 2, 2, 2, 2]);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [1, 1, 0, 1, 1]");
console.log(JSON.stringify(result4) === JSON.stringify([1, 1, 0, 1, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Two nodes
const result5 = solution([1, 1]);
console.log("Test 5:", JSON.stringify(result5));
console.log("Expected: [1, 0]");
console.log(JSON.stringify(result5) === JSON.stringify([1, 0]) ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Build graph with bidirectional edges, then BFS from capital!");
