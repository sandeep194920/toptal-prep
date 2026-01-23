# Stack Pattern Comparison Guide

This guide compares the three different stack/tag-counting patterns in Day 1.

---

## 📊 Quick Comparison Table

| Feature | Simple Missing Closings | Broken XML Logger | XML Tags (Full Validation) |
|---------|------------------------|-------------------|---------------------------|
| **File** | `missing-closing-tags-simple.js` | `broken-xml-logger.js` | `xml-tags.js` |
| **Difficulty** | ⭐ Easy | ⭐⭐ Medium | ⭐⭐⭐ Hard |
| **Pattern** | Counter | HashMap + Min Tracking | Stack |
| **Space** | O(1) | O(k) tag types | O(n) |
| **Counts** | Missing closings only | Both missing opens & closes | All fixes needed |
| **Extra closings** | ❌ Ignored | ✅ Counted as errors | ✅ Counted as errors |
| **Tag names** | ❌ Not checked | ❌ Not checked | ✅ Must match |
| **Nesting** | ❌ Not validated | ❌ Not validated | ✅ Validated |

---

## 🎯 When to Use Each Pattern

### 1. Simple Missing Closings (`missing-closing-tags-simple.js`)
**Use when:**
- You only care about unclosed opening tags
- Extra closing tags should be ignored
- Simplest bracket matching problem

**Example:**
```javascript
"<app></app></app>" → 0  // Extra closings ignored
"<app><app></app>"  → 1  // 1 missing closing
"</app><app>"       → 1  // Orphan ignored, 1 unclosed
```

**Real-world analogy:**
Checking if all opened file handles are closed. Don't care about duplicate close() calls.

---

### 2. Broken XML Logger (`broken-xml-logger.js`)
**Use when:**
- You need to count ALL broken tags (opens + closes)
- Extra closings ARE errors
- Don't care about tag name matching or nesting order

**Example:**
```javascript
"<app></app></app>" → 2  // 2 extra closings = 2 missing openings
"<app><app></app>"  → 1  // 1 missing closing
"</app><app><app>"  → 3  // 1 orphan + 2 unclosed = 3 total
```

**Real-world analogy:**
Broken logger that drops random tags. Count how many tags total are missing.

---

### 3. XML Tags Full Validation (`xml-tags.js`)
**Use when:**
- Tag names must match (`<app>` needs `</app>`, not `</div>`)
- Nesting order matters (`<a><b></a></b>` is invalid)
- Need complete XML/HTML validation

**Example:**
```javascript
"<app><div></app>"     → Invalid nesting
"<app></app><app>"     → Valid structure, 1 unclosed
"<a><b></b></a>"       → Valid, perfectly matched
```

**Real-world analogy:**
Full HTML/XML parser that validates structure.

---

## 📚 Learning Order (Recommended)

### Step 1: Start Here ✅
**File:** `missing-closing-tags-simple.js`
**Why:** Builds basic intuition with simplest version
**Time:** 20-30 minutes
**Goal:** Understand counter-based bracket matching

### Step 2: Level Up 🚀
**File:** `broken-xml-logger.js`
**Why:** Introduces bidirectional counting
**Time:** 30-45 minutes
**Goal:** Understand min tracking and negative balance handling

### Step 3: Master It 🏆
**File:** `xml-tags.js`
**Why:** Full validation with stack and tag name matching
**Time:** 45-60 minutes
**Goal:** Complete stack-based parsing

---

## 🔍 Key Algorithmic Differences

### Simple Missing Closings
```javascript
let count = 0;
for (tag in tags) {
  if (isOpening) count++;
  else if (count > 0) count--;  // Ignore if count is 0
}
return count;
```

### Broken XML Logger (Bidirectional)
```javascript
let balance = 0;
let minOpeningsNeeded = 0;

for (tag in tags) {
  if (isClosing) {
    balance--;
    if (balance < 0) {
      minOpeningsNeeded = Math.max(minOpeningsNeeded, -balance);
    }
  } else {
    balance++;
  }
}

return minOpeningsNeeded + (balance + minOpeningsNeeded);
```

### XML Tags (Full Validation)
```javascript
let stack = [];
for (tag in tags) {
  if (isOpening) {
    stack.push(tagName);
  } else {
    if (stack.isEmpty() || stack.peek() !== tagName) {
      // Invalid nesting or wrong tag
      errors++;
    } else {
      stack.pop();
    }
  }
}
return errors + stack.length;
```

---

## 💡 Common Pitfalls

### Pitfall 1: Confusing the versions
❌ **Wrong:** Using simple version when extra closings should count
✅ **Right:** Read problem carefully - does it say "ignore" or "count" extras?

### Pitfall 2: Forgetting negative balance
❌ **Wrong:** Just using `Math.abs(finalBalance)` for bidirectional
✅ **Right:** Track min openings needed during scan

### Pitfall 3: Not checking tag names
❌ **Wrong:** Using counter when tag names must match
✅ **Right:** Use stack when `<app>` must close with `</app>`

---

## 🧪 Test Case Comparison

| Input | Simple | Bidirectional | Full Validation |
|-------|--------|---------------|----------------|
| `<app></app>` | 0 | 0 | 0 |
| `<app><app></app>` | 1 | 1 | 1 |
| `<app></app></app>` | 0 ⚠️ | 2 | 2 |
| `</app><app><app>` | 2 ⚠️ | 3 | 3 |
| `<app><div></app>` | N/A | N/A | Invalid ⚠️ |

⚠️ = Key difference between patterns

---

## 🎓 Practice Strategy

1. **Day 1:** Implement `missing-closing-tags-simple.js`
   - Should take 20-30 min
   - Run tests, make sure all pass
   - Understand why extra closings are ignored

2. **Day 1 (later):** Implement `broken-xml-logger.js`
   - Should take 30-45 min
   - Focus on understanding the tricky test case `</app><app><app>` → 3
   - Understand min tracking concept

3. **Day 2:** Review `xml-tags.js`
   - Understand stack-based approach
   - See how tag names are validated

4. **Mock Test Prep:**
   - Practice identifying which pattern a problem needs
   - Common hint: "ignore extras" = Simple version
   - Common hint: "count all broken tags" = Bidirectional

---

## 📝 Quick Decision Flowchart

```
Does problem mention "extra closings"?
│
├─ NO → Are tag names important?
│        │
│        ├─ YES → Use xml-tags.js (full validation)
│        └─ NO  → Use broken-xml-logger.js (bidirectional)
│
└─ YES → Does it say "ignore extra closings"?
         │
         ├─ YES → Use missing-closing-tags-simple.js
         └─ NO  → Use broken-xml-logger.js
```

---

## 🚀 Next Steps

After mastering these three patterns, you should be able to:
- ✅ Identify which pattern a problem needs
- ✅ Implement simple counter-based matching
- ✅ Implement bidirectional counting with min tracking
- ✅ Implement full stack-based validation

**Next Topic:** Move on to other Day 1 patterns (Prefix Sums, Max Counters, etc.)

Good luck! 🎯
