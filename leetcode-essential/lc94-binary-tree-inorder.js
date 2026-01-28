/**
 * LeetCode 94 - Binary Tree Inorder Traversal
 *
 * Difficulty: Easy
 * Pattern: DFS (Recursive and Iterative)
 * Priority: CRITICAL - Foundation for all tree problems
 *
 * Problem:
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Inorder: Left -> Root -> Right
 *
 * Example 1:
 * Input: root = [1,null,2,3]
 *   1
 *    \
 *     2
 *    /
 *   3
 * Output: [1,3,2]
 *
 * Example 2:
 * Input: root = []
 * Output: []
 *
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 *
 * Constraints:
 * - Number of nodes: [0, 100]
 * - -100 <= Node.val <= 100
 *
 * Follow-up: Can you solve it both recursively and iteratively?
 *
 * Approach 1 (Recursive):
 * 1. Visit left subtree
 * 2. Process current node
 * 3. Visit right subtree
 *
 * Approach 2 (Iterative):
 * 1. Use stack to simulate recursion
 * 2. Go left as far as possible, pushing nodes
 * 3. Pop and process, then go right
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is height (recursion stack)
 */

// Tree Node Definition
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  // TODO: Implement inorder traversal (try both recursive and iterative!)
  // Hint: Recursive is simpler - Left, Root, Right

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

console.log("Running Binary Tree Inorder Traversal tests...\n");

// Test 1: Example from problem
const root1 = buildTree([1, null, 2, 3]);
const result1 = inorderTraversal(root1);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [1,3,2]");
console.log(JSON.stringify(result1) === JSON.stringify([1,3,2]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Empty tree
const root2 = buildTree([]);
const result2 = inorderTraversal(root2);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: []");
console.log(JSON.stringify(result2) === JSON.stringify([]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Single node
const root3 = buildTree([1]);
const result3 = inorderTraversal(root3);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: [1]");
console.log(JSON.stringify(result3) === JSON.stringify([1]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Complete tree
const root4 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const result4 = inorderTraversal(root4);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [4,2,5,1,6,3,7]");
console.log(JSON.stringify(result4) === JSON.stringify([4,2,5,1,6,3,7]) ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: DFS Inorder - Left, Root, Right!");
console.log("Challenge: Try implementing both recursive and iterative.");
