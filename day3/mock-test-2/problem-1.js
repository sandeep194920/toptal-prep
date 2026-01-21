/**
 * MOCK TEST 2 - PROBLEM 1 (Easy)
 * Time Limit: 40 minutes
 * 
 * Problem: Binary Gap
 * 
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 * 
 * Find the longest binary gap. If there's no binary gap, return 0.
 * 
 * Example:
 * N = 9 → binary: 1001 → gap length: 2
 * N = 529 → binary: 1000010001 → gap length: 4
 * N = 20 → binary: 10100 → gap length: 1
 * N = 15 → binary: 1111 → gap length: 0
 * N = 32 → binary: 100000 → gap length: 0 (no closing 1)
 * 
 * Constraints:
 * - N is an integer within the range [1..2,147,483,647]
 */

function solution(N) {
  // TODO: Implement your solution here
  // Hint: Convert to binary, track gaps between 1s
  // Keep track of current gap length and max gap length
  // Only count gaps that are surrounded by 1s on both sides
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 2 - PROBLEM 1");
console.log("Time Limit: 40 minutes\n");

const result1 = solution(9);
console.log("Test 1:", result1);
console.log("Expected: 2");
console.log(result1 === 2 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution(529);
console.log("Test 2:", result2);
console.log("Expected: 4");
console.log(result2 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution(20);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution(15);
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution(32);
console.log("Test 5:", result5);
console.log("Expected: 0");
console.log(result5 === 0 ? "✅ PASS\n" : "❌ FAIL\n");
