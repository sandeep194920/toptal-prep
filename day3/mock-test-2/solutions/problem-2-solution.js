/**
 * SOLUTION: Card Flipping Game (MEX)
 * Pattern: MEX (Minimum Excluded Value)
 * Time: O(n * operations), Space: O(n) for Set
 */

function findMEX(arr) {
  const set = new Set(arr);
  let mex = 1;
  
  while (set.has(mex)) {
    mex++;
  }
  
  return mex;
}

function solution(A) {
  const n = A.length;
  let operations = 0;
  
  while (true) {
    const mex = findMEX(A);
    
    // If MEX > n, all numbers 1..n are present → done
    if (mex > n) {
      break;
    }
    
    // Flip card at position (mex - 1) to show mex
    A[mex - 1] = mex;
    operations++;
  }
  
  return operations;
}

// Test
console.log(solution([3, 2, 1]));       // 0 (already sorted)
console.log(solution([2, 1, 4]));       // 1 (flip index 2)
console.log(solution([4, 2, 1, 3]));    // 0
console.log(solution([5, 4, 3, 2, 1])); // 0
console.log(solution([1, 3, 5, 7]));    // 2
