/**
 * John's Journey (Combinatorics)
 *
 * Problem: John wants to visit cities in 3 different countries (A, B, C).
 * He wants to visit exactly one city from each country.
 * Given arrays A, B, C where each array contains city IDs he can visit,
 * count how many distinct routes he can take (ignoring order).
 *
 * Difficulty: Medium
 * Pattern: Multiplication principle (combinatorics)
 * Time Complexity: O(|A| + |B| + |C|)
 * Space Complexity: O(1)
 *
 * Key Insight: Use multiplication principle - if you have m choices for first,
 * n choices for second, p choices for third, total = m × n × p.
 * But we need UNIQUE cities per country (use Set to count).
 *
 * Example:
 * Input: A = [2, 1, 1], B = [4, 4], C = [5, 6]
 * Output: 4
 * Explanation: Unique cities: A has {1, 2} (2 choices), B has {4} (1 choice),
 *              C has {5, 6} (2 choices). Total = 2 × 1 × 2 = 4 routes.
 */

function solution(A, B, C) {
  // TODO: Implement Combinatorics
  // Step 1: Count unique cities in each country
  // Hint: const uniqueA = new Set(A).size;

  // Step 2: Multiply unique counts
  // Hint: result = uniqueA * uniqueB * uniqueC;

  // Step 3: Check for overflow (result > 1,000,000,000 → return -1)

  const result = new Set(A).size * new Set(B).size * new Set(C).size;

  if (result > 1000000000) return -1;

  return result;
}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running John's Journey tests...\n");

// Test 1: Example from problem
const result1 = solution([2, 1, 1], [4, 4], [5, 6]);
console.log("Test 1:", result1);
console.log("Expected: 4");
console.log(result1 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: All unique cities
const result2 = solution([1, 2, 3], [4, 5], [6]);
console.log("Test 2:", result2);
console.log("Expected: 6");
console.log(result2 === 6 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: All same cities in one country
const result3 = solution([1, 1, 1], [2], [3]);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Large numbers (overflow check)
const largeA = Array.from({ length: 10000 }, (_, i) => i);
const largeB = Array.from({ length: 10000 }, (_, i) => i);
const largeC = Array.from({ length: 10000 }, (_, i) => i);
const result4 = solution(largeA, largeB, largeC);
console.log("Test 4:", result4);
console.log("Expected: -1 (overflow)");
console.log(result4 === -1 ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Single city per country
const result5 = solution([1], [2], [3]);
console.log("Test 5:", result5);
console.log("Expected: 1");
console.log(result5 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log(
  "Tip: Multiplication principle! Unique choices in each country multiply.",
);
