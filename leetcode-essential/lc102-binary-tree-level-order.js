/**
 * LeetCode 102 - Binary Tree Level Order Traversal 🔥🔥
 *
 * Difficulty: Medium
 * Pattern: BFS with Queue
 * Priority: CRITICAL - Toptal loves this pattern!
 *
 * Problem:
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values (i.e., from left to right, level by level).
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: [[3],[9,20],[15,7]]
 *
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 *
 * Constraints:
 * - Number of nodes: [0, 2000]
 * - -1000 <= Node.val <= 1000
 *
 * Approach:
 * 1. Use BFS with queue
 * 2. Process nodes level by level
 * 3. Track level size to group nodes
 *
 * Time Complexity: O(n) where n is number of nodes
 * Space Complexity: O(n) for queue and result
 */

// Tree Node Definition
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  // TODO: Implement BFS level order traversal
  // Hint: Use a queue, process level by level

}

// ============ TEST CASES ============

// Helper: Build tree from array
function buildTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

console.log("Running Binary Tree Level Order Traversal tests...\n");

// Test 1: Example from problem
const root1 = buildTree([3, 9, 20, null, null, 15, 7]);
const result1 = levelOrder(root1);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [[3],[9,20],[15,7]]");
console.log(JSON.stringify(result1) === JSON.stringify([[3],[9,20],[15,7]]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Single node
const root2 = buildTree([1]);
const result2 = levelOrder(root2);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [[1]]");
console.log(JSON.stringify(result2) === JSON.stringify([[1]]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Empty tree
const root3 = buildTree([]);
const result3 = levelOrder(root3);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: []");
console.log(JSON.stringify(result3) === JSON.stringify([]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Left skewed tree
const root4 = buildTree([1, 2, null, 3, null, 4]);
const result4 = levelOrder(root4);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [[1],[2],[3],[4]]");
console.log(JSON.stringify(result4) === JSON.stringify([[1],[2],[3],[4]]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Complete binary tree
const root5 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const result5 = levelOrder(root5);
console.log("Test 5:", JSON.stringify(result5));
console.log("Expected: [[1],[2,3],[4,5,6,7]]");
console.log(JSON.stringify(result5) === JSON.stringify([[1],[2,3],[4,5,6,7]]) ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: BFS with queue - process level by level!");
console.log("Key: Track level size to group nodes correctly.");
