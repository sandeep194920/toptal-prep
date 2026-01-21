# How to Write and Test Your Code

## Quick Start

1. **Navigate to the pattern you want to practice:**
   ```bash
   cd day1  # or day2, or day3/mock-test-1, etc.
   ```

2. **Open the JavaScript file:**
   ```bash
   # Example: Practice Two Sum
   code two-sum.js  # or use your preferred editor
   ```

3. **Write your solution:**
   - Find the function stub (e.g., `function twoSum(nums, target)`)
   - Implement your algorithm
   - Don't modify the test cases at the bottom

4. **Run the tests:**
   ```bash
   node two-sum.js
   ```

5. **Check the output:**
   - ✅ All tests pass → Move to next pattern
   - ❌ Tests fail → Debug and fix your code

## File Structure

```
toptal-prep/
├── day1/              # Day 1 patterns (7 files)
│   ├── two-sum.js
│   ├── xml-tags.js
│   ├── prefix-sums.js
│   ├── binary-gap.js
│   ├── triangle.js
│   ├── perm-missing.js
│   └── max-counters.js
├── day2/              # Day 2 patterns (3 files)
│   ├── mex.js
│   ├── bfs-graph.js
│   └── combinatorics.js
├── day3/              # Day 3 mock tests
│   ├── mock-test-1/
│   ├── mock-test-2/
│   └── mock-test-3/
└── utils/             # Helper utilities
    └── test-runner.js
```

## Writing Your Code

Each file has this structure:

```javascript
/**
 * Problem: [Description]
 * Difficulty: Easy/Medium/Hard
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

function solution(input) {
  // TODO: Write your code here

}

// ============ TEST CASES ============
// Don't modify below this line

console.log("Running tests...\n");

// Test 1
console.log("Test 1:", solution([2, 7, 11, 15], 9));
// Expected: [0, 1]

// ... more tests
```

**Your job:**
1. Read the problem description (top comment)
2. Implement the `solution()` function
3. Run `node filename.js` to test
4. Fix bugs until all tests pass

## Testing Your Code

### Option 1: Individual File Testing (Recommended)

```bash
# Test one pattern at a time
node day1/two-sum.js
node day1/xml-tags.js
# etc.
```

**Benefits:**
- Fast feedback
- Easy to debug
- Focus on one problem at a time

### Option 2: Batch Testing (Optional)

```bash
# Test all Day 1 patterns
cd day1
for file in *.js; do
  echo "Testing $file..."
  node "$file"
  echo "---"
done
```

### Option 3: Use the Test Runner (Advanced)

```bash
# Run all tests in a directory
node utils/test-runner.js day1
node utils/test-runner.js day2
```

## Understanding Test Output

### ✅ Success Example:
```
Running tests...

Test 1: [0, 1]
✅ PASS

Test 2: [1, 2]
✅ PASS

All tests passed!
```

### ❌ Failure Example:
```
Running tests...

Test 1: [0, 1]
✅ PASS

Test 2: undefined
❌ FAIL - Expected: [1, 2], Got: undefined

Fix your code and try again.
```

## Edge Case Checklist

**ALWAYS test these before submitting:**

```javascript
// 1. Empty input
solution([])

// 2. Single element
solution([1])

// 3. Two elements (minimum valid)
solution([1, 2])

// 4. All same values
solution([5, 5, 5, 5])

// 5. Sorted ascending
solution([1, 2, 3, 4, 5])

// 6. Sorted descending
solution([5, 4, 3, 2, 1])

// 7. Negative numbers
solution([-5, -1, 0, 3])

// 8. Large numbers (overflow check)
solution([1000000000, 1000000000])

// 9. Duplicates
solution([3, 1, 3, 2, 3])

// 10. Maximum constraints
// Create array of size 100,000
```

## Mock Test Day Strategy (Day 3)

Each mock test simulates the real Toptal test:

1. **Set timer for 120 minutes** (use phone timer or alarm)

2. **Open the 3 problems:**
   ```bash
   cd day3/mock-test-1
   ls *.js  # You'll see problem-1.js, problem-2.js, problem-3.js
   ```

