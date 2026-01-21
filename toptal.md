# Toptal Coding Test - Final 3-Day Preparation Plan

## 🎯 Goal
Pass Toptal's 120-minute coding test (3 problems) on **January 24, 2026** with confidence.

## 📊 Your Current State
- ✅ Strong fundamentals (Striver's DSA sheet + LeetCode experience)
- ❌ NO experience with: graphs, DFS, BFS, DP, trees
- ⏰ Available: 30 hours (10 hours/day × 3 days)

---

## 🔥 Final Pattern List (9 Core Patterns)

Based on analysis of:
- Your actual Toptal problem screenshots
- Real candidate experiences from Medium, GitHub, Reddit
- Confirmed Codility problems from Toptal tests

### Tier 1: CRITICAL (Must Master - 18 hours)
1. **Arrays + Hash Map** - Two Sum (2 hours)
2. **Stack Parsing** - XML Tag Counting (3 hours)
3. **Prefix Sums** - Pollution Filters (2 hours)
4. **MEX (Minimum Excluded)** - Card Flipping Game (4 hours)
5. **BFS + Graph Building** - Tree Distance Counter (4 hours)
6. **Combinatorics** - John's Journey (2 hours)
7. **Binary Gap** - Bit Manipulation (1 hour)

### Tier 2: HIGH PRIORITY (Quick Wins - 3 hours)
8. **Triangle Inequality** - Sorting + Greedy (1 hour)
9. **PermMissingElem** - Math Formula (1 hour)
10. **MaxCounters** - Array Manipulation (1 hour)

### Tier 3: BONUS (If Time Permits)
11. Contains Duplicate (Hash Set)
12. Valid Anagram (Frequency Count)

---

## 📅 Day-by-Day Breakdown (30 Hours Total)

### Day 1: Fundamentals + Quick Patterns (10 hours)

#### **Hour 1-2: Arrays + Hash Map**
**Problem:** Two Sum (LC 1)
```javascript
function twoSum(nums, target) {
    const map = new Map(); // value -> index

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

**Practice:**
- Two Sum (LC 1)
- Contains Duplicate (LC 217)
- Valid Anagram (LC 242)

**Edge Cases:**
- Empty array: `[]`
- No solution: `[1,2,3], target=10`
- Duplicate values: `[3,3], target=6`
- Negative numbers: `[-1,-2,-3], target=-3`

---

#### **Hour 3-5: Stack Parsing**
**Problem:** XML Tag Counting (from your screenshot)

```javascript
function countMissingTags(S) {
    const stack = [];
    let missingClose = 0;

    let i = 0;
    while (i < S.length) {
        if (S[i] === '<') {
            const tagEnd = S.indexOf('>', i);
            if (tagEnd === -1) break;

            const tag = S.substring(i + 1, tagEnd);

            if (tag.startsWith('/')) {
                // Closing tag
                const tagName = tag.substring(1);

                if (stack.length === 0) {
                    missingClose++; // Extra closing → need opening
                } else if (stack[stack.length - 1] === tagName) {
                    stack.pop(); // Match found
                } else {
                    missingClose++; // Mismatched
                }
            } else {
                // Opening tag
                stack.push(tag);
            }

            i = tagEnd + 1;
        } else {
            i++;
        }
    }

    // Remaining opens need closes
    return missingClose + stack.length;
}
```

**Practice:**
- Valid Parentheses (LC 20)
- XML Tag Counting (your screenshot)
- Min Stack (LC 155)

**Edge Cases:**
- Empty string: `""`
- Only opening: `"<app><app>"`
- Only closing: `"</app></app>"`
- Nested valid: `"<app><div></div></app>"`
- Mismatched: `"<app></div>"`

---

#### **Hour 6-7: Prefix Sums** ⭐ NEW
**Problem:** Pollution Filters (from your screenshot)

```javascript
function solution(P, S) {
    const n = P.length;

    // Build prefix sums
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + P[i];
    }

    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        // Pollution after filter i = sum from (i+1) to end
        const pollutionAfter = prefix[n] - prefix[i + 1];

        // Cost = half of remaining pollution
        totalCost += Math.ceil(pollutionAfter / 2.0);
    }

    return totalCost;
}
```

**Practice:**
- Range Sum Query (LC 303)
- Subarray Sum Equals K (LC 560)

**Edge Cases:**
- Empty array: `[]`
- Single element: `[5]`
- All zeros: `[0,0,0]`
- Large numbers (overflow check)

---

#### **Hour 8: Binary Gap** ⭐ NEW (Confirmed Toptal Problem)
**Problem:** Longest sequence of zeros in binary representation

```javascript
function binaryGap(N) {
    const binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;
    let inGap = false;

    for (let char of binary) {
        if (char === '1') {
            if (inGap) {
                maxGap = Math.max(maxGap, currentGap);
            }
            inGap = true;
            currentGap = 0;
        } else if (inGap) {
            currentGap++;
        }
    }

    return maxGap;
}
```

**Test Cases:**
```javascript
console.log(binaryGap(9));    // 2 (binary: 1001)
console.log(binaryGap(529));  // 4 (binary: 1000010001)
console.log(binaryGap(20));   // 1 (binary: 10100)
console.log(binaryGap(15));   // 0 (binary: 1111)
console.log(binaryGap(32));   // 0 (binary: 100000)
```

---

#### **Hour 9: Triangle Inequality** ⭐ NEW (Confirmed Toptal Problem)

```javascript
function triangle(A) {
    if (A.length < 3) return 0;

    A.sort((a, b) => a - b);

    // For sorted array: check if A[i] + A[i+1] > A[i+2]
    for (let i = 0; i < A.length - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1; // Triangle exists
        }
    }

    return 0;
}
```

**Test Cases:**
```javascript
console.log(triangle([10, 2, 5, 1, 8, 20])); // 1
console.log(triangle([10, 50, 5, 1]));       // 0
console.log(triangle([1, 2, 3]));            // 0 (1+2=3, not >)
console.log(triangle([3, 4, 5]));            // 1
```

---

#### **Hour 10: PermMissingElem + MaxCounters** ⭐ NEW (Confirmed Toptal)

**PermMissingElem:**
```javascript
function permMissingElem(A) {
    const n = A.length;
    const expectedSum = (n + 1) * (n + 2) / 2;
    const actualSum = A.reduce((sum, val) => sum + val, 0);
    return expectedSum - actualSum;
}
```

**MaxCounters (if time):**
```javascript
function maxCounters(N, A) {
    const counters = new Array(N).fill(0);
    let currentMax = 0;
    let lastUpdate = 0;

    for (let operation of A) {
        if (operation >= 1 && operation <= N) {
            const idx = operation - 1;
            counters[idx] = Math.max(counters[idx], lastUpdate);
            counters[idx]++;
            currentMax = Math.max(currentMax, counters[idx]);
        } else if (operation === N + 1) {
            lastUpdate = currentMax;
        }
    }

    for (let i = 0; i < N; i++) {
        counters[i] = Math.max(counters[i], lastUpdate);
    }

    return counters;
}
```

---

### Day 2: Master 3 Hard Patterns (10 hours)

#### **Hour 1-4: MEX (Minimum Excluded Value)**
**Problem:** Card Flipping Game (from your screenshot)

```javascript
function findMEX(arr) {
    const set = new Set(arr);
    let mex = 1;

    while (set.has(mex)) {
        mex++;
    }

    return mex;
}

