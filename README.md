# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

I was able to make this website accesable for users to use and for the users to learn about the market

## Alpine Decision

**User/client need:**  
I felt that the user needed a way to sorta filter out the different markets if they were looking for a specific one

**Alpine directives used:**  
used the x-data to keep the specific market category and to used the x-show to show or hide the different market cards

**Why Alpine was appropriate:**  
i feel that Alpine wasd important because it really helped add those cool user interacxtive features

## Preline Decision

**Preline component selected:**  
I selected the FAQ question of the website

**Problem it solves:**  
helps the user get quick answers that everyone thinks of  

**How you adapted it:** 
I adapted this by getting those questions for exmple the "Can you bring pets?"

## Accessibility Notes

1. added heading so ther sections can stand out
2. made surew that all the buttons were working

## Testing Notes

**Narrow viewport:** look and see if it loads well on mobile device
**Medium viewport:** check to see if it looks good on a medium sized device like an ipad
**Wide viewport:** see if it works well on computer
**Keyboard testing:** check if the enter, space and tab keyts work for the user interactive parts 
**Browser console:** checked to see if erroers occured in browser
## Dependencies

**Alpine.js — how used:** used alpine to get the market filter working
**Preline UI — how used:** used preline to set up the visitor questions 
**Tailwind CSS — how used:** used tailwind CSS for the styling of the page

## Official Documentation Used

- Alpine.js: https://alpinejs.dev/start-here
- Preline UI: https://preline.co/docs/

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [yes] `npm run build` completes.
- [yes] Tailwind styles load.
- [yes] Alpine interaction works.
- [yes] Preline component works.
- [yes] They solve different needs.
- [yes] Keyboard testing works.
- [yes] Responsive testing is complete.
- [yes] Console has no unresolved errors.
- [yes] README is complete.
- [yes] `css/output.css` is committed.
- [yes] `js/vendor/preline.js` is committed.
- [yes] `node_modules` is not committed.
- [yes] Work is pushed to GitHub.

# Link to git hub webs
https://jadynb18.github.io/webworks-studio/

file:///Users/jadynbrown/Documents/GitHub/IMED2315/webworks-module09-student-starter-v2/index.html#makers

