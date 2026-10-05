# Week 8 — JavaScript Interaction Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors
1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection
What elements did your script need to select, and why?

the elements that i added to. my script was adding the correct content that can be opened properly. and the from can be filled out 

### Decision 2 — Event Handling
What events did you listen for? Why were those events appropriate?

i uses (addEventListener) to use the buttons like the click event and submit because the whatever the user selects will be a direct event action

### Decision 3 — State / DOM Update
How did the interface change after user action?

the interface changed by if the panel is closed or open while its hidden

### Decision 4 — Accessibility
How did you preserve or improve keyboard/accessibility behavior?

i improvede the accessibility behavior by adding aria-contronls to the state of it is clear 

---

## Testing Notes

### Difficulty Disclosure
- Mouse:cliicking on buttons opens more infoprmation of the difficulty info
- Keyboard:im able to use the tab to have the button enter to open and close it
- `aria-expanded`:shifts between false and when closed and true when open
- Console errors:

### Planning Form
- Empty/invalid submission:
- Valid submission:
- Keyboard:
- Console errors:

---

## Live Site
file:///Users/jadynbrown/Documents/GitHub/IMED2315/week08-javascript%202/index.html?trail=Painted+Bluff+Trail&experience=Some+experience&hours=4&confirm=on
