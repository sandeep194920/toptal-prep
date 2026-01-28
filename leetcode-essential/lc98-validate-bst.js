/**
 * LeetCode 98 - Validate Binary Search Tree ✓
 *
 * Difficulty: Medium
 * Pattern: Range validation
 * Priority: MEDIUM
 *
 * Problem:
 * Given the root of a binary tree, determine if it is a valid BST.
 *
 * A valid BST:
 * - Left subtree contains only nodes with keys < node's key
 * - Right subtree contains only nodes with keys > node's key
 * - Both left and right subtrees must also be BSTs
 *
 * Example 1:
 * Input: root = [2,1,3]
 *   2
 *  / \
 * 1   3
 * Output: true
 *
 * Example 2:
 * Input: root = [5,1,4,null,null,3,6]
 *   5
 *  / \
 * 1   4
 *    / \
 *   3   6
 * Output: false (4 is not less than 5)
 *
 * Constraints:
 * - Number of nodes: [1, 10^4]
 * - -2^31 <= Node.val <= 2^31 - 1
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
 * @return {boolean}
 */
function isValidBST(root) {
  // TODO: Implement BST validation
  // Hint: Use min/max range tracking
  // Hint: Pass range down during recursion

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

console.log("Running Validate BST tests...\n");

const root1 = buildTree([2, 1, 3]);
console.log("Test 1:", isValidBST(root1), "| Expected: true");

const root2 = buildTree([5, 1, 4, null, null, 3, 6]);
console.log("Test 2:", isValidBST(root2), "| Expected: false");

const root3 = buildTree([1, 1]);
console.log("Test 3:", isValidBST(root3), "| Expected: false (duplicates not allowed)");
