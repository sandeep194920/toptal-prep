/**
 * LeetCode 207 - Course Schedule ✓
 *
 * Difficulty: Medium
 * Pattern: Cycle detection (Topological Sort)
 * Priority: MEDIUM - Classic graph problem
 *
 * Problem:
 * There are numCourses courses labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates you must take course bi before course ai.
 *
 * Return true if you can finish all courses, false otherwise.
 *
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: Take course 0, then course 1.
 *
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: Circular dependency - impossible!
 *
 * Constraints:
 * - 1 <= numCourses <= 2000
 * - 0 <= prerequisites.length <= 5000
 * - prerequisites[i].length == 2
 * - 0 <= ai, bi < numCourses
 * - All pairs are unique
 *
 * Approach:
 * 1. Build directed graph
 * 2. Detect cycle using DFS with color marking
 * 3. If cycle exists, return false
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // TODO: Implement cycle detection
  // Hint: Use DFS with visiting/visited states

}

// ============ TEST CASES ============

console.log("Running Course Schedule tests...\n");

const result1 = canFinish(2, [[1,0]]);
console.log("Test 1:", result1);
console.log("Expected: true");
console.log(result1 === true ? "✅ PASS\n" : "❌ FAIL\n");

const result2 = canFinish(2, [[1,0],[0,1]]);
console.log("Test 2:", result2);
console.log("Expected: false (cycle!)");
console.log(result2 === false ? "✅ PASS\n" : "❌ FAIL\n");

const result3 = canFinish(5, [[1,4],[2,4],[3,1],[3,2]]);
console.log("Test 3:", result3);
console.log("Expected: true");
console.log(result3 === true ? "✅ PASS\n" : "❌ FAIL\n");

const result4 = canFinish(3, [[0,1],[1,2],[2,0]]);
console.log("Test 4:", result4);
console.log("Expected: false (cycle: 0->1->2->0)");
console.log(result4 === false ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Pattern: Cycle detection with DFS!");
console.log("Key: Track visiting vs visited states.");