function solution(A) {
    // A[i] = number on card i (1-indexed in problem, 0-indexed in array)

    let operations = 0;

    while (true) {
        const mex = findMEX(A);

        // If MEX > n, all numbers 1..n are present → done
        if (mex > A.length) {
            break;
        }

        // Flip card at position (mex - 1) to value mex
        A[mex - 1] = mex;
        operations++;
    }

    return operations;
}
```

**Practice Problems:**
1. First Missing Positive (LC 41) - EXACT same pattern as MEX
2. Missing Number (LC 268)
3. Find All Numbers Disappeared (LC 448)

**Drill Exercises:**
```javascript
// Test MEX function thoroughly
console.log(findMEX([2, 3, 4])); // 1
console.log(findMEX([1, 3, 4])); // 2
console.log(findMEX([1, 2, 3])); // 4
console.log(findMEX([1, 2, 4, 5])); // 3
console.log(findMEX([])); // 1
console.log(findMEX([1])); // 2
console.log(findMEX([2])); // 1

// Full solution tests
console.log(solution([3, 2, 1])); // 0 (already sorted)
console.log(solution([2, 1, 4])); // 1 (flip index 2)
console.log(solution([4, 2, 1, 3])); // 0
console.log(solution([5, 4, 3, 2, 1])); // 0
```

**Edge Cases Checklist:**
- [ ] Empty array
- [ ] Single element
- [ ] Already sorted (all 1..n present)
- [ ] Reverse sorted
- [ ] Large gaps (e.g., [1, 100, 1000])
- [ ] All same numbers
- [ ] Maximum constraints (array size limits)

---

#### **Hour 5-8: BFS + Graph Building**
**Problem:** Tree Distance Counter (from your screenshot)

```javascript
function solution(T) {
    const n = T.length;
    const graph = {};
    let capital = -1;

    // Step 1: Build graph from array representation
    for (let i = 0; i < n; i++) {
        if (T[i] === i) {
            capital = i; // Self-loop = capital city
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

        for (let neighbor of (graph[node] || [])) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distances.set(neighbor, dist + 1);
                queue.push(neighbor);
            }
        }
    }

    // Step 3: Count cities at each distance
    const result = new Array(n - 1).fill(0);
    for (let [node, dist] of distances) {
        if (dist > 0) {
            result[dist - 1]++;
        }
    }

    return result;
}
```

**Practice Problems:**
1. Number of Islands (LC 200) - BFS fundamentals
2. Clone Graph (LC 133) - Graph building
3. Course Schedule (LC 207) - Graph traversal

**BFS Template to Memorize:**
```javascript
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const node = queue.shift();

        // Process node here

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

