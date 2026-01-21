/**
 * MOCK TEST 3 - PROBLEM 3 (Hard)
 * Time Limit: 40 minutes
 * 
 * Problem: Combinatorics - John's Journey
 * 
 * John is planning a journey through 3 countries (A, B, C). He can visit multiple cities in each country.
 * Given three arrays:
 * - A: Cities in country A
 * - B: Cities in country B
 * - C: Cities in country C
 * 
 * John wants to choose exactly one city from each country to visit.
 * However, he doesn't want to visit the SAME city number in different countries.
 * (For example, if he visits city 5 in country A, he cannot visit city 5 in country B or C)
 * 
 * Return the number of different journeys John can plan, or -1 if the result exceeds 1,000,000,000.
 * 
 * Example:
 * A = [2, 1, 1], B = [4, 4], C = [5, 6]
 * Unique cities: A has 2 unique (1, 2), B has 1 unique (4), C has 2 unique (5, 6)
 * Total journeys = 2 × 1 × 2 = 4
 * 
 * Constraints:
 * - Arrays can be empty
 * - Array lengths within [0..10,000]
 * - City numbers within [1..1,000,000,000]
 */

function solution(A, B, C) {
  // TODO: Implement your solution here
  // Hint: Count unique cities in each country (use Set)
  // Total journeys = uniqueA × uniqueB × uniqueC (multiplication principle)
  // Handle edge cases: empty arrays, overflow (> 1,000,000,000)
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 3 - PROBLEM 3");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([2, 1, 1], [4, 4], [5, 6]);
console.log("Test 1:", result1);
console.log("Expected: 4");
console.log(result1 === 4 ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([1], [2], [3]);
console.log("Test 2:", result2);
console.log("Expected: 1");
console.log(result2 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([1, 1, 1], [2, 2, 2], [3, 3, 3]);
console.log("Test 3:", result3);
console.log("Expected: 1");
console.log(result3 === 1 ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([], [1], [2]);
console.log("Test 4:", result4);
console.log("Expected: 0");
console.log(result4 === 0 ? "✅ PASS\n" : "❌ FAIL\n");

// Large test - should overflow and return -1
const largeA = new Array(1000).fill(0).map((_, i) => i);
const largeB = new Array(1000).fill(0).map((_, i) => i);
const largeC = new Array(1000).fill(0).map((_, i) => i);
const result5 = solution(largeA, largeB, largeC);
console.log("Test 5:", result5);
console.log("Expected: -1");
console.log(result5 === -1 ? "✅ PASS\n" : "❌ FAIL\n");
