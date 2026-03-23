# Usability Audit - Color & Accessibility

## Color Contrast Analysis

### Dark Theme Issues

**Critical Issues:**
1. **--text3: #3D4568 on --bg: #07080F**
   - Used for: tertiary text, labels, placeholders
   - Estimated ratio: ~2.5:1 (FAILS WCAG AA - needs 4.5:1)
   - Impact: Low readability for labels like "Jump to", metadata, etc.

2. **--text2: #8890B0 on --bg: #07080F**
   - Used for: secondary text, descriptions
   - Estimated ratio: ~6:1 (PASSES but could be better)
   - Impact: Acceptable but may strain eyes over long reading

**Moderate Issues:**
3. **--tag-text: #A5B4FC on --tag-bg: rgba(99,102,241,.12)**
   - Light text on semi-transparent indigo background
   - May have insufficient contrast depending on what's behind it

4. **Nav back button text: --text3**
   - "All work" link uses text3 which is too dim

### Light Theme Issues

**Critical Issues:**
1. **--text3: #9098B8 on --bg: #F5F5FC**
   - Used for: tertiary text, labels
   - Estimated ratio: ~2.8:1 (FAILS WCAG AA)
   - Impact: Poor readability for small labels

**Moderate Issues:**
2. **--text2: #5C6080 on --bg: #F5F5FC**
   - Estimated ratio: ~5.5:1 (PASSES but borderline)
   - Used extensively for body text - should be darker

## Interactive Element Visibility

**Issues Found:**
1. **Theme toggle button** uses --text3 (too dim in both themes)
2. **Quick index chips** in default state use --text2 (could be more prominent)
3. **Tab navigation** inactive state uses --text3 (very hard to see)
4. **Footer social links** use --text3 (hard to discover)

## Recommended Fixes

### Dark Theme
```css
--text2: #A0A8D0  /* was #8890B0 - increase brightness */
--text3: #5B6490  /* was #3D4568 - much brighter for visibility */
```

### Light Theme
```css
--text2: #4A5070  /* was #5C6080 - darker for better contrast */
--text3: #7A82A8  /* was #9098B8 - darker for legibility */
```

### Additional Fixes
- Update inactive tab color to use --text2 instead of --text3
- Update theme button initial color to --text2
- Update nav-back button to use --text2
- Consider adding hover states with better contrast

## Color Blindness Considerations

**Current Status:** Good
- Accent color (#6366F1 indigo) is distinguishable
- Not relying solely on color for interactive states (has underlines, borders)
- Gradient backgrounds are decorative only

**Recommendation:** No changes needed for color blindness

## Priority

1. **High:** Fix --text3 contrast in both themes (accessibility issue)
2. **Medium:** Improve --text2 in light theme
3. **Low:** Update interactive element default states
