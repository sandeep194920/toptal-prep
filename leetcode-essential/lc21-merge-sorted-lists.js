/**
 * LeetCode 21 - Merge Two Sorted Lists ✓
 *
 * Difficulty: Easy
 * Pattern: Two pointers / Linked List
 * Priority: MEDIUM
 *
 * Problem:
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the two lists.
 *
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 * Constraints:
 * - Number of nodes: [0, 50]
 * - -100 <= Node.val <= 100
 * - Both lists are sorted in non-decreasing order
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 */

// ListNode definition
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // TODO: Implement list merging
  // Hint: Use dummy node to simplify

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

console.log("Running Merge Two Sorted Lists tests...\n");

const l1 = arrayToList([1,2,4]);
const l2 = arrayToList([1,3,4]);
const merged1 = mergeTwoLists(l1, l2);
console.log("Test 1:", JSON.stringify(listToArray(merged1)));
console.log("Expected: [1,1,2,3,4,4]");

const merged2 = mergeTwoLists(null, null);
console.log("Test 2:", listToArray(merged2));
console.log("Expected: []");

const l3 = arrayToList([]);
const l4 = arrayToList([0]);
const merged3 = mergeTwoLists(l3, l4);
console.log("Test 3:", JSON.stringify(listToArray(merged3)));
console.log("Expected: [0]");
