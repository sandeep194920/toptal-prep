/**
 * Missing Closing Tags Counter - SIMPLE VERSION (Stack Pattern)
 *
 * Problem: Count how many CLOSING tags are missing from an XML-like string.
 * SIMPLIFIED: Extra closing tags are IGNORED (assumes openings are always valid).
 *
 * Difficulty: Easy
 * Pattern: Counter (simplified stack/bracket matching)
 * Time Complexity: O(n)
 * Space Complexity: O(1) - only a counter, no actual stack needed
 *
 * Key Insight: Track opening tags with a counter. Decrement on closing tags.
 * Final counter = missing closing tags. Ignore extra closings.
 *
 * Examples:
 * Input: "<app><app></app>"
 * Output: 1
 * Explanation: 2 opening tags, 1 closing tag → 1 missing closing tag
 *
 * Input: "<app></app></app></app>"
 * Output: 0
 * Explanation: 1 opening tag, 3 closing tags → 0 missing (extras ignored!)
 *
 * Input: "<app><app><app>"
 * Output: 3
 * Explanation: 3 opening tags, 0 closing tags → 3 missing closing tags
 *
 * Input: "</app><app><app>"
 * Output: 2
 * Explanation: First </app> ignored (no opening to match), then 2 openings → 2 missing closings
 *
 * LEARNING PATH:
 * ✅ Start here: Simpler problem, builds intuition
 * ➡️ Then try: broken-xml-logger.js (more complex bidirectional version)
 */

function countMissingClosingTags(S) {
  // TODO: Implement using counter
  // Hint: let openCount = 0;
  // Loop through string, increment on '<tag>', decrement on '</tag>'
  // Only decrement if openCount > 0 (ignore extra closings)
  // Return openCount (these are unmatched openings = missing closings)

  let openCount = 0;

  /* 
  
  </app><app><app>
  
  */

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "<" && S[i + 1] === "/") {
      if (openCount > 0) openCount--;
    } else if (S[i] === "<") {
      openCount++;
    }
  }

  return openCount;
}

// ============ TUTORIAL SOLUTION ============
// Scroll down only AFTER attempting yourself!
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function countMissingClosingTags_Solution(S) {
  let openCount = 0;

  // Parse through the string
  for (let i = 0; i < S.length; i++) {
    // Found start of a tag
    if (S[i] === "<") {
      // Check if it's a closing tag
      if (S[i + 1] === "/") {
        // It's a closing tag </tag>
        if (openCount > 0) {
          openCount--; // Match with an opening tag
        }
        // If openCount is 0, it's an extra closing tag - IGNORE IT
      } else {
        // It's an opening tag <tag>
        openCount++;
      }
    }
  }

  // Remaining openCount = unmatched opening tags = missing closing tags
  return openCount;
}

// ============ STEP-BY-STEP WALKTHROUGH ============

/**
 * Example 1: "<app><app></app>"
 *
 * Step-by-step:
 * 1. i=0: '<' found, next is 'a' (not '/') → Opening tag
 *    openCount = 1
 *
 * 2. i=5: '<' found, next is 'a' (not '/') → Opening tag
 *    openCount = 2
 *
 * 3. i=10: '<' found, next is '/' → Closing tag
 *    openCount > 0, so decrement
 *    openCount = 1
 *
 * 4. End of string
 *    openCount = 1 → 1 missing closing tag ✅
 */

/**
 * Example 2: "<app></app></app></app>"
 *
 * Step-by-step:
 * 1. i=0: '<' found, next is 'a' → Opening tag
 *    openCount = 1
 *
 * 2. i=5: '<' found, next is '/' → Closing tag
 *    openCount = 0
 *
 * 3. i=11: '<' found, next is '/' → Closing tag
 *    openCount is 0, so IGNORE (extra closing tag)
 *    openCount = 0
 *
 * 4. i=17: '<' found, next is '/' → Closing tag
 *    openCount is 0, so IGNORE (extra closing tag)
 *    openCount = 0
 *
 * 5. End of string
 *    openCount = 0 → 0 missing closing tags ✅
 */

/**
 * Example 3: "</app><app><app>"
 *
 * Step-by-step:
 * 1. i=0: '<' found, next is '/' → Closing tag
 *    openCount is 0, so IGNORE (orphan closing)
 *    openCount = 0
 *
 * 2. i=6: '<' found, next is 'a' → Opening tag
 *    openCount = 1
 *
 * 3. i=11: '<' found, next is 'a' → Opening tag
 *    openCount = 2
 *
 * 4. End of string
 *    openCount = 2 → 2 missing closing tags ✅
 */

