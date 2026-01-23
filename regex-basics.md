# Regex Basics - Guided Learning for Coding Interviews

A practical guide to Regular Expressions for algorithm problems and string manipulation.

---

## Table of Contents
1. [Why Learn Regex?](#why-learn-regex)
2. [Regex Syntax Fundamentals](#regex-syntax-fundamentals)
3. [JavaScript Regex Methods](#javascript-regex-methods)
4. [Common Patterns Cheat Sheet](#common-patterns-cheat-sheet)
5. [Practical Examples](#practical-examples)
6. [Interview Problem Patterns](#interview-problem-patterns)
7. [Practice Exercises](#practice-exercises)
8. [When to Use Regex vs Loops](#when-to-use-regex-vs-loops)

---

## Why Learn Regex?

**What Regex Is Good For:**
- Extracting patterns from text (emails, phone numbers, tags)
- Validating input format (is this a valid email?)
- Quick search and replace operations
- Parsing structured text (HTML, logs, CSV)

**What Regex Is NOT Good For:**
- Parsing nested structures (use a proper parser)
- Complex state machines (use loops)
- When readability matters more than brevity

**Interview Reality:**
- Most coding interviews don't require advanced regex
- Know the basics for quick string manipulation
- Character-by-character loops are often clearer under pressure

---

## Regex Syntax Fundamentals

### 1. Literal Characters

Match exact characters:

```javascript
/hello/          // Matches "hello" exactly
/cat/            // Matches "cat" in "catch"
/123/            // Matches "123"

// Example
"hello world".match(/hello/)    // ["hello"]
"catch the cat".match(/cat/)    // ["cat"] (first match only)
```

**Try it:**
```javascript
"The price is $50".match(/50/)  // ["50"]
```

---

### 2. Character Classes `[ ]`

Match ANY ONE character from a set:

```javascript
/[abc]/          // Matches 'a' OR 'b' OR 'c'
/[0-9]/          // Matches any digit (0 to 9)
/[a-z]/          // Matches any lowercase letter
/[A-Z]/          // Matches any uppercase letter
/[a-zA-Z]/       // Matches any letter (upper or lower)
/[0-9a-f]/       // Matches hexadecimal digit

// Example
"a1b2c3".match(/[0-9]/g)        // ["1", "2", "3"]
"Hello".match(/[a-z]/g)         // ["e", "l", "l", "o"]
```

**Try it:**
```javascript
"Mix123".match(/[a-z]/g)        // ["i", "x"]
"Mix123".match(/[A-Z]/g)        // ["M"]
"Mix123".match(/[0-9]/g)        // ["1", "2", "3"]
```

---

### 3. Negated Character Classes `[^ ]`

Match any character EXCEPT those listed:

```javascript
/[^abc]/         // Matches anything EXCEPT 'a', 'b', 'c'
/[^0-9]/         // Matches anything EXCEPT digits
/[^a-z]/         // Matches anything EXCEPT lowercase letters

// Example
"a1b2c3".match(/[^0-9]/g)       // ["a", "b", "c"]
"Hello!".match(/[^a-z]/g)       // ["H", "!"]
```

**Try it:**
```javascript
"<app>".match(/[^<>]/g)         // ["a", "p", "p"] (not < or >)
```

---

### 4. Quantifiers (How Many?)

Control how many times a pattern repeats:

```javascript
/a*/             // 0 or more 'a's
/a+/             // 1 or more 'a's (at least one)
/a?/             // 0 or 1 'a' (optional)
/a{3}/           // Exactly 3 'a's
/a{2,5}/         // Between 2 and 5 'a's
/a{2,}/          // 2 or more 'a's

// Examples
"aaabaa".match(/a+/g)           // ["aaa", "aa"] (groups of a's)
"aaabaa".match(/a*/g)           // ["aaa", "", "aa", "", ""] (includes empty)
"aaabaa".match(/a?/g)           // ["a", "a", "a", "", "a", "a", ""]
"aaabaa".match(/a{2}/g)         // ["aa", "aa"] (exactly 2)
"aaabaa".match(/a{2,}/g)        // ["aaa", "aa"] (2 or more)
```

**Common Combinations:**
```javascript
/\d+/            // One or more digits
/\w*/            // Zero or more word characters
/[a-z]{3}/       // Exactly 3 lowercase letters
```

**Try it:**
```javascript
"hello123world456".match(/\d+/g)    // ["123", "456"]
"aaa bb c".match(/[a-z]+/g)         // ["aaa", "bb", "c"]
```

---

### 5. Shorthand Character Classes

Common patterns have shortcuts:

```javascript
/\d/             // Digit: [0-9]
/\D/             // Non-digit: [^0-9]
/\w/             // Word character: [a-zA-Z0-9_]
/\W/             // Non-word character: [^a-zA-Z0-9_]
/\s/             // Whitespace: [ \t\n\r] (space, tab, newline)
/\S/             // Non-whitespace: [^ \t\n\r]
/./              // Any character except newline

// Examples
"Age: 25".match(/\d+/g)         // ["25"]
"hello_world123".match(/\w+/g) // ["hello_world123"]
"a b c".match(/\S+/g)           // ["a", "b", "c"] (non-whitespace)
"a b c".match(/\s+/g)           // [" ", " "] (whitespace)
```

**Try it:**
```javascript
"Email: user@example.com".match(/\w+/g)
// ["Email", "user", "example", "com"]

"Price: $50.99".match(/\d+/g)
// ["50", "99"]
```

---

### 6. Anchors (Position Matching)

Match at specific positions:

```javascript
/^hello/         // Starts with "hello"
/world$/         // Ends with "world"
/^exact$/        // Exactly "exact" (whole string)

// Examples
"hello world".match(/^hello/)   // ["hello"] ✅
"say hello".match(/^hello/)     // null ❌
"hello world".match(/world$/)   // ["world"] ✅
"world peace".match(/world$/)   // null ❌
```

**Try it:**
```javascript
/^[0-9]+$/.test("12345")        // true (all digits)
/^[0-9]+$/.test("123abc")       // false (has letters)
```

---

### 7. Flags (Modifiers)

Change how regex behaves:

```javascript
/pattern/g       // Global: find ALL matches (not just first)
/pattern/i       // Case-insensitive
/pattern/m       // Multiline: ^ and $ match line breaks
/pattern/gi      // Combine flags

// Examples
"Cat cat CAT".match(/cat/)      // ["Cat"] (first match, case-sensitive)
"Cat cat CAT".match(/cat/i)     // ["Cat"] (first match, case-insensitive)
"Cat cat CAT".match(/cat/g)     // ["cat"] (all matches, case-sensitive)
"Cat cat CAT".match(/cat/gi)    // ["Cat", "cat", "CAT"] (all, case-insensitive)
```

**Try it:**
```javascript
"abc ABC aBc".match(/abc/gi)    // ["abc", "ABC", "aBc"]
```

---

### 8. Escaping Special Characters

Special characters need `\` to match literally:

```javascript
// Special characters: . * + ? ^ $ { } [ ] ( ) | \

/\./             // Literal dot (not "any character")
/\*/             // Literal asterisk (not "0 or more")
/\?/             // Literal question mark (not "optional")
/\\/             // Literal backslash
/\[/             // Literal opening bracket
/\(/             // Literal opening parenthesis

// Examples
"file.txt".match(/\.txt$/)      // [".txt"]
"Cost: $5".match(/\$/g)         // ["$"]
"What?".match(/\?/)             // ["?"]
```

**Try it:**
```javascript
"192.168.1.1".match(/\d+\.\d+\.\d+\.\d+/)
// ["192.168.1.1"] (IP address pattern)
```

---

### 9. Alternation (OR) `|`

Match one pattern OR another:

```javascript
/cat|dog/        // Matches "cat" OR "dog"
/red|blue|green/ // Matches "red" OR "blue" OR "green"

// Examples
"I have a cat".match(/cat|dog/)     // ["cat"]
"I have a dog".match(/cat|dog/)     // ["dog"]
"red car".match(/red|blue|green/)   // ["red"]
```

**Try it:**
```javascript
"<app></app>".match(/<\/?app>/g)    // ["<app>", "</app>"]
```

---

### 10. Grouping `( )`

Group patterns together:

```javascript
/(abc)+/         // One or more "abc" sequences
/(cat|dog)s/     // "cats" or "dogs"

// Examples
"abcabc".match(/(abc)+/)            // ["abcabc"]
"cats and dogs".match(/(cat|dog)s/g) // ["cats", "dogs"]
```

**Capturing Groups** (extract matched parts):
```javascript
const match = "user@example.com".match(/(\w+)@(\w+)\.(\w+)/);
// match[0]: "user@example.com" (full match)
// match[1]: "user" (first group)
// match[2]: "example" (second group)
// match[3]: "com" (third group)
```

**Try it:**
```javascript
const email = "john@gmail.com";
const [full, user, domain, ext] = email.match(/(\w+)@(\w+)\.(\w+)/);
console.log(user);    // "john"
console.log(domain);  // "gmail"
console.log(ext);     // "com"
```

---

## JavaScript Regex Methods

### 1. `string.match(regex)`

Find matches in a string:

```javascript
// Without 'g' flag: returns first match with details
const str = "Price: $50, Discount: $10";
const result = str.match(/\$(\d+)/);
// ["$50", "50", index: 7, input: "...", groups: undefined]

// With 'g' flag: returns all matches
const all = str.match(/\$(\d+)/g);
// ["$50", "$10"]
```

**Returns:**
- Array of matches (with `g` flag)
- Match object with groups (without `g` flag)
- `null` if no match

**Try it:**
```javascript
"<a><b></b>".match(/<[^>]+>/g)      // ["<a>", "<b>", "</b>"]
"test123abc456".match(/\d+/g)       // ["123", "456"]
```

---

### 2. `regex.test(string)`

Check if pattern exists (returns true/false):

```javascript
/\d+/.test("abc123")                // true
/\d+/.test("abcdef")                // false

// Useful for validation
function isEmail(str) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(str);
}

isEmail("user@example.com")         // true
isEmail("invalid-email")            // false
```

**Try it:**
```javascript
/^[a-z]+$/.test("hello")            // true (all lowercase)
/^[a-z]+$/.test("Hello")            // false (has uppercase)
```

---

### 3. `string.replace(regex, replacement)`

Replace matches with new text:

```javascript
"hello world".replace(/world/, "there")
// "hello there"

// With 'g' flag: replace all
"cat cat cat".replace(/cat/g, "dog")
// "dog dog dog"

// With function
"hello world".replace(/\w+/g, match => match.toUpperCase())
// "HELLO WORLD"

// Remove all tags
"<app>Hello</app>".replace(/<\/?[^>]+>/g, "")
// "Hello"
```

**Try it:**
```javascript
// Remove all digits
"abc123def456".replace(/\d+/g, "")  // "abcdef"

// Replace spaces with dashes
"hello world".replace(/\s+/g, "-")  // "hello-world"
```

---

### 4. `string.split(regex)`

Split string by pattern:

```javascript
"a,b,c".split(/,/)                  // ["a", "b", "c"]
"a1b2c3".split(/\d/)                // ["a", "b", "c", ""]
"one  two   three".split(/\s+/)     // ["one", "two", "three"]

// Split by tags
"<a>text</a><b>more</b>".split(/<\/?[^>]+>/)
// ["", "text", "", "more", ""]
```

**Try it:**
```javascript
"word1,word2;word3".split(/[,;]/)   // ["word1", "word2", "word3"]
```

---

### 5. `string.search(regex)`

Find index of first match:

```javascript
"hello world".search(/world/)       // 6
"hello world".search(/goodbye/)     // -1 (not found)

// Case-insensitive search
"Hello World".search(/world/i)      // 6
```

---

### 6. `string.matchAll(regex)` (Modern JS)

Get all matches with groups:

```javascript
const str = "user1@gmail.com, user2@yahoo.com";
const matches = [...str.matchAll(/(\w+)@(\w+)\.com/g)];

// matches[0]: ["user1@gmail.com", "user1", "gmail", ...]
// matches[1]: ["user2@yahoo.com", "user2", "yahoo", ...]

for (const match of matches) {
  console.log(`User: ${match[1]}, Domain: ${match[2]}`);
}
// User: user1, Domain: gmail
// User: user2, Domain: yahoo
```

---

## Common Patterns Cheat Sheet

### Email Validation (Simple)
```javascript
/^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Example
/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test("user@example.com")  // true
```

### Phone Number (US Format)
```javascript
/^\d{3}-\d{3}-\d{4}$/        // 123-456-7890
/^\(\d{3}\) \d{3}-\d{4}$/    // (123) 456-7890

// Example
/^\d{3}-\d{3}-\d{4}$/.test("123-456-7890")  // true
```

### URL Validation (Simple)
```javascript
/^https?:\/\/[^\s]+$/

// Example
/^https?:\/\/[^\s]+$/.test("https://example.com")  // true
```

### Extract All Numbers
```javascript
/\d+/g

// Example
"Total: 100, Tax: 15, Final: 115".match(/\d+/g)
// ["100", "15", "115"]
```

### Extract All Words
```javascript
/\w+/g

// Example
"Hello, world! How are you?".match(/\w+/g)
// ["Hello", "world", "How", "are", "you"]
```

### Remove Whitespace
```javascript
/\s+/g

// Example
"  hello   world  ".replace(/\s+/g, " ").trim()
// "hello world"
```

### Extract HTML/XML Tags
```javascript
/<\/?[^>]+>/g

// Example
"<div>Hello</div>".match(/<\/?[^>]+>/g)
// ["<div>", "</div>"]
```

### Match Opening Tags Only
```javascript
/<[^/][^>]*>/g

// Example
"<a><b></b></a>".match(/<[^/][^>]*>/g)
// ["<a>", "<b>"]
```

### Match Closing Tags Only
```javascript
/<\/[^>]+>/g

// Example
"<a><b></b></a>".match(/<\/[^>]+>/g)
// ["</b>", "</a>"]
```

### Check if String is Numeric
```javascript
/^\d+$/

// Example
/^\d+$/.test("12345")   // true
/^\d+$/.test("123ab")   // false
```

### Check if String is Alphabetic
```javascript
/^[a-zA-Z]+$/

// Example
/^[a-zA-Z]+$/.test("Hello")   // true
/^[a-zA-Z]+$/.test("Hello123") // false
```

### Extract Hashtags
```javascript
/#\w+/g

// Example
"Check out #coding and #javascript!".match(/#\w+/g)
// ["#coding", "#javascript"]
```

### Extract Mentions (@username)
```javascript
/@\w+/g

// Example
"Hey @john and @jane!".match(/@\w+/g)
// ["@john", "@jane"]
```

---

## Practical Examples

### Example 1: Count Missing Closing Tags (Your Problem!)

```javascript
function countMissingClosingTags(S) {
  // Extract all tags
  const tags = S.match(/<\/?[^>]*>/g) || [];

  let openCount = 0;
  for (let tag of tags) {
    if (tag.startsWith('</')) {
      if (openCount > 0) openCount--;
    } else {
      openCount++;
    }
  }
  return openCount;
}

// Test
countMissingClosingTags("<a><b></b>")  // 1 (missing </a>)
```

**Regex breakdown:**
- `<` - Match opening bracket
- `\/?` - Optional forward slash (for closing tags)
- `[^>]*` - Any characters except `>` (tag name/attributes)
- `>` - Match closing bracket
- `g` - Find all matches

---

### Example 2: Validate Password Strength

```javascript
function isStrongPassword(pwd) {
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 digit
  const hasLength = pwd.length >= 8;
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const hasDigit = /\d/.test(pwd);

  return hasLength && hasUpper && hasLower && hasDigit;
}

// Test
isStrongPassword("Abc12345")   // true
isStrongPassword("abc12345")   // false (no uppercase)
```

---

### Example 3: Extract Domain from Email

```javascript
function getDomain(email) {
  const match = email.match(/@([^@]+)$/);
  return match ? match[1] : null;
}

// Test
getDomain("user@example.com")     // "example.com"
getDomain("admin@mail.google.com") // "mail.google.com"
```

**Regex breakdown:**
- `@` - Literal @ symbol
- `([^@]+)` - Capture 1+ non-@ characters (domain)
- `$` - End of string

---

### Example 4: Clean HTML Tags

```javascript
function stripHTML(html) {
  return html.replace(/<\/?[^>]+>/g, '');
}

// Test
stripHTML("<p>Hello <b>world</b>!</p>")  // "Hello world!"
```

---

### Example 5: Format Phone Number

```javascript
function formatPhone(digits) {
  // Remove all non-digits
  const cleaned = digits.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return digits; // Return original if invalid
}

// Test
formatPhone("1234567890")        // "(123) 456-7890"
formatPhone("123-456-7890")      // "(123) 456-7890"
```

---

### Example 6: Extract URLs from Text

```javascript
function extractURLs(text) {
  return text.match(/https?:\/\/[^\s]+/g) || [];
}

// Test
extractURLs("Visit https://example.com and http://test.com")
// ["https://example.com", "http://test.com"]
```

---

### Example 7: Camel Case to Snake Case

```javascript
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
}

// Test
toSnakeCase("getUserById")   // "get_user_by_id"
toSnakeCase("firstName")     // "first_name"
```

---

### Example 8: Count Words in String

```javascript
function countWords(str) {
  const words = str.match(/\b\w+\b/g);
  return words ? words.length : 0;
}

// Test
countWords("Hello, world! How are you?")  // 5
```

**Regex breakdown:**
- `\b` - Word boundary (start/end of word)
- `\w+` - One or more word characters
- `\b` - Word boundary

---

## Interview Problem Patterns

### Pattern 1: Validate Input Format

**Problem:** Check if string matches a pattern

```javascript
// Valid hex color code?
function isHexColor(str) {
  return /^#[0-9a-fA-F]{6}$/.test(str);
}

isHexColor("#FF5733")   // true
isHexColor("#XYZ123")   // false
```

---

### Pattern 2: Extract Information

**Problem:** Pull specific data from text

```javascript
// Extract all dates (MM/DD/YYYY)
function extractDates(text) {
  return text.match(/\d{2}\/\d{2}\/\d{4}/g) || [];
}

extractDates("Born on 05/15/1990, married on 06/20/2015")
// ["05/15/1990", "06/20/2015"]
```

---

### Pattern 3: Clean/Sanitize Input

**Problem:** Remove unwanted characters

```javascript
// Remove all special characters except alphanumeric and spaces
function sanitize(str) {
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

sanitize("Hello, world! #2023")  // "Hello world 2023"
```

---

### Pattern 4: Find and Replace

**Problem:** Transform text based on pattern

```javascript
// Censor profanity (replace with ***)
function censor(text) {
  const badWords = ['bad', 'ugly', 'hate'];
  const pattern = new RegExp(badWords.join('|'), 'gi');
  return text.replace(pattern, '***');
}

censor("This is bad and UGLY")  // "This is *** and ***"
```

---

### Pattern 5: Parse Structured Data

**Problem:** Extract key-value pairs

```javascript
// Parse "key=value" pairs
function parseParams(str) {
  const params = {};
  const matches = str.matchAll(/(\w+)=(\w+)/g);

  for (const [, key, value] of matches) {
    params[key] = value;
  }

  return params;
}

parseParams("name=John&age=30&city=NYC")
// { name: "John", age: "30", city: "NYC" }
```

---

## Practice Exercises

### Easy Level

**Exercise 1:** Extract all digits from a string
```javascript
// Input: "abc123def456"
// Output: ["123", "456"]

// Your solution:
function extractDigits(str) {
  // TODO: Use regex to extract all digit sequences
}

// Answer:
function extractDigits(str) {
  return str.match(/\d+/g) || [];
}
```

---

**Exercise 2:** Check if string contains only letters
```javascript
// Input: "hello"
// Output: true

// Input: "hello123"
// Output: false

// Your solution:
function isAlphabetic(str) {
  // TODO
}

// Answer:
function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}
```

---

**Exercise 3:** Replace all spaces with dashes
```javascript
// Input: "hello world foo bar"
// Output: "hello-world-foo-bar"

// Your solution:
function spacesToDashes(str) {
  // TODO
}

// Answer:
function spacesToDashes(str) {
  return str.replace(/\s+/g, '-');
}
```

---

### Medium Level

**Exercise 4:** Extract hashtags from tweet
```javascript
// Input: "Loving #javascript and #coding today!"
// Output: ["javascript", "coding"] (without #)

// Your solution:
function extractHashtags(tweet) {
  // TODO
}

// Answer:
function extractHashtags(tweet) {
  const matches = tweet.match(/#(\w+)/g) || [];
  return matches.map(tag => tag.slice(1)); // Remove #
}
```

---

**Exercise 5:** Validate email (simple)
```javascript
// Valid: "user@example.com"
// Invalid: "user@", "@example.com", "user.example.com"

// Your solution:
function isValidEmail(email) {
  // TODO
}

// Answer:
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

---

**Exercise 6:** Count vowels in a string
```javascript
// Input: "hello world"
// Output: 3 (e, o, o)

// Your solution:
function countVowels(str) {
  // TODO
}

// Answer:
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}
```

---

### Hard Level

**Exercise 7:** Extract all XML/HTML tag names (no duplicates)
```javascript
// Input: "<div><span>Hello</span></div><div>World</div>"
// Output: ["div", "span"]

// Your solution:
function extractTagNames(html) {
  // TODO
}

// Answer:
function extractTagNames(html) {
  const tags = html.match(/<\/?(\w+)[^>]*>/g) || [];
  const names = tags.map(tag => {
    const match = tag.match(/<\/?(\w+)/);
    return match ? match[1] : null;
  }).filter(Boolean);
  return [...new Set(names)]; // Remove duplicates
}
```

---

**Exercise 8:** Parse CSV line (handle quoted values)
```javascript
// Input: 'John,"Doe, Jr.",30,NYC'
// Output: ["John", "Doe, Jr.", "30", "NYC"]

// Your solution:
function parseCSV(line) {
  // TODO: Handle commas inside quotes
}

// Answer:
function parseCSV(line) {
  const regex = /("(?:[^"]|"")*"|[^,]+)/g;
  const matches = line.match(regex) || [];
  return matches.map(val => val.replace(/^"|"$/g, ''));
}
```

---

**Exercise 9:** Mask credit card (show last 4 digits)
```javascript
// Input: "1234-5678-9012-3456"
// Output: "****-****-****-3456"

// Your solution:
function maskCard(card) {
  // TODO
}

// Answer:
function maskCard(card) {
  return card.replace(/\d(?=\d{4})/g, '*');
}
// Explanation: \d matches digit, (?=\d{4}) ensures 4 digits follow (lookahead)
```

---

## When to Use Regex vs Loops

### Use Regex When:
✅ Extracting patterns (emails, URLs, tags)
✅ Validating input format
✅ Quick search and replace
✅ Parsing structured text
✅ You know the pattern well

### Use Loops When:
✅ Complex state tracking needed
✅ Performance is critical (tight loops)
✅ Under time pressure (easier to debug)
✅ Pattern is very simple (like counting characters)
✅ Nested structures (use proper parser)

### For Your Toptal Test:

**Tag Counting Problem:**
- ✅ **Character-by-character loop** (your solution)
  - Easier to debug under pressure
  - More intuitive to trace through
  - Same O(n) complexity

- ⚠️ **Regex approach** (alternative)
  - Cleaner code
  - But more to debug if syntax is wrong
  - Good to know as backup

**General Strategy:**
1. **Default to loops** for core algorithm logic
2. **Use regex** for quick string manipulation
3. **Know both** so you can choose based on problem

---

## Regex Tools & Resources

### Online Testers (Practice!)
- **Regex101** (https://regex101.com) - Best for learning, explains matches
- **RegexR** (https://regexr.com) - Visual regex tester

### Quick Reference
- **MDN Regex Guide** - Comprehensive JavaScript regex docs
- **Regexper** - Visualize regex as railroad diagrams

### Practice Sites
- **LeetCode** - Filter for "String" problems
- **HackerRank** - Regex challenges section

---

## Summary & Key Takeaways

### Must-Know Basics
1. **Character classes:** `[abc]`, `[^abc]`, `[a-z]`
2. **Quantifiers:** `*`, `+`, `?`, `{n}`, `{n,m}`
3. **Shortcuts:** `\d`, `\w`, `\s`, `.`
4. **Anchors:** `^`, `$`
5. **Flags:** `g`, `i`
6. **Escape:** `\.`, `\*`, `\?`, etc.

### Most Useful Methods
1. **`match()`** - Find patterns
2. **`test()`** - Validate
3. **`replace()`** - Transform
4. **`split()`** - Parse

### Interview Strategy
1. Know when regex helps vs complicates
2. Practice common patterns (emails, numbers, tags)
3. Keep a cheat sheet handy
4. When in doubt, use loops (easier to debug)

### For Toptal Prep
- Your character-by-character solution is perfect!
- Regex is a nice-to-know alternative
- Focus on mastering the 9 core patterns in toptal.md
- Use regex for quick string cleanup/validation

---

**Next Steps:**
1. Try all practice exercises above
2. Test yourself on Regex101
3. Move on to next Toptal pattern
4. Come back to this guide when you need string manipulation!

Good luck! 🚀
