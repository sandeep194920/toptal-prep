# ⚡ QUICK REFERENCE - Patterns Cheat Sheet

Use this as a quick reminder while solving problems.

---

## 🌳 TREE PATTERNS

### BFS (Level Order)
```javascript
function bfs(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
```

### DFS (Inorder, Preorder, Postorder)
```javascript
// Inorder: Left -> Root -> Right
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
  return result;
}

// Preorder: Root -> Left -> Right
function preorder(root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorder(root.left, result);
  preorder(root.right, result);
  return result;
}

// Postorder: Left -> Right -> Root
function postorder(root, result = []) {
  if (!root) return result;
  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.val);
  return result;
}
```

---

## 🗺️ GRAPH PATTERNS

### DFS on 2D Grid (Islands)
```javascript
function dfs(grid, row, col) {
  // Bounds check
  if (row < 0 || row >= grid.length ||
      col < 0 || col >= grid[0].length) {
    return;
  }

  // Check if water or visited
  if (grid[row][col] === '0') return;

  // Mark as visited
  grid[row][col] = '0';

  // Explore 4 directions
  dfs(grid, row + 1, col); // down
  dfs(grid, row - 1, col); // up
  dfs(grid, row, col + 1); // right
  dfs(grid, row, col - 1); // left
}
```

### DFS with Count (Max Area)
```javascript
function dfs(grid, row, col) {
  // Bounds check
  if (row < 0 || row >= grid.length ||
      col < 0 || col >= grid[0].length ||
      grid[row][col] === 0) {
    return 0;
  }

  // Mark visited
  grid[row][col] = 0;

  // Count this cell + all connected
  return 1 +
    dfs(grid, row + 1, col) +
    dfs(grid, row - 1, col) +
    dfs(grid, row, col + 1) +
    dfs(grid, row, col - 1);
}
```

### Graph Building from Edges
```javascript
function buildGraph(n, edges) {
  const graph = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u); // For undirected
  }

  return graph;
}
```

---

## 🔢 ARRAY PATTERNS

### Two Pointers
```javascript
function twoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Process
    if (condition) {
      left++;
    } else {
      right--;
    }
  }
}
```

### MEX (First Missing Positive)
```javascript
function firstMissingPositive(nums) {
  const n = nums.length;

  // Place each number at index num-1
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n &&
           nums[nums[i] - 1] !== nums[i]) {
      // Swap
      const correctIdx = nums[i] - 1;
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    }
  }

  // Find first missing
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
```

### Hash Map (Two Sum)
```javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
```

---

## 🔗 LINKED LIST PATTERNS

### Reverse List
```javascript
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

### Merge Two Lists
```javascript
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return dummy.next;
}
```

---

## 📚 STACK PATTERNS

### Valid Parentheses
```javascript
function isValid(s) {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };

  for (const char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (pairs[top] !== char) return false;
    }
  }

  return stack.length === 0;
}
```

---

## 🔍 SEARCH PATTERNS

### Binary Search
```javascript
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```

---

## 📊 DP PATTERNS

### Fibonacci (Climbing Stairs)
```javascript
function climbStairs(n) {
  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
```

### Grid Paths (Unique Paths)
```javascript
function uniquePaths(m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
}
```

---

## ⏱️ COMPLEXITY CHEAT SHEET

| Pattern | Time | Space |
|---------|------|-------|
| Tree DFS | O(n) | O(h) |
| Tree BFS | O(n) | O(w) |
| Graph DFS/BFS | O(V + E) | O(V) |
| Two Pointers | O(n) | O(1) |
| Hash Map | O(n) | O(n) |
| Binary Search | O(log n) | O(1) |
| Sorting | O(n log n) | O(1) or O(n) |

Where:
- n = number of nodes/elements
- h = height of tree
- w = max width of tree
- V = vertices, E = edges

---

## 🚨 COMMON EDGE CASES

**Trees:**
- [ ] Empty tree (null root)
- [ ] Single node
- [ ] Skewed tree (all left or all right)
- [ ] Negative values

**Arrays:**
- [ ] Empty array
- [ ] Single element
- [ ] All same elements
- [ ] Negative numbers
- [ ] Duplicates

**Graphs:**
- [ ] Disconnected graph
- [ ] Single node
- [ ] Cycle detection
- [ ] Self-loops (usually not allowed)

**Strings:**
- [ ] Empty string
- [ ] Single character
- [ ] All same character
- [ ] Special characters

---

## 💡 DEBUGGING TIPS

1. **Print intermediate values**
   ```javascript
   console.log('At node:', node.val);
   console.log('Queue state:', queue.map(n => n.val));
   ```

2. **Check bounds carefully**
   - Off-by-one errors
   - Array length vs last index

3. **Watch for mutation**
   - Are you accidentally modifying input?
   - Does problem require in-place modification?

4. **Test incrementally**
   - Test with single node first
   - Then small examples
   - Then complex cases

---

Keep this reference handy while solving! 🚀
