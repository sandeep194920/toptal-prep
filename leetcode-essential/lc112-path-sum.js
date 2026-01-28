/**
 * LeetCode 112 - Path Sum
 *
 * Difficulty: Easy
 * Pattern: DFS with path tracking
 * Priority: CRITICAL
 *
 * Problem:
 * Given the root of a binary tree and an integer targetSum, return true if
 * the tree has a root-to-leaf path such that adding up all the values along
 * the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 *          5
 *         / \
 *        4   8
 *       /   / \
 *      11  13  4
 *     /  \      \
 *    7    2      1
 * Output: true (path: 5->4->11->2 = 22)
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 *
 * Example 3:
 * Input: root = [], targetSum = 0
 * Output: false
 *
 * Constraints:
 * - Number of nodes: [0, 5000]
 * - -1000 <= Node.val <= 1000
 * - -1000 <= targetSum <= 1000
 *
 * Approach:
 * 1. Use DFS to traverse all root-to-leaf paths
 * 2. Subtract current node value from targetSum
 * 3. At leaf, check if remaining sum is 0
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is height
 */

// Tree Node Definition
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
  // TODO: Implement path sum check
  // Hint: Use recursion, subtract current value from targetSum
  // Hint: Check if at leaf node and sum is 0

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

console.log("Running Path Sum tests...\n");

// Test 1: Path exists
const root1 = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
const result1 = hasPathSum(root1, 22);
console.log("Test 1:", result1);
console.log("Expected: true (5->4->11->2)");
console.log(result1 === true ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: No path
const root2 = buildTree([1, 2, 3]);
const result2 = hasPathSum(root2, 5);
console.log("Test 2:", result2);
console.log("Expected: false");
console.log(result2 === false ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Empty tree
const root3 = buildTree([]);
const result3 = hasPathSum(root3, 0);
console.log("Test 3:", result3);
console.log("Expected: false");
console.log(result3 === false ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Single node matching
const root4 = buildTree([1]);
const result4 = hasPathSum(root4, 1);
console.log("Test 4:", result4);
console.log("Expected: true");
console.log(result4 === true ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Single node not matching
const root5 = buildTree([1]);
const result5 = hasPathSum(root5, 0);
console.log("Test 5:", result5);
console.log("Expected: false");
console.log(result5 === false ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Negative values
const root6 = buildTree([1, -2, -3]);
const result6 = hasPathSum(root6, -1);
console.log("Test 6:", result6);
console.log("Expected: true (1->-2)");
console.log(result6 === true ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: DFS with path tracking!");
console.log("Key: Only count root-to-LEAF paths.");
