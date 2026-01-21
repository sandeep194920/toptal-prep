/**
 * MaxCounters (Lazy Propagation)
 *
 * Problem: N counters, initially all 0. Operations:
 * - increase(X): counter X += 1
 * - max_counter: all counters = current max
 *
 * Difficulty: Medium
 * Pattern: Lazy propagation optimization
 * Time Complexity: O(N + M)
 * Space Complexity: O(N)
 *
 * Key Insight: Don't apply max_counter immediately. Track "lastUpdate" value,
 * apply lazily only when needed.
 *
 * Example:
 * Input: N=5, A=[3,4,4,6,1,4,4]
 * Output: [3,2,2,4,2]
 * (operation 6 is max_counter when N+1 is seen)
 */

function maxCounters(N, A) {
  // TODO: Implement
  // Hint: Track currentMax and lastUpdate
  // Only apply lastUpdate when accessing a counter

}

// ============ TEST CASES ============

console.log("Running MaxCounters tests...\n");

// Test 1: Basic case
const result1 = maxCounters(5, [3, 4, 4, 6, 1, 4, 4]);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [3, 2, 2, 4, 2]");
console.log(JSON.stringify(result1) === JSON.stringify([3, 2, 2, 4, 2]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: No max_counter operations
const result2 = maxCounters(3, [1, 2, 3, 1]);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [2, 1, 1]");
console.log(JSON.stringify(result2) === JSON.stringify([2, 1, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Only max_counter
const result3 = maxCounters(2, [3, 3]);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: [0, 0]");
console.log(JSON.stringify(result3) === JSON.stringify([0, 0]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Single counter
const result4 = maxCounters(1, [1, 2, 1]);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [2]");
console.log(JSON.stringify(result4) === JSON.stringify([2]) ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Lazy propagation! Don't apply max immediately to all counters.");
