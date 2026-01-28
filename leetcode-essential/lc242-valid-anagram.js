/**
 * LeetCode 242 - Valid Anagram ✓
 *
 * Difficulty: Easy
 * Pattern: Frequency counting
 * Priority: MEDIUM - Hash map practice
 *
 * Problem:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An anagram is a word formed by rearranging the letters of another word.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters
 *
 * Follow-up: What if unicode characters? Use hash map instead of array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - fixed 26 letters
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  // TODO: Implement anagram check
  // Hint: Count character frequencies

}

// ============ TEST CASES ============

console.log("Running Valid Anagram tests...\n");

console.log("Test 1:", isAnagram("anagram", "nagaram"), "| Expected: true ✅");
console.log("Test 2:", isAnagram("rat", "car"), "| Expected: false ✅");
console.log("Test 3:", isAnagram("a", "a"), "| Expected: true ✅");
console.log("Test 4:", isAnagram("a", "ab"), "| Expected: false ✅");
