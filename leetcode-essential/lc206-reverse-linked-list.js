/**
 * LeetCode 206 - Reverse Linked List ✓
 *
 * Difficulty: Easy
 * Pattern: Pointer manipulation
 * Priority: MEDIUM - Linked list fundamentals
 *
 * Problem:
 * Given the head of a singly linked list, reverse the list,
 * and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 * Input: head = []
 * Output: []
 *
 * Constraints:
 * - Number of nodes: [0, 5000]
 * - -5000 <= Node.val <= 5000
 *
 * Follow-up: Can you solve both iteratively and recursively?
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) iterative, O(n) recursive
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // TODO: Implement list reversal
  // Hint: prev, curr, next pointers

}

// ============ TEST CASES ============

function arrayToList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

console.log("Running Reverse Linked List tests...\n");

const l1 = arrayToList([1,2,3,4,5]);
const rev1 = reverseList(l1);
console.log("Test 1:", JSON.stringify(listToArray(rev1)));
console.log("Expected: [5,4,3,2,1]");

const l2 = arrayToList([1,2]);
const rev2 = reverseList(l2);
console.log("Test 2:", JSON.stringify(listToArray(rev2)));
console.log("Expected: [2,1]");

const l3 = arrayToList([]);
const rev3 = reverseList(l3);
console.log("Test 3:", listToArray(rev3));
console.log("Expected: []");
