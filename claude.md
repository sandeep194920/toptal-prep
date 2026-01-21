# Claude Code Practice Guide

This file contains helpful prompts and strategies for using Claude Code to maximize your Toptal prep.

---

## 🎯 How Claude Code Can Help You

**Claude Code is your coding mentor for:**
1. **Debugging** - Finding bugs in your code
2. **Code Review** - Checking if your approach is correct
3. **Edge Cases** - Identifying cases you might have missed
4. **Optimization** - Improving time/space complexity
5. **Explanation** - Understanding why something works

**⚠️ Important Rules:**
- ❌ **DON'T ask for complete solutions** - You won't learn!
- ✅ **DO ask for hints** when stuck for 20+ minutes
- ✅ **DO ask for code review** after implementing
- ✅ **DO ask about edge cases** before finalizing
- ❌ **DON'T use during mock tests** - Simulate real conditions!

---

## 📋 Prompt Templates

### 1. **Debugging Prompt**

When your code fails a test case:

```
I'm solving [Pattern Name] and getting wrong answer on this test case:

Input: [paste input]
Expected: [paste expected output]
Got: [paste actual output]

Here's my code:
[paste your code]

Can you spot the bug? Don't give me the solution, just point me to the bug.
```

**Example:**
```
I'm solving Binary Gap and getting wrong answer on this test case:

Input: 9
Expected: 2
Got: 0

Here's my code:
function binaryGap(N) {
  const binary = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  for (let char of binary) {
    if (char === '1') {
      maxGap = Math.max(maxGap, currentGap);
      currentGap = 0;
    } else {
      currentGap++;
    }
  }

  return maxGap;
}

Can you spot the bug? Don't give me the solution, just point me to the bug.
```

---

### 2. **Approach Verification Prompt**

Before writing code, verify your approach:

```
I'm about to solve [Pattern Name]. Here's my approach:

[Describe your algorithm in plain English]

Time complexity: O(?)
Space complexity: O(?)

Is this approach correct? Any edge cases I should watch out for?
Don't write code for me, just confirm if my approach will work.
```

**Example:**
```
I'm about to solve MEX (Minimum Excluded Value). Here's my approach:

1. Put all array elements into a Set
2. Start from mex = 1
3. While mex exists in Set, increment mex
4. Return mex

Time complexity: O(n)
Space complexity: O(n)

Is this approach correct? Any edge cases I should watch out for?
Don't write code for me, just confirm if my approach will work.
```

---

### 3. **Edge Case Review Prompt**

After implementing, check edge cases:

```
I just solved [Pattern Name]. Here's my code:

[paste your code]

Can you identify any edge cases I might have missed?
List them but don't fix my code - I want to handle them myself.
```

**Example:**
```
I just solved Triangle Inequality. Here's my code:

function triangle(A) {
  if (A.length < 3) return 0;

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] + A[i+1] > A[i+2]) {
      return 1;
    }
  }

  return 0;
}

Can you identify any edge cases I might have missed?
List them but don't fix my code - I want to handle them myself.
```

---

### 4. **Optimization Prompt**

After solving correctly, optimize:

```
My code passes all tests but I think it can be optimized.

Current complexity: O(?)
Code: [paste code]

Is there a more efficient approach? Give me a hint, not the full solution.
```

**Example:**
```
My code passes all tests but I think it can be optimized.

Current complexity: O(n²)
Code:
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

Is there a more efficient approach? Give me a hint, not the full solution.
```

---

### 5. **Understanding Prompt**

When you don't understand a pattern:

```
I'm reading about [Pattern Name] in toptal.md but I don't understand [specific concept].

Can you explain it in simpler terms with an example?
Use a different example than the one in toptal.md.
```

**Example:**
```
I'm reading about BFS + Graph Building in toptal.md but I don't understand how to build a graph from an array representation.

For example, if T = [9, 1, 4, 9, 0, 4, 8, 9, 0, 1], how does this represent a tree?

Can you explain it in simpler terms with an example?
Use a different example than the one in toptal.md.
```

---

### 6. **Code Review Prompt**

After completing a pattern:

```
I just completed [Pattern Name]. Can you review my code for:
1. Correctness
2. Edge case handling
3. Code clarity
4. Time/space complexity

Code:
[paste your code]

Don't rewrite it - just give me feedback on what could be improved.
```

---

### 7. **Stuck on Logic Prompt**

When you're stuck on the core algorithm:

```
I'm trying to solve [Pattern Name] and I'm stuck on this part:

[Explain what you understand so far]

The part I'm stuck on is: [Specific question]

Can you give me a hint about how to approach this? Don't solve it for me.
```

