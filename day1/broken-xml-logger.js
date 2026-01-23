/**
 * Broken XML Logger - BIDIRECTIONAL VERSION (HashMap + Min Tracking)
 *
 * Problem: Count how many tags (BOTH opening AND closing) are missing from broken XML logs.
 * Unlike simple counting, this problem requires tracking mismatches in BOTH directions.
 *
 * PREREQUISITE: ⚠️ Try missing-closing-tags-simple.js FIRST!
 * This is the harder version. Start with the simple one to build intuition.
 *
 * Difference from Simple Missing Closing Tags:
 * - Simple version (missing-closing-tags-simple.js): Only counts unclosed opening tags (extras ignored)
 * - This version: Counts ALL mismatches (extra openings + extra closings)
 *
 * Difficulty: Easy-Medium
 * Pattern: HashMap to track tag balance + min tracking for negative dips
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k = number of unique tag types
 *
 * Key Insight: Track each tag type's balance (opens - closes).
 * Use Math.abs() to count mismatches in BOTH directions.
 *
 * Examples:
 * Input: "<app></app></app></app>"
 * Output: 2
 * Explanation: 1 opening, 3 closings → balance = -2 → |−2| = 2 missing openings
 *
 * Input: "<app></app><app></app>"
 * Output: 0
 * Explanation: 2 openings, 2 closings → balance = 0 → perfectly matched
 *
 * Input: "<app></app><app><app>"
 * Output: 2
 * Explanation: 3 openings, 1 closing → balance = +2 → 2 missing closings
 *
 * Input: "</app><app><app>"
 * Output: 3
 * Explanation: This is the TRICKY case!
 *   Step by step:
 *   - </app>: balance = -1 (orphan closing, needs 1 opening at start)
 *   - <app>:  balance = 0  (matches the closing we added)
 *   - <app>:  balance = +1 (unclosed, needs 1 closing at end)
 *   But wait, final balance is +1, so why is answer 3?
 *
 *   The key: We need to track BOTH:
 *   1. Minimum openings needed (when balance goes negative): 1
 *   2. Final unclosed tags AFTER adding those openings: +1 + 1 = 2
 *   Total: 1 + 2 = 3 ✓
 *
 * Algorithm:
 * - Track balance as we scan left to right
 * - When balance goes negative, record how many openings we need at the start
 * - At the end, add: (openings needed) + (final balance + openings needed)
 */

// ============ YOUR PRACTICE IMPLEMENTATION ============
// Implement this function yourself!
// Scroll down to see the official solution only AFTER you've attempted it.

function countMissingTags(S) {
  // TODO: Implement the HashMap + Min Tracking approach
  //
  // Hints:
  // 1. Use a Map to track balance for each tag type (opens - closes)
  // 2. Use another Map to track minimum openings needed (when balance goes negative)
  // 3. Parse tags using regex: /<\/?([a-z]+)>/g
  // 4. For each tag:
  //    - If opening: increment balance
  //    - If closing: decrement balance, track if it goes negative
  // 5. Final count = minOpeningsNeeded + max(0, finalBalance + minOpeningsNeeded)
  //
  // Time Complexity: O(n)
  // Space Complexity: O(k) where k = unique tag types

  let diff = 0;
  let delta = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "<" && S[i + 1] === "/") {
      diff--;
      if (diff < 0) {
        diff++;
        delta++;
      }
    } else if (S[i] === "<") {
      diff++;
    }
  }

  return diff + delta;
}

// Legacy function name for backwards compatibility
function countMissingClosingTags(S) {
  return countMissingTags(S);
}

// ============ OFFICIAL SOLUTION ============
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
//
//

function countMissingTags_Solution(S) {
  const tagMap = new Map(); // Track current balance for each tag
  const minOpenings = new Map(); // Track minimum openings needed (when balance goes negative)
  const tagRegex = /<\/?([a-z]+)>/g;
  let match;

  // Parse all tags and track balance for each tag type
  while ((match = tagRegex.exec(S)) !== null) {
    const isClosing = match[0][1] === "/";
    const tagName = match[1];

    if (!tagMap.has(tagName)) {
      tagMap.set(tagName, 0);
      minOpenings.set(tagName, 0);
    }

    if (isClosing) {
      const newBalance = tagMap.get(tagName) - 1;
      tagMap.set(tagName, newBalance);

      // If balance goes negative, we need opening tags at the start
      if (newBalance < 0) {
        minOpenings.set(
          tagName,
          Math.max(minOpenings.get(tagName), Math.abs(newBalance)),
        );
      }
    } else {
      tagMap.set(tagName, tagMap.get(tagName) + 1);
    }
  }

  // Count missing tags:
  // 1. Opening tags needed at start (when balance went negative)
  // 2. Closing tags needed at end (positive final balance)
  let missingCount = 0;
  for (let tagName of tagMap.keys()) {
    const balance = tagMap.get(tagName);
    const neededOpens = minOpenings.get(tagName);

    // If we needed opening tags at some point, add those
    missingCount += neededOpens;

    // Then add any unclosed opening tags at the end
    // (balance accounts for the opening tags we would add, so add balance)
    missingCount += Math.max(0, balance + neededOpens);
  }

  return missingCount;
}

