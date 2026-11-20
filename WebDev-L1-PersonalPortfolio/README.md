# 👩‍💻 Task 2 — Personal Portfolio | CSE Student

A modern, dark-themed personal portfolio website for a Computer Science &
Engineering student, built with **HTML5, CSS3 and Vanilla JavaScript**, as part
of the **Oasis Infobyte Web Development & Designing Internship (Level 1)**.

## 📌 Project Overview

The portfolio introduces **Priya Sharma**, a final-year CSE student and
frontend developer. It features an animated hero with a typing effect, an
About section with education/experience/achievement cards, a technical
skills grid, project cards with GitHub links, and a contact section — all
tied together with smooth scrolling, scroll-reveal animations and an active
nav highlighter.

## 🎯 Objective

- Present a professional student identity suitable for internships and job
  applications.
- Demonstrate DOM manipulation and UI polish with vanilla JavaScript.
- Deliver a responsive, accessible single-page experience.

## ✨ Features

- **Fixed navigation** with mobile hamburger menu and active-section
  highlighting while scrolling.
- **Hero section** with name, animated rotating role (typing effect), profile
  image placeholder in a rotating gradient ring, and social links.
- **About Me** with education, internship experience, achievements and quick
  stats (CGPA, projects, PRs).
- **Technical Skills grid** — 4 categories (Frontend, Languages, Backend &
  Tools, Other) with interactive skill chips.
- **3 project cards** with gradient thumbnails, tech-stack tags, GitHub repo
  links and live-demo placeholders.
- **Contact section** with email, LinkedIn and GitHub placeholder cards.
- **Smooth scrolling** navigation (JS-enhanced with header offset).
- **Scroll-reveal animations** via IntersectionObserver.
- **Responsive** across desktop, tablet and mobile; `prefers-reduced-motion`
  respected.

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Flexbox & Grid layout, variables, dark theme, animations |
| JavaScript (ES5/ES6) | Typing effect, menu, smooth scroll, reveal, active nav |
| Google Fonts | Space Grotesk + Inter typography |

> No frameworks, no libraries.

## 📁 Folder Structure

```
WebDev-L1-PersonalPortfolio/
├── index.html    # Page markup
├── style.css     # Theme, layout, components, responsive rules
├── script.js     # Menu, smooth scroll, typing, reveal, active nav
├── README.md     # This file
└── screenshots/  # Add page screenshots here
    └── (.gitkeep placeholder)
```

## ▶️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/OIBSIP.git
   ```
2. Open the folder:
   ```bash
   cd OIBSIP/WebDev-L1-PersonalPortfolio
   ```
3. Double-click **`index.html`**, or serve it locally (optional):
   ```bash
   npx serve .
   ```

Runs directly in any modern browser — no build step required.

## 🔧 Customisation

- Replace `your-username` in the GitHub/LinkedIn links with your handles.
- Swap the `.photo-placeholder` div in `index.html` for an `<img>` of yourself.
- Edit the role list in `script.js` (`var roles = [...]`) to change the
  typing animation.

## 📸 Screenshots

Add screenshots to the `screenshots/` folder and reference them here:

| View | Screenshot |
|---|---|
| Desktop — Hero | `screenshots/portfolio-hero.png` |
| Desktop — Projects | `screenshots/portfolio-projects.png` |
| Mobile — Menu open | `screenshots/portfolio-mobile.png` |

## ✅ Verification Checklist

- [x] Hero with name, role and profile image placeholder
- [x] About Me section
- [x] Technical Skills grid
- [x] 3 project cards with GitHub placeholders
- [x] Contact with email, LinkedIn and GitHub placeholders
- [x] Smooth scrolling navigation
- [x] Responsive and modern design

---

Built for the **Oasis Infobyte Web Development & Designing Internship** · Task 2 of 3.