**Example:**
```
I'm trying to solve Tree Distance Counter (BFS + Graph) and I'm stuck on this part:

I understand:
- T[i] points to the parent of node i
- If T[i] == i, it's the capital (root)
- Need to find distances from capital to all nodes

The part I'm stuck on is: How do I convert the parent array into a graph that I can do BFS on?

Can you give me a hint about how to approach this? Don't solve it for me.
```

---

### 8. **Test Case Debugging Prompt**

When one specific test case fails:

```
All my test cases pass except this one:

Input: [paste input]
Expected: [expected]
Got: [your output]

I think the issue is [your hypothesis] but I'm not sure.

Code:
[paste code]

Am I on the right track? What should I check?
```

---

### 9. **Pattern Recognition Prompt**

During mock tests, if you don't recognize the pattern:

```
I'm looking at this problem in mock test:

[Paste problem description]

I can't recognize which pattern this is. Can you give me a hint about:
1. What pattern/algorithm this uses?
2. What's the key insight?

Don't solve it - just help me identify the pattern.
```

---

### 10. **Final Review Prompt**

Before mock test or real test:

```
I'm about to do a mock test. Can you quiz me on:
1. Edge cases checklist
2. Time complexity of each pattern
3. Common bugs to watch out for

Ask me questions - don't just tell me the answers!
```

---

## 🎓 Learning Strategy with Claude Code

### Phase 1: Understanding (1-2 hours per pattern)

1. **Read** toptal.md explanation
2. **Ask** Claude: "Explain [pattern] in your own words with an example"
3. **Verify** approach: "Is this correct? [describe approach]"
4. **Implement** yourself first

### Phase 2: Implementation (1-2 hours per pattern)

1. **Write** code yourself
2. **Test** with provided test cases
3. **Debug** using Claude if stuck >20 min
4. **Review** edge cases with Claude

### Phase 3: Mastery (30 min per pattern)

1. **Optimize** with Claude's hints
2. **Explain** the algorithm to Claude (teaching = learning!)
3. **Create** new test cases
4. **Commit** to git with summary

---

## ⚡ Quick Reference Prompts

**Fast debugging:**
```
Bug in [pattern]: Input [X], Expected [Y], Got [Z]. Code: [paste]. What's wrong?
```

**Fast approach check:**
```
Solving [pattern] with [approach]. Time O(?), Space O(?). Correct?
```

**Fast edge cases:**
```
[Pattern] done. Edge cases I missed? Code: [paste]
```

**Fast explanation:**
```
Don't understand [concept] in [pattern]. Simpler explanation?
```

---

## 🚫 What NOT to Ask Claude

❌ **"Solve this problem for me"**
❌ **"Write the code for Two Sum"**
❌ **"What's the complete solution to MEX?"**
❌ **"Do my mock test for me"**

**Why?** You'll pass Toptal by understanding, not memorizing!

---

## ✅ Example Conversation Flow

**You:** "I'm solving Two Sum. My approach: use hash map to store seen numbers, check for complement. Time O(n), Space O(n). Correct?"

**Claude:** "Yes, correct approach! One thing to watch: make sure you check the map BEFORE adding the current number, to avoid using the same element twice."

**You:** [Implements code]

**You:** "Done! Edge cases I missed? Code: [paste]"

**Claude:** "Looks good! One edge case: what if nums = [3, 3], target = 6? Does your code handle using the same value twice (different indices)?"

**You:** [Tests and finds it works]

**You:** "Works! Can I optimize further or is O(n) already optimal?"

**Claude:** "O(n) time with O(n) space is optimal for this problem. You've nailed it!"

---

## 📊 Progress Tracking with Claude

Ask Claude to review your overall progress:

```
I've completed these patterns: [list]
Still struggling with: [list]

Based on toptal.md, what should I focus on in my remaining time?
Which patterns are most critical for the test?
```

---

## 🎯 Mock Test Strategy with Claude

**Before Mock Test:**
```
Quiz me on edge cases and time complexity for 10 minutes.
Ask me random questions about the 9 patterns.
```

**After Mock Test (NO peeking during!):**
```
I scored [X/3] on mock test. Here are my solutions:
[paste code for all 3]

What mistakes did I make? How can I improve for next mock test?
```

---

## 🔥 Final Tips

1. **Ask specific questions** - "What's wrong?" is too vague
2. **Paste your code** - Claude can't help without seeing it
3. **Mention the pattern** - Context helps Claude give better hints
4. **Request hints, not solutions** - You learn by struggling a bit!
5. **Use during practice, NOT mock tests** - Build real skills

---

**Remember:** Claude Code is your mentor, not your solver. Use it to LEARN, not to CHEAT yourself!

Good luck with your prep! 🚀
