# Day 1: Fundamentals + Quick Patterns

This folder contains tutorial implementations of the essential patterns for Toptal prep.

## 📚 Patterns Covered

### 1. Arrays + Hash Map
**File:** [two-sum.js](two-sum.js)
- **Pattern:** Using hash map for O(1) lookups
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)
- **Key Insight:** Store seen values in hash map, check for complement
- **Run:** `node day1/two-sum.js`

### 2. Stack Parsing (Two Variations)

#### 2a. XML Tag Validation
**File:** [xml-tags.js](xml-tags.js)
- **Pattern:** Stack for matching pairs with tag name validation
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)
- **Key Insight:** Stack tracks opening tags, pop when closing tag matches
- **Run:** `node day1/xml-tags.js`

#### 2b. Missing Closing Tags Counter
**File:** [missing-closing-tags.js](missing-closing-tags.js)
- **Pattern:** Stack with counter (simplified bracket matching)
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Key Insight:** Track opening tags with counter, decrement on closing tags
- **Difference:** Simpler than XML validation - only counts missing closings
- **Run:** `node day1/missing-closing-tags.js`

### 3. Prefix Sums
**File:** [prefix-sums.js](prefix-sums.js)
- **Pattern:** Preprocessing array for range queries
- **Time Complexity:** O(n) preprocessing, O(1) per query
- **Space Complexity:** O(n)
- **Key Insight:** Build cumulative sum array for fast range sum queries
- **Run:** `node day1/prefix-sums.js`

### 4. Binary Gap
**File:** [binary-gap.js](binary-gap.js)
- **Pattern:** Binary representation manipulation
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)
- **Key Insight:** Convert to binary string, track distances between 1s
- **Run:** `node day1/binary-gap.js`

### 5. Triangle Inequality
**File:** [triangle.js](triangle.js)
- **Pattern:** Sorting + geometric property
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)
- **Key Insight:** Sort first, check if A[i] + A[i+1] > A[i+2]
- **Run:** `node day1/triangle.js`

### 6. PermMissingElem + MaxCounters

#### 6a. Permutation Missing Element
**File:** [perm-missing.js](perm-missing.js)
- **Pattern:** Math formula (sum of first N numbers)
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Key Insight:** Expected sum - actual sum = missing element
- **Run:** `node day1/perm-missing.js`

#### 6b. Max Counters
**File:** [max-counters.js](max-counters.js)
- **Pattern:** Lazy evaluation with max tracking
- **Time Complexity:** O(N + M)
- **Space Complexity:** O(N)
- **Key Insight:** Defer "max counter" operations until the end
- **Run:** `node day1/max-counters.js`

---

## 🎯 Learning Path

For each pattern:

1. **Read** the problem description at the top of the file
2. **Attempt** to implement the function yourself (marked with TODO)
3. **Run tests** to verify your solution
4. **Review** the tutorial solution if stuck
5. **Study** the step-by-step walkthrough
6. **Practice** until you can solve in < 40 minutes

---

## 📊 Pattern Comparison

| Pattern | Difficulty | Key Data Structure | When to Use |
|---------|-----------|-------------------|-------------|
| Two Sum | Easy | Hash Map | Need fast lookups |
| XML Tag Validation | Medium | Stack | Matching pairs with names |
| Missing Closing Tags | Easy | Counter | Simple balance checking |
| Prefix Sums | Easy | Array | Range sum queries |
| Binary Gap | Easy | String | Binary representation |
| Triangle | Easy | Sorting | Geometric properties |
| PermMissingElem | Easy | Math | Find missing in sequence |
| MaxCounters | Medium | Array + Max tracking | Batch operations |

---

## 🔑 Key Differences: XML Tag Validation vs. Missing Closing Tags

Both use stack concepts but solve different problems:

### XML Tag Validation
- **Goal:** Validate proper nesting and tag name matching
- **Returns:** Total tags needed to fix (opens + closes)
- **Example:** `<app><div></app>` → Invalid, returns 2
- **Complexity:** O(n) time, O(n) space
- **Use when:** Need strict validation of structure

### Missing Closing Tags
- **Goal:** Count how many closing tags are missing
- **Returns:** Number of unmatched opening tags
- **Example:** `<app><div></app>` → Returns 1 (missing `</div>`)
- **Complexity:** O(n) time, O(1) space
- **Use when:** Only need to count imbalance (simpler)

**Key Insight:** Missing Closing Tags doesn't care about tag names or nesting order - just counts imbalance!

---

## ✅ Practice Checklist

- [ ] Can implement all patterns from memory
- [ ] Understand time/space complexity of each
- [ ] Know when to use each pattern
- [ ] Handle edge cases (empty input, single element, etc.)
- [ ] Complete each pattern in < 40 minutes

---

## 🚀 Next Steps

After mastering Day 1 patterns:
1. Move to [Day 2](../day2) for harder patterns (MEX, BFS, Combinatorics)
2. Complete [Day 3](../day3) mock tests
3. Review [progress.md](../progress.md) to track mastery

---

**Remember:** These are building blocks! Master them before moving to harder patterns.

Good luck! 💪
