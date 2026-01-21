/**
 * MOCK TEST 1 - PROBLEM 1 (Easy)
 * Time Limit: 40 minutes
 * 
 * Problem: Perm Missing Element
 * 
 * An array A consisting of N different integers is given. The array contains
 * integers in the range [1..(N + 1)], which means that exactly one element is missing.
 * 
 * Your goal is to find that missing element.
 * 
 * Example:
 * A = [2, 3, 1, 5] → return 4
 * A = [1, 2, 3] → return 4
 * 
 * Constraints:
 * - N is an integer within the range [0..100,000]
 * - The elements of A are all distinct
 * - Each element of array A is an integer within the range [1..(N + 1)]
 */

function solution(A) {
  // TODO: Implement your solution here
  // Write your code below this line
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 1 - PROBLEM 1");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([2, 3, 1, 5]);
console.log("Test 1:", result1);
console.log("Expected: 4");
console.log(result1 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([1, 2, 3]);
console.log("Test 2:", result2);
console.log("Expected: 4");
console.log(result2 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([]);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([2]);
console.log("Test 4:", result4);
console.log("Expected: 1");
console.log(result4 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution([1]);
console.log("Test 5:", result5);
console.log("Expected: 2");
console.log(result5 === 2 ? "✅ PASS\n" : "❌ FAIL\n");