// ============ SIMPLER SOLUTION (for simple case - missing closing tags only) ============
// This is the solution for missing-closing-tags-simple.js
// It only counts missing CLOSING tags, ignoring extra closing tags

function countMissingClosingTags_SimpleSolution(S) {
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
        // If openCount is 0, it's an extra closing tag - ignore it
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
 * Example: "<app><app></app>"
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
 * Example: "<app></app></app></app>"
 *
 * Step-by-step:
 * 1. i=0: '<' found, next is 'a' → Opening tag
 *    openCount = 1
 *
 * 2. i=5: '<' found, next is '/' → Closing tag
 *    openCount = 0
 *
 * 3. i=11: '<' found, next is '/' → Closing tag
 *    openCount is 0, so ignore (extra closing tag)
 *    openCount = 0
 *
 * 4. i=17: '<' found, next is '/' → Closing tag
 *    openCount is 0, so ignore (extra closing tag)
 *    openCount = 0
 *
 * 5. End of string
 *    openCount = 0 → 0 missing closing tags ✅
 */

// ============ KEY DIFFERENCES ============

/**
 * XML Tag Counting (xml-tags.js) vs. Missing Closing Tags (this file)
 *
 * XML Tag Counting:
 * - Validates PROPER NESTING and TAG NAME MATCHING
 * - Returns: Total tags needed to fix (opens + closes)
 * - Example: "<app><div></app>" → Invalid nesting, returns 2
 * - Uses: Stack with tag names
 * - Complexity: O(n) time, O(n) space
 *
 * Missing Closing Tags:
 * - Only counts MISSING CLOSING TAGS
 * - Returns: Count of unmatched opening tags
 * - Example: "<app><div></app>" → 1 missing </div> (ignores nesting)
 * - Uses: Simple counter
 * - Complexity: O(n) time, O(1) space
 *
 * Key Insight:
 * - Missing Closing Tags is SIMPLER (doesn't care about tag names or nesting)
 * - XML Tag Counting is STRICTER (validates structure)
 */

// ============ EDGE CASES ============

/**
 * 1. Empty string: "" → 0
 * 2. Only opening tags: "<app><app>" → 2
 * 3. Only closing tags: "</app></app>" → 0 (all ignored)
 * 4. Perfect match: "<app></app>" → 0
 * 5. Extra closing tags: "<app></app></app>" → 0 (extras ignored)
 * 6. Nested tags: "<a><b><c></c></b></a>" → 0 (all matched)
 */

// ============ TEST CASES ============
// Based on the actual problem requirements

console.log("Running Missing Tags Counter tests...\n");

// Test 1: Extra closing tags (from problem statement)
const result1 = countMissingTags("<app></app></app></app>"); //
console.log("Test 1:", result1);
console.log("Expected: 2");
console.log(result1 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Perfectly balanced (from problem statement)
const result2 = countMissingTags("<app></app><app></app>");
console.log("Test 2:", result2);
console.log("Expected: 0");
console.log(result2 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Missing closing tags (from problem statement)
const result3 = countMissingTags("<app></app><app><app>");
console.log("Test 3:", result3);
console.log("Expected: 2");
console.log(result3 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Orphan closing + unclosed openings (from problem statement)
const result4 = countMissingTags("</app><app><app>");
console.log("Test 4:", result4);
console.log("Expected: 3");
console.log(
  result4 === 3
    ? "✅ PASS (if implementation is correct)\n"
    : "❌ FAIL - This test exposes the algorithm issue\n",
);

// Additional tests
// Test 5: Perfect match
const result5 = countMissingTags("<app></app>");
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Empty string
const result6 = countMissingTags("");
console.log("Test 6:", result6);
console.log("Expected: 0");
console.log(result6 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 7: Only closing tags
const result7 = countMissingTags("</app></app></app>");
console.log("Test 7:", result7);
console.log("Expected: 3");
console.log(result7 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 8: Only opening tags
const result8 = countMissingTags("<app><app><app>");
console.log("Test 8:", result8);
console.log("Expected: 3");
console.log(result8 === 3 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: HashMap + Min Tracking");
console.log("Key Insight: Track BOTH negative dips AND final balance");
console.log(
  "Formula: missingTags = minOpeningsNeeded + (finalBalance + minOpeningsNeeded)",
);
console.log("========================================");

/**
 * LEARNING PATH:
 *
 * 1. First attempt: Implement countMissingClosingTags() yourself
 * 2. Run tests: node day1/missing-closing-tags.js
 * 3. If stuck, look at the tutorial solution above
 * 4. Compare with xml-tags.js to understand the difference
 * 5. Practice: Can you solve this in < 20 minutes?
 *
 * WHEN TO USE THIS PATTERN:
 * - Counting unmatched brackets/tags
 * - Simple balance checking (don't care about order)
 * - Simpler than full validation
 *
 * WHEN TO USE XML TAG COUNTING INSTEAD:
 * - Need to validate proper nesting
 * - Need to check tag name matching
 * - Need to count BOTH missing opens AND closes
 */
