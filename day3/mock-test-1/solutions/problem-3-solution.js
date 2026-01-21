/**
 * SOLUTION: Tree Distance Counter
 * Pattern: BFS + Graph Building
 * Time: O(n), Space: O(n)
 */

function solution(T) {
  const n = T.length;
  
  // Step 1: Build graph from parent array
  const graph = {};
  let capital = -1;
  
  for (let i = 0; i < n; i++) {
    if (T[i] === i) {
      capital = i; // Found capital (self-loop)
    } else {
      // Create bidirectional edge
      if (!graph[i]) graph[i] = [];
      if (!graph[T[i]]) graph[T[i]] = [];
      graph[i].push(T[i]);
      graph[T[i]].push(i);
    }
  }
  
  // Step 2: BFS from capital to find distances
  const queue = [capital];
  const visited = new Set([capital]);
  const distances = new Map([[capital, 0]]);
  
  while (queue.length > 0) {
    const node = queue.shift();
    const dist = distances.get(node);
    
    // Visit neighbors
    for (let neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        distances.set(neighbor, dist + 1);
        queue.push(neighbor);
      }
    }
  }
  
  // Step 3: Count cities at each distance
  // Find max distance
  let maxDist = 0;
  for (let [node, dist] of distances) {
    if (dist > maxDist) maxDist = dist;
  }
  
  // Count cities at each distance (1 to maxDist)
  const result = new Array(maxDist).fill(0);
  for (let [node, dist] of distances) {
    if (dist > 0) {
      result[dist - 1]++;
    }
  }
  
  return result;
}

// Test
console.log(JSON.stringify(solution([9, 1, 4, 9, 0, 4, 8, 9, 0, 1]))); // [2,3,2,3]
console.log(JSON.stringify(solution([0, 0, 1, 2])));                   // [1,1,1]
console.log(JSON.stringify(solution([0])));                            // []
console.log(JSON.stringify(solution([2, 2, 2, 2, 2])));                // [4]
console.log(JSON.stringify(solution([1, 1])));                         // [1]
