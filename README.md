# Week 12: Customize the Experience — WordPress Development

**Client:** Southtown Community Arts  
**Role:** Junior WordPress Developer

## Project Overview

Briefly summarize how you customized the existing Week 11 CMS without making routine content harder for the client to maintain.

I was able to customize the week 11 cms without changing anything by applying the approved brand colors and typography. I also used the reusable brand pattern on two different pages while keeping the original content.

---

# Customization Decisions

Document the four required decisions below.

## 1. Global Design System

**Requirement:**  

The southtown brand palette and typography were used site-wide
**Location:**  
WordPress global styles and theme-levels
**Change:**  
[What did you change?]
i changed the global color palette which were 
southtown deep #17313f

southtown Teal #2b7a70

southtown Soft #eef5f3

southtown paper #ffffff

and i changed the font to monrope

**Why this level:**  

a global saolution was better because it applys the design across all the pages instead of having to edit each page which saves a lot of time.
**QA:**  
i tested the home page, programs, and the about page to make sure the content and colors stayed the same after.
---

## 2. Branded Reusable Pattern

**Pattern:**  
Southtown Program callout

**Change:**  
the changes i made were applying the colors to match the websites design theme
**Reuse:**  
On the Home Page and on the about page 
**Editor value:**  
this helps a future editor update by providing the reuse of the same structure and styling
---

## 3. Site-Wide Structure Customization

**Shared area:**  
Header and navigation

**Change:**  
i customized the header by adding padding on the top and bottom

**Why this level:**  
i feel that this change belonged because it makes adjustments in the site header easir to edit 
**QA:**  
The pages i checked were home, programs and about page

---

## 4. Controlled Development-Level Modification

Complete **one** option.

**Option used:**  
targeted CSS

**Location:**  
Appearance- Editor - Styles - Additional CSS

**Code / configuration snippet:**

:foucus-visible {
    outline: 3px solis #c7855a;
    outline-offset: 3px;
}

**Reason:**  
i make a visible keyboard to help the visitors see which selected element they are viewing when on the wbesite while using a keyboard
**Documentation:**  
styles overview

**QA:**  
i verified by testing the keyboard using the tab key

---

# Visitor + Editor QA

## Visitor Experience

- [yes] I tested narrow and wide viewport behavior.
- [yes] I checked visual consistency on more than one page.
- [yes] I checked text/link/button contrast.
- [yes] I verified visible keyboard focus.
- [yes] I tested navigation and links.
- [yes] I checked that the brand system is consistent rather than page-specific.

### Visitor QA Notes
[Briefly describe one issue you found or one important verification you made.]
One important verification that i made was makeing sure all pages worked and were in their correct format and viewed at wide and narrow viewpoints
## Editor Experience

- [yes] Routine content is still editable through WordPress.
- [yes] The branded pattern is understandable to reuse/edit.
- [yes] My customization did not move ordinary client content into code.
- [yes] I performed one temporary routine content edit, previewed it, and restored the original content.
- [yes] The site remained visually coherent after the editor test.

### Editor QA Notes
the update i tested was updating a sentence then saving it. The changing it back to its original sentence and saving it one again. 

---

# Evidence

Use the exact filenames below.

## Customized Home

![Customized Home page](evidence/home-customized.png)

## Customized Programs

![Customized Programs page](evidence/programs-customized.png)

## Branded Reusable Pattern

![Branded reusable pattern](evidence/branded-pattern.png)

## Responsive / Mobile View

![Responsive customized site](evidence/mobile-customized.png)

## Editor Maintainability Test

![Editor maintainability evidence](evidence/editor-maintainability.png)

---

# Maintainability Reflection

Write approximately **75–100 words** responding to:

> Give one example of a change you intentionally handled globally and one change you intentionally left as editable content. How does that separation help Southtown Community Arts maintain the site without losing design consistency?

while i worked on this project, it helped me learn and undertand how global styles can change the look of something without completley ruining the contents of the whole website. And not have to edit each page separetly. I really liked that i can change the colors across all pages so easily to keep the design of southtown community arts website the same. One thing i left intentionally editable was the programs descriptions. This allows them to make adjustments to their programes if needed.

---

# Final Handoff Check

- [yes] I continued the Week 11 Southtown site rather than rebuilding it.
- [yes] I applied the approved palette and typography direction systematically.
- [yes] I used global controls for global decisions.
- [yes] I created or significantly customized one branded reusable pattern.
- [yes] I made one appropriate site-wide structure customization.
- [yes] I completed exactly one controlled development-level modification.
- [yes] I did not add PHP, plugins, custom blocks, or a child-theme build for this assignment.
- [yes] Visitor and editor QA are complete.
- [yes] All five evidence screenshots display in this README.
- [yes] I completed the maintainability reflection.
- [yes] I committed and pushed the Week 12 handoff folder.
