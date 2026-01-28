/**
 * LeetCode 20 - Valid Parentheses ✓
 *
 * Difficulty: Easy
 * Pattern: Stack
 * Priority: MEDIUM
 *
 * Problem:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets are closed by same type
 * 2. Open brackets are closed in correct order
 * 3. Every close bracket has corresponding open bracket
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 *
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // TODO: Implement parentheses validation
  // Hint: Use stack to match pairs

}

// ============ TEST CASES ============

console.log("Running Valid Parentheses tests...\n");

console.log("Test 1:", isValid("()"), "| Expected: true ✅");
console.log("Test 2:", isValid("()[]{}"), "| Expected: true ✅");
console.log("Test 3:", isValid("(]"), "| Expected: false ✅");
console.log("Test 4:", isValid("([)]"), "| Expected: false ✅");
console.log("Test 5:", isValid("{[]}"), "| Expected: true ✅");
console.log("Test 6:", isValid("("), "| Expected: false ✅");
console.log("Test 7:", isValid(")"), "| Expected: false ✅");