**Edge Cases:**
- [ ] Single city (n=1, capital only)
- [ ] Two cities (n=2)
- [ ] Linear chain (1→2→3→4...)
- [ ] Star graph (all cities connect to capital)
- [ ] Disconnected components (shouldn't happen per problem)
- [ ] Large n (performance check)

---

#### **Hour 9-10: Combinatorics**
**Problem:** John's Journey (from your screenshot)

```javascript
function solution(A, B, C) {
    // Count unique cities in each country
    const countA = new Set(A).size;
    const countB = new Set(B).size;
    const countC = new Set(C).size;

    // Multiplication principle: choices multiply
    const result = countA * countB * countC;

    // Check overflow
    const MAX = 1000000000;
    if (result > MAX) return -1;

    return result;
}
```

**Practice:**
- Unique Paths (LC 62)
- Climbing Stairs (LC 70)

**Edge Cases:**
```javascript
console.log(solution([2, 1, 1], [4, 4], [5, 6])); // 2×1×2 = 4
console.log(solution([1], [2], [3])); // 1
console.log(solution([1,1,1], [2,2,2], [3,3,3])); // 1×1×1 = 1
console.log(solution([], [1], [2])); // 0 (empty array)

// Overflow check
const largeA = new Array(1000).fill(0).map((_, i) => i);
const largeB = new Array(1000).fill(0).map((_, i) => i);
const largeC = new Array(1000).fill(0).map((_, i) => i);
console.log(solution(largeA, largeB, largeC)); // Should return -1
```

---

### Day 3: Mock Tests + Final Prep (10 hours)

#### **Hour 1-2: Mock Test #1 (120 minutes)**
**Simulate Real Test Conditions:**
1. Set timer for exactly 120 minutes
2. Choose 3 problems:
   - Easy: PermMissingElem
   - Medium: Pollution Filters (Prefix Sums)
   - Hard: Tree Distance Counter (BFS)
3. No looking at solutions until timer ends
4. Submit code even if incomplete

**Grading Rubric:**
- All test cases pass: ✅ PASS
- 1-2 edge cases fail: ⚠️ PARTIAL (review edge cases)
- Core logic wrong: ❌ FAIL (re-study pattern)

---

#### **Hour 3-4: Review Mock #1**
**Post-Mortem Analysis:**
1. Which edge cases did you miss?
2. Time spent per problem (should be ~40 min each)
3. Which pattern needs more practice?
4. Write down mistakes in notebook

**Common Mistakes to Check:**
- [ ] Integer overflow (use BigInt if needed)
- [ ] Off-by-one errors (0-indexed vs 1-indexed)
- [ ] Null/empty array handling
- [ ] Forgot to return a value
- [ ] Wrong variable initialization

---

#### **Hour 5-6: Mock Test #2 (120 minutes)**
**New Problem Set:**
1. Easy: Binary Gap
2. Medium: Card Flipping (MEX)
3. Hard: Triangle + MaxCounters combined

---

#### **Hour 7-8: Review Mock #2 + Pattern Flashcards**

**Create Pattern Flashcards:**
```
Front: "Find first missing positive integer"
Back: MEX pattern - use Set, while loop starting at 1

Front: "Count cities at each distance from capital"
Back: BFS + Graph building - queue, visited set, distance map

Front: "Check if triangle exists in array"
Back: Sort + greedy check (A[i] + A[i+1] > A[i+2])

Front: "Range sum query"
Back: Prefix sums - precompute cumulative array
```

---

#### **Hour 9-10: Mock Test #3 + Final Prep**
**Final Mock Test:**
1. Easy: XML Tag Counting
2. Medium: John's Journey (Combinatorics)
3. Hard: Pollution Filters

**After Test:**
- Review ALL 9 patterns one last time
- Write down edge case checklist
- Get good sleep (8 hours minimum!)

---

## 🎯 Test Day Strategy (January 24, 2026)

### Pre-Test (30 minutes before):
- [ ] Review pattern flashcards (10 min)
- [ ] Review edge case checklist (5 min)
- [ ] Do 5 deep breaths (calm nerves)
- [ ] Open blank file, test environment

### During Test (120 minutes):

**Minutes 0-5: Read ALL Problems**
- Skim all 3 problems
- Identify patterns (MEX? BFS? Stack?)
- Choose solving order (easy → medium → hard)

**Minutes 5-45: Problem 1 (Easy)**
- Write brute force first (even if slow)
- Add edge case handling
- Test with examples
- Optimize if time permits
- **Goal: 100% test cases pass**

**Minutes 45-85: Problem 2 (Medium)**
- Identify pattern from your 9 patterns
- Write algorithm outline in comments
- Implement step-by-step
- Test thoroughly
- **Goal: 80%+ test cases pass**

**Minutes 85-120: Problem 3 (Hard)**
- Don't panic if stuck
- Write brute force solution
- Handle edge cases
- Partial credit better than nothing
- **Goal: 50%+ test cases pass**

**Last 5 Minutes:**
- Review all code for typos
- Check return statements
- Verify variable names match

---

## 📝 Universal Edge Cases Checklist

**ALWAYS Test These (for ANY problem):**
```javascript
// 1. Empty input
console.log(solution([])); // or "", or null

// 2. Single element
console.log(solution([1])); // or "a", or single node

// 3. Two elements (minimum valid)
console.log(solution([1, 2]));

// 4. All same values
console.log(solution([5, 5, 5, 5]));

// 5. Sorted ascending
console.log(solution([1, 2, 3, 4, 5]));

// 6. Sorted descending
console.log(solution([5, 4, 3, 2, 1]));

// 7. Negative numbers
console.log(solution([-5, -1, 0, 3]));

// 8. Large numbers (overflow)
console.log(solution([1000000000, 1000000000]));

// 9. Duplicates
console.log(solution([3, 1, 3, 2, 3]));

// 10. Maximum constraints
const maxN = new Array(100000).fill(0).map((_, i) => i);
console.log(solution(maxN));
```

---

## 🎓 Key Takeaways from Real Toptal Candidates

1. **"Focus on edge cases"** - Codility tests EVERYTHING (null, overflow, empty)
2. **"Don't need graphs/trees/DP"** - Arrays, strings, sorting, search are 90% of test
3. **"Solve 70-150 easy problems"** - Breadth matters more than depth
4. **"Live coding is 2 easy LeetCode"** - Much easier than timed test
5. **"Time management is critical"** - 40 min per problem, move on if stuck

---

## 📚 Resources

**Codility Lessons (FREE):**
- https://app.codility.com/programmers/lessons/
- Complete: Lessons 1-6 (Time Complexity, Arrays, Prefix Sums, Sorting, Stacks)

**LeetCode Practice (by pattern):**
- Arrays: LC 1, 217, 242, 448
- Stacks: LC 20, 155
- Prefix Sums: LC 303, 560
- BFS: LC 200, 133, 207
- Bit Manipulation: LC 191, 338

**Candidate Experiences:**
- https://souvic.medium.com/how-i-passed-the-toptal-codility-test-32f99f22d758
- https://clevercoder.net/2017/09/04/toptal-passed-interview/
- https://gist.github.com/1st/5278729

---

## ✅ Success Criteria

**You're ready when:**
- [ ] Can solve all 9 patterns in < 40 minutes each
- [ ] Mock test scores: 2/3 problems with 100% test cases
- [ ] Edge case checklist automatic (muscle memory)
- [ ] No pattern takes > 5 minutes to recall template

**On Test Day:**
- [ ] Solve Problem 1 (easy) in 30-40 min with 100% pass
- [ ] Solve Problem 2 (medium) in 35-45 min with 80%+ pass
- [ ] Solve Problem 3 (hard) with partial credit (50%+)

---

## 🚀 Confidence Boosters

**You have advantages:**
1. ✅ Striver's DSA sheet → Strong fundamentals
2. ✅ LeetCode experience → Problem-solving skills
3. ✅ Saw actual Toptal problems → Pattern recognition
4. ✅ 30 hours focused prep → 9 patterns mastered
5. ✅ Codility auto-tests → Immediate feedback

**Remember:**
- Toptal pass rate: ~25% (you're in top 25% with this prep!)
- You only need 2/3 problems fully correct to pass
- Partial credit counts (50% test cases = partial pass)
- Live coding after this is EASIER (2 easy LeetCode problems)

---

**Good luck! You've got this! 💪**
