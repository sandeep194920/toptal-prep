/**
 * MOCK TEST 2 - PROBLEM 2 (Medium)
 * Time Limit: 40 minutes
 * 
 * Problem: Card Flipping Game (MEX)
 * 
 * You have N cards arranged in a row, each showing a number. Initially, card i shows A[i].
 * You can perform the following operation:
 * - Find the smallest positive integer (starting from 1) that's NOT in the current array (MEX)
 * - If MEX > N, stop (all numbers 1..N are present)
 * - Otherwise, flip card at position (MEX - 1) to show MEX
 * 
 * Count how many operations you perform until all numbers 1..N are present.
 * 
 * Example:
 * A = [3, 2, 1] → 0 operations (already has 1, 2, 3)
 * A = [2, 1, 4] → 1 operation (MEX=3, flip card 2 to show 3)
 * A = [4, 2, 1, 3] → 0 operations
 * 
 * Constraints:
 * - N is an integer within the range [1..100,000]
 * - Each element of A is an integer within the range [1..1,000,000]
 */

function solution(A) {
  // TODO: Implement your solution here
  // Hint: MEX = minimum excluded value (smallest missing positive integer)
  // Use a Set to track what numbers are present
  // Keep finding MEX and flipping cards until MEX > N
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 2 - PROBLEM 2");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([3, 2, 1]);
console.log("Test 1:", result1);
console.log("Expected: 0");
console.log(result1 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([2, 1, 4]);
console.log("Test 2:", result2);
console.log("Expected: 1");
console.log(result2 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([4, 2, 1, 3]);
console.log("Test 3:", result3);
console.log("Expected: 0");
console.log(result3 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([5, 4, 3, 2, 1]);
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution([1, 3, 5, 7]);
console.log("Test 5:", result5);
console.log("Expected: 2");
console.log(result5 === 2 ? "✅ PASS\n" : "❌ FAIL\n");
