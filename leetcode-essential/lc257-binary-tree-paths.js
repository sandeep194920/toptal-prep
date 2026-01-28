/**
 * LeetCode 257 - Binary Tree Paths ⭐
 *
 * Difficulty: Easy
 * Pattern: DFS with path building
 * Priority: HIGH
 *
 * Problem:
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [1,2,3,null,5]
 *    1
 *   / \
 *  2   3
 *   \
 *    5
 * Output: ["1->2->5","1->3"]
 *
 * Example 2:
 * Input: root = [1]
 * Output: ["1"]
 *
 * Constraints:
 * - Number of nodes: [1, 100]
 * - -100 <= Node.val <= 100
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
  // TODO: Implement path collection
  // Hint: Build path string during DFS
  // Hint: Add to result when reaching leaf

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

console.log("Running Binary Tree Paths tests...\n");

const root1 = buildTree([1, 2, 3, null, 5]);
const result1 = binaryTreePaths(root1);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [\"1->2->5\",\"1->3\"]");

const root2 = buildTree([1]);
const result2 = binaryTreePaths(root2);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [\"1\"]");
