/**
 * LeetCode 104 - Maximum Depth of Binary Tree ⭐
 *
 * Difficulty: Easy
 * Pattern: Simple recursion
 * Priority: HIGH - Confidence builder
 *
 * Problem:
 * Given the root of a binary tree, return its maximum depth.
 * Maximum depth is the number of nodes along the longest path from root to leaf.
 *
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: 3
 *
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Constraints:
 * - Number of nodes: [0, 10^4]
 * - -100 <= Node.val <= 100
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is height
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  // TODO: Implement max depth
  // Hint: 1 + max(left depth, right depth)

}

// ============ TEST CASES ============

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

console.log("Running Maximum Depth tests...\n");

const root1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.log("Test 1:", maxDepth(root1), "| Expected: 3", maxDepth(root1) === 3 ? "✅" : "❌");

const root2 = buildTree([1, null, 2]);
console.log("Test 2:", maxDepth(root2), "| Expected: 2", maxDepth(root2) === 2 ? "✅" : "❌");

const root3 = buildTree([]);
console.log("Test 3:", maxDepth(root3), "| Expected: 0", maxDepth(root3) === 0 ? "✅" : "❌");

const root4 = buildTree([1]);
console.log("Test 4:", maxDepth(root4), "| Expected: 1", maxDepth(root4) === 1 ? "✅" : "❌");
