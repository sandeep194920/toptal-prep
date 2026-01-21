/**
 * MOCK TEST 3 - PROBLEM 2 (Medium)
 * Time Limit: 40 minutes
 * 
 * Problem: MaxCounters
 * 
 * You are given N counters, initially set to 0, and you have two possible operations:
 * - increase(X) − counter X is increased by 1,
 * - max counter − all counters are set to the maximum value of any counter.
 * 
 * A non-empty array A of M integers is given. This array represents consecutive operations:
 * - if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
 * - if A[K] = N + 1 then operation K is max counter.
 * 
 * Return the values of counters after all operations.
 * 
 * Example:
 * A = [3, 4, 4, 6, 1, 4, 4], N = 5
 * Operations:
 * (0, 0, 0, 0, 0) → increase(3) → (0, 0, 1, 0, 0)
 * (0, 0, 1, 0, 0) → increase(4) → (0, 0, 1, 1, 0)
 * (0, 0, 1, 1, 0) → increase(4) → (0, 0, 1, 2, 0)
 * (0, 0, 1, 2, 0) → max counter → (2, 2, 2, 2, 2)
 * (2, 2, 2, 2, 2) → increase(1) → (3, 2, 2, 2, 2)
 * (3, 2, 2, 2, 2) → increase(4) → (3, 2, 2, 3, 2)
 * (3, 2, 2, 3, 2) → increase(4) → (3, 2, 2, 4, 2)
 * Return: [3, 2, 2, 4, 2]
 * 
 * Constraints:
 * - N and M are integers within the range [1..100,000]
 * - Each element of array A is an integer within the range [1..N + 1]
 */

function solution(N, A) {
  // TODO: Implement your solution here
  // Hint: Use lazy propagation to optimize max counter operations
  // Keep track of the current max and the last max counter value
  // Don't actually set all counters to max every time - update lazily
  
}

// ============ TEST CASES ============

console.log("MOCK TEST 3 - PROBLEM 2");
console.log("Time Limit: 40 minutes\n");

const result1 = solution(5, [3, 4, 4, 6, 1, 4, 4]);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected:", JSON.stringify([3, 2, 2, 4, 2]));
console.log(JSON.stringify(result1) === JSON.stringify([3, 2, 2, 4, 2]) ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = solution(1, [1]);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected:", JSON.stringify([1]));
console.log(JSON.stringify(result2) === JSON.stringify([1]) ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = solution(3, [2, 1, 1, 4, 3]);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected:", JSON.stringify([2, 2, 2]));
console.log(JSON.stringify(result3) === JSON.stringify([2, 2, 2]) ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = solution(5, [1, 2, 3, 4, 5]);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected:", JSON.stringify([1, 1, 1, 1, 1]));
console.log(JSON.stringify(result4) === JSON.stringify([1, 1, 1, 1, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

const result5 = solution(2, [1, 3, 2, 3, 1]);
console.log("Test 5:", JSON.stringify(result5));
console.log("Expected:", JSON.stringify([2, 2]));
console.log(JSON.stringify(result5) === JSON.stringify([2, 2]) ? "✅ PASS\n" : "❌ FAIL\n");
