/**
 * MOCK TEST 1 - PROBLEM 3 (Hard)
 * Time Limit: 40 minutes
 * 
 * Problem: Tree Distance Counter
 * 
 * Given an array T where T[i] is the parent of node i, find the number of cities
 * at each distance from the capital (root). Capital is where T[i] == i.
 * 
 * Return an array where result[d-1] = count of cities at distance d from capital.
 * 
 * Example:
 * Input: T = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1]
 * Output: [2, 3, 2, 3]
 * Explanation: T[4] = 4 means node 4 is capital.
 * - Distance 1: 2 cities
 * - Distance 2: 3 cities
 * - Distance 3: 2 cities
 * - Distance 4: 3 cities
 * 
 * Constraints:
 * - N is an integer within the range [1..100,000]
 * - Elements of T are integers within the range [0..N-1]
 * - There is exactly one i such that T[i] = i
 * - T represents a valid tree structure
 */

function solution(T) {
  // TODO: Implement your solution here
  // Hint: Build adjacency list graph from parent array
  // Find capital where T[i] == i
  // Use BFS to calculate distances from capital
  // Count cities at each distance level
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 1 - PROBLEM 3");
console.log("Time Limit: 40 minutes\n");

const result1 = solution([9, 1, 4, 9, 0, 4, 8, 9, 0, 1]);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [2, 3, 2, 3]");
console.log(JSON.stringify(result1) === JSON.stringify([2, 3, 2, 3]) ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution([0, 0, 1, 2]);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [1, 1, 1]");
console.log(JSON.stringify(result2) === JSON.stringify([1, 1, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution([0]);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: []");
console.log(JSON.stringify(result3) === JSON.stringify([]) ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution([2, 2, 2, 2, 2]);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [4]");
console.log(JSON.stringify(result4) === JSON.stringify([4]) ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution([1, 1]);
console.log("Test 5:", JSON.stringify(result5));
console.log("Expected: [1]");
console.log(JSON.stringify(result5) === JSON.stringify([1]) ? "✅ PASS\n" : "❌ FAIL\n");