3. **Solve in order** (Easy → Medium → Hard):
   - Problem 1: ~40 minutes
   - Problem 2: ~40 minutes
   - Problem 3: ~40 minutes

4. **Submit even if incomplete** (partial credit counts)

5. **After timer ends:**
   - Review solutions in `solutions/` folder
   - Check your mistakes
   - Write notes in `notes.md`

## Git Workflow (Track Your Progress)

```bash
# After completing a pattern
git add day1/two-sum.js
git commit -m "Solved Two Sum - O(n) hash map approach"

# After completing a day
git add day1/
git commit -m "Day 1 complete - 7/7 patterns mastered"

# Before mock test
git add day3/mock-test-1/
git commit -m "Mock Test 1 - Score: 2/3 problems correct"
```

**Benefits:**
- Track your progress over 3 days
- See your commit history as motivation
- Revert to previous solutions if needed

## Common Debugging Tips

### 1. **Console.log Everything**
```javascript
function solution(nums, target) {
  console.log("Input:", nums, target);

  for (let i = 0; i < nums.length; i++) {
    console.log("i:", i, "nums[i]:", nums[i]);
    // ...
  }
}
```

### 2. **Check Your Return Statement**
```javascript
// ❌ WRONG - Returns nothing
function solution(nums) {
  let result = [];
  // ... logic
  // Missing return!
}

// ✅ CORRECT
function solution(nums) {
  let result = [];
  // ... logic
  return result;
}
```

### 3. **Off-by-One Errors**
```javascript
// ❌ WRONG - Misses last element
for (let i = 0; i < nums.length - 1; i++) { }

// ✅ CORRECT
for (let i = 0; i < nums.length; i++) { }
```

### 4. **Index vs Value Confusion**
```javascript
// ❌ WRONG - Returns values instead of indices
return [nums[i], nums[j]];

// ✅ CORRECT - Returns indices
return [i, j];
```

## Time Management Tips

**Day 1-2: Pattern Practice**
- Spend 1-2 hours per pattern
- Don't rush - understand WHY it works
- If stuck for >30 minutes, check toptal.md hints

**Day 3: Mock Tests**
- Strict 120-minute timer
- Move on if stuck (partial credit > no credit)
- Last 5 minutes: Review for typos

## When to Ask Claude Code for Help

**Good times to ask:**
- After you've tried for 20+ minutes
- When you have a specific bug ("Why is my loop infinite?")
- To verify your approach before coding
- To review edge cases you might have missed

**Don't ask:**
- Before trying yourself first
- For complete solutions (you won't learn!)
- During mock tests (simulate real conditions)

**Example prompts:**
```
"I'm getting wrong answer on this test case: [1, 2, 3], target = 10.
Here's my code: [paste code]. What's wrong?"

"Does this approach handle the edge case of empty array correctly?"

"I implemented binary gap but it's returning 0 for input 9.
Expected: 2 (binary: 1001). Can you spot my bug?"
```

## Progress Tracking

Create a checklist in `progress.md`:

```markdown
# Day 1
- [x] Two Sum
- [x] XML Tags
- [ ] Prefix Sums
- [ ] Binary Gap
- [ ] Triangle
- [ ] Perm Missing
- [ ] Max Counters

# Day 2
- [ ] MEX
- [ ] BFS + Graph
- [ ] Combinatorics

# Day 3
- [ ] Mock Test 1 (Score: ?/3)
- [ ] Mock Test 2 (Score: ?/3)
- [ ] Mock Test 3 (Score: ?/3)
```

Check boxes as you complete each pattern!

## Final Checklist Before Test Day

- [ ] All 9 core patterns completed
- [ ] All mock tests scored 2/3 or better
- [ ] Edge case checklist memorized
- [ ] Git commits show 30+ hours of practice
- [ ] Read toptal.md test day strategy section
- [ ] Get 8 hours of sleep night before!

---

**Good luck! You've got this! 💪**

If you need help, ask Claude Code in this repo using the prompts in `claude.md`.
