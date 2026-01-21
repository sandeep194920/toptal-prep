/**
 * SOLUTION: Pollution Filters
 * Pattern: Prefix Sums
 * Time: O(n), Space: O(n)
 */

function solution(P, S) {
  const n = P.length;
  
  // Build prefix sum array
  // prefix[i] = sum of P[0..i-1]
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + P[i];
  }
  
  let totalCost = 0;
  
  // For each filter position i (0 to n-1)
  for (let i = 0; i < n; i++) {
    // Pollution after filter i = sum from (i+1) to end
    const pollutionAfter = prefix[n] - prefix[i + 1];
    
    // Cost = half of remaining pollution (rounded up)
    const cost = Math.ceil(pollutionAfter / 2.0);
    totalCost += cost;
  }
  
  return totalCost;
}

// Test
console.log(solution([5, 6, 3, 4], [1, 2, 3, 4])); // 27
console.log(solution([1, 1, 1], [1, 2, 3]));       // 3
console.log(solution([10], [1]));                  // 5
console.log(solution([2, 4, 6], [1, 2, 3]));       // 11
console.log(solution([1000000000, 1000000000], [1, 2])); // 1500000000
