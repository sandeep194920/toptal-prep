/**
 * XML Tag Counting (Stack Parsing)
 *
 * Problem: Count how many tags need to be added to make XML string valid.
 * Valid XML has matching opening <tag> and closing </tag> pairs.
 *
 * Difficulty: Medium
 * Pattern: Stack for matching pairs
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Insight: Stack tracks opening tags. Pop when closing tag matches.
 * Count mismatches.
 *
 * Example:
 * Input: "<app><div></app>"
 * Output: 1
 * Explanation: Missing </div>, need 1 closing tag
 */

function countMissingTags(S) {
  // TODO: Implement using stack
  // Hint: const stack = [];
  // Parse tags, push opening tags, pop on matching closing tags

}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running XML Tag Counting tests...\n");

// Test 1: Missing closing tag
const result1 = countMissingTags("<app><app>");
console.log("Test 1:", result1);
console.log("Expected: 2");
console.log(result1 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Missing opening tag
const result2 = countMissingTags("</app></app>");
console.log("Test 2:", result2);
console.log("Expected: 2");
console.log(result2 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Mismatched tags
const result3 = countMissingTags("<app></div>");
console.log("Test 3:", result3);
console.log("Expected: 2");
console.log(result3 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Nested valid tags
const result4 = countMissingTags("<app><div></div></app>");
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Empty string
const result5 = countMissingTags("");
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Complex nested with missing
const result6 = countMissingTags("<a><b><c></c></a>");
console.log("Test 6:", result6);
console.log("Expected: 1");
console.log(result6 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Stack for opening tags, pop on matching closing, count mismatches!");
