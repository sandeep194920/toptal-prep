/**
 * LeetCode 133 - Clone Graph ⭐
 *
 * Difficulty: Medium
 * Pattern: DFS/BFS with HashMap
 * Priority: HIGH - Tests graph understanding
 *
 * Problem:
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 *
 * Each node contains:
 * - val: integer
 * - neighbors: list of references to other nodes
 *
 * Example 1:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 * Explanation: Graph with 4 nodes:
 * 1 -- 2
 * |    |
 * 4 -- 3
 *
 * Example 2:
 * Input: adjList = [[]]
 * Output: [[]]
 * Explanation: Single node with no neighbors
 *
 * Example 3:
 * Input: adjList = []
 * Output: []
 *
 * Constraints:
 * - Number of nodes: [0, 100]
 * - 1 <= Node.val <= 100
 * - No duplicate edges, no self-loops
 * - Graph is connected
 *
 * Time Complexity: O(V + E) where V = nodes, E = edges
 * Space Complexity: O(V) for hash map
 */

// Node definition
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  // TODO: Implement graph cloning
  // Hint: Use HashMap to map original -> clone
  // Hint: DFS/BFS to traverse and clone

}

// ============ TEST CASES ============

// Helper: Build graph from adjacency list
function buildGraph(adjList) {
  if (!adjList.length) return null;

  const nodes = adjList.map((_, i) => new Node(i + 1));

  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map(n => nodes[n - 1]);
  });

  return nodes[0];
}

// Helper: Convert graph to adjacency list
function graphToAdjList(node) {
  if (!node) return [];

  const visited = new Map();
  const adjList = [];

  function dfs(n) {
    if (visited.has(n.val)) return;
    visited.set(n.val, true);
    adjList[n.val - 1] = n.neighbors.map(nb => nb.val);
    n.neighbors.forEach(nb => dfs(nb));
  }

  dfs(node);
  return adjList;
}

console.log("Running Clone Graph tests...\n");

const graph1 = buildGraph([[2,4],[1,3],[2,4],[1,3]]);
const clone1 = cloneGraph(graph1);
console.log("Test 1:", JSON.stringify(graphToAdjList(clone1)));
console.log("Expected: [[2,4],[1,3],[2,4],[1,3]]");

const graph2 = buildGraph([[]]);
const clone2 = cloneGraph(graph2);
console.log("Test 2:", JSON.stringify(graphToAdjList(clone2)));
console.log("Expected: [[]]");

const graph3 = buildGraph([]);
const clone3 = cloneGraph(graph3);
console.log("Test 3:", clone3);
console.log("Expected: null");
