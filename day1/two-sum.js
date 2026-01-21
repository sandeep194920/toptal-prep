/**
 * Two Sum (Hash Map Approach)
 *
 * Problem: Given an array of integers nums and a target, return indices of
 * the two numbers that add up to target. Each input has exactly one solution.
 *
 * Difficulty: Easy
 * Pattern: Hash Map for O(1) lookups
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Insight: Store seen numbers in a map, check for complement (target - current)
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 */

function twoSum(nums, target) {
  // TODO: Implement using hash map
  // Hint: const map = new Map();
  // Check for complement BEFORE adding current number to map

}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running Two Sum tests...\n");

// Test 1: Basic case
const result1 = twoSum([2, 7, 11, 15], 9);
console.log("Test 1:", JSON.stringify(result1));
console.log("Expected: [0, 1]");
console.log(JSON.stringify(result1) === JSON.stringify([0, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 2: Different indices
const result2 = twoSum([3, 2, 4], 6);
console.log("Test 2:", JSON.stringify(result2));
console.log("Expected: [1, 2]");
console.log(JSON.stringify(result2) === JSON.stringify([1, 2]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 3: Same value, different indices
const result3 = twoSum([3, 3], 6);
console.log("Test 3:", JSON.stringify(result3));
console.log("Expected: [0, 1]");
console.log(JSON.stringify(result3) === JSON.stringify([0, 1]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 4: Negative numbers
const result4 = twoSum([-1, -2, -3, -4, -5], -8);
console.log("Test 4:", JSON.stringify(result4));
console.log("Expected: [2, 4]");
console.log(JSON.stringify(result4) === JSON.stringify([2, 4]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 5: Zero in array
const result5 = twoSum([0, 4, 3, 0], 0);
console.log("Test 5:", JSON.stringify(result5));
console.log("Expected: [0, 3]");
console.log(JSON.stringify(result5) === JSON.stringify([0, 3]) ? "✅ PASS\n" : "❌ FAIL\n");

// Test 6: Large numbers
const result6 = twoSum([1000000000, 500000000, 500000000], 1000000000);
console.log("Test 6:", JSON.stringify(result6));
console.log("Expected: [1, 2]");
console.log(JSON.stringify(result6) === JSON.stringify([1, 2]) ? "✅ PASS\n" : "❌ FAIL\n");

console.log("========================================");
console.log("Tip: Check BEFORE adding to map to avoid using same element twice!");
