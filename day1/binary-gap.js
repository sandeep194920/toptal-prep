/**
 * Binary Gap (Bit Manipulation)
 *
 * Problem: Find longest sequence of zeros in binary representation of N,
 * bounded by ones on both sides.
 *
 * Difficulty: Easy
 * Pattern: String parsing / Bit manipulation
 * Time Complexity: O(log N)
 * Space Complexity: O(log N)
 *
 * Key Insight: Convert to binary string, track gaps between 1s.
 *
 * Example:
 * Input: 9
 * Output: 2
 * Explanation: 9 = 1001 in binary, gap of 2 zeros between 1s
 */

function binaryGap(N) {
  // TODO: Implement
  // Hint: const binary = N.toString(2);
  // Track currentGap and maxGap

}

// ============ TEST CASES ============

console.log("Running Binary Gap tests...\n");

// Test 1: 9 = 1001
const result1 = binaryGap(9);
console.log("Test 1:", result1);
console.log("Expected: 2");
console.log(result1 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: 529 = 1000010001
const result2 = binaryGap(529);
console.log("Test 2:", result2);
console.log("Expected: 4");
console.log(result2 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: 20 = 10100
const result3 = binaryGap(20);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: 15 = 1111 (no gap)
const result4 = binaryGap(15);
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: 32 = 100000 (trailing zeros don't count)
const result5 = binaryGap(32);
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: 1041 = 10000010001
const result6 = binaryGap(1041);
console.log("Test 6:", result6);
console.log("Expected: 5");
console.log(result6 === 5 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Gap must be BOUNDED by 1s on BOTH sides!");
