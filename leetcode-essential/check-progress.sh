#!/bin/bash

# Progress Tracker for LeetCode Essential 23

echo "═══════════════════════════════════════════════════"
echo "   📊 TOPTAL PREP - PROGRESS TRACKER"
echo "═══════════════════════════════════════════════════"
echo ""

# Count completed problems (looking for actual implementations, not just TODO)
completed=0
total=23

echo "🔥 CRITICAL Problems (6 problems):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

for file in lc102-binary-tree-level-order.js lc200-number-of-islands.js lc41-first-missing-positive.js lc94-binary-tree-inorder.js lc112-path-sum.js lc695-max-area-of-island.js; do
  if [ -f "$file" ]; then
    # Check if file has implementation (more than just TODO)
    if grep -q "TODO: Implement" "$file"; then
      echo "[ ] $file"
    else
      echo "[✓] $file"
      ((completed++))
    fi
  fi
done

echo ""
echo "⭐ HIGH Priority Problems (11 problems):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

for file in lc104-max-depth-binary-tree.js lc257-binary-tree-paths.js lc98-validate-bst.js lc217-contains-duplicate.js lc268-missing-number.js lc283-move-zeroes.js lc242-valid-anagram.js lc733-flood-fill.js lc133-clone-graph.js lc323-connected-components.js lc207-course-schedule.js; do
  if [ -f "$file" ]; then
    if grep -q "TODO: Implement" "$file"; then
      echo "[ ] $file"
    else
      echo "[✓] $file"
      ((completed++))
    fi
  fi
done

echo ""
echo "✓ MEDIUM Priority Problems (6 problems):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

for file in lc70-climbing-stairs.js lc62-unique-paths.js lc21-merge-sorted-lists.js lc206-reverse-linked-list.js lc20-valid-parentheses.js lc704-binary-search.js; do
  if [ -f "$file" ]; then
    if grep -q "TODO: Implement" "$file"; then
      echo "[ ] $file"
    else
      echo "[✓] $file"
      ((completed++))
    fi
  fi
done

echo ""
echo "═══════════════════════════════════════════════════"
echo "   Progress: $completed / $total completed"
percentage=$((completed * 100 / total))
echo "   Completion: $percentage%"
echo "═══════════════════════════════════════════════════"
echo ""

if [ $completed -eq 0 ]; then
  echo "🚀 Ready to start! Begin with lc102-binary-tree-level-order.js"
elif [ $completed -lt 6 ]; then
  echo "💪 Keep going! Focus on CRITICAL problems first."
elif [ $completed -lt 17 ]; then
  echo "🔥 Great progress! Continue with HIGH priority problems."
elif [ $completed -lt 23 ]; then
  echo "🌟 Almost there! Finish the remaining MEDIUM problems."
else
  echo "🎉 ALL DONE! Review CRITICAL problems before the test."
fi

echo ""