// ============ KEY DIFFERENCES ============

/**
 * SIMPLE Version (this file) vs. BIDIRECTIONAL Version (broken-xml-logger.js)
 *
 * SIMPLE Version (missing-closing-tags-simple.js):
 * - Only counts MISSING CLOSING tags
 * - Extra closing tags are IGNORED
 * - Returns: Count of unmatched opening tags
 * - Example: "<app></app></app></app>" → 0 (extras ignored)
 * - Example: "</app><app><app>" → 2 (orphan ignored, 2 unclosed)
 * - Uses: Simple counter
 * - Complexity: O(n) time, O(1) space
 *
 * BIDIRECTIONAL Version (broken-xml-logger.js):
 * - Counts BOTH missing openings AND closings
 * - Extra closing tags COUNT as missing openings
 * - Returns: Total tags needed to fix (opens + closes)
 * - Example: "<app></app></app></app>" → 2 (2 missing openings)
 * - Example: "</app><app><app>" → 3 (1 missing opening + 2 missing closings)
 * - Uses: HashMap + min tracking
 * - Complexity: O(n) time, O(k) space where k = unique tag types
 *
 * Key Insight:
 * - SIMPLE is for: "How many closing tags do we need to add?"
 * - BIDIRECTIONAL is for: "How many total tags (opens OR closes) are broken?"
 */

// ============ EDGE CASES ============

/**
 * 1. Empty string: "" → 0
 * 2. Only opening tags: "<app><app>" → 2
 * 3. Only closing tags: "</app></app>" → 0 (all ignored)
 * 4. Perfect match: "<app></app>" → 0
 * 5. Extra closing tags: "<app></app></app>" → 0 (extras ignored!)
 * 6. Nested tags: "<a><b><c></c></b></a>" → 0 (all matched)
 * 7. Orphan closing first: "</app><app>" → 1 (orphan ignored, 1 unclosed)
 */

// ============ TEST CASES ============

console.log("Running Missing Closing Tags Counter (SIMPLE) tests...\n");

// Test 1: Missing closing tags
const result1 = countMissingClosingTags("<app><app></app>");
console.log("Test 1:", result1);
console.log("Expected: 1");
console.log(result1 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Extra closing tags (IGNORED in simple version)
const result2 = countMissingClosingTags("<app></app></app></app>");
console.log("Test 2:", result2);
console.log("Expected: 0 (extras ignored)");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: All opening tags
const result3 = countMissingClosingTags("<app><app><app>");
console.log("Test 3:", result3);
console.log("Expected: 3");
console.log(result3 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Perfect match
const result4 = countMissingClosingTags("<app></app>");
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Empty string
const result5 = countMissingClosingTags("");
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Only closing tags (all ignored)
const result6 = countMissingClosingTags("</app></app></app>");
console.log("Test 6:", result6);
console.log("Expected: 0 (all ignored)");
console.log(result6 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 7: Orphan closing first (ignored)
const result7 = countMissingClosingTags("</app><app><app>");
console.log("Test 7:", result7);
console.log("Expected: 2 (orphan ignored)");
console.log(result7 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 8: Complex nested
const result8 = countMissingClosingTags("<a><b><c></c></b>");
console.log("Test 8:", result8);
console.log("Expected: 1");
console.log(result8 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 9: Multiple unclosed
const result9 = countMissingClosingTags("<a><b><c><d></d>");
console.log("Test 9:", result9);
console.log("Expected: 3");
console.log(result9 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log(
  "Pattern: Simple counter - increment on opens, decrement on closes",
);
console.log(
  "Key Difference: Extra closings are IGNORED (not counted as errors)",
);
console.log(
  "Next Challenge: Try broken-xml-logger.js for bidirectional counting!",
);
console.log("========================================");

/**
 * LEARNING PATH:
 *
 * 1. First attempt: Implement countMissingClosingTags() yourself
 * 2. Run tests: node day1/missing-closing-tags-simple.js
 * 3. If stuck, look at the tutorial solution above
 * 4. Once mastered, move to broken-xml-logger.js (harder!)
 *
 * WHEN TO USE THIS PATTERN:
 * - Counting unmatched opening brackets/tags
 * - Only care about missing closings (not extras)
 * - Simplest form of bracket matching
 *
 * WHEN TO USE BIDIRECTIONAL VERSION:
 * - Need to count BOTH missing opens AND closes
 * - Extra closings are considered errors
 * - More realistic XML/HTML validation
 */
