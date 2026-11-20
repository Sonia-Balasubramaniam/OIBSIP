/* ==========================================================================
   Priya Sharma — Personal Portfolio · script.js
   Task 2 · Oasis Infobyte Web Dev & Designing Internship (Level 1)
   Vanilla JavaScript — no libraries or frameworks
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * 1. Smooth-scrolling navigation
   *    Sets up CSS smooth scroll (fallback for html.scroll-behavior)
   *    and closes the mobile menu after a link is tapped.
   * ------------------------------------------------------------------ */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href");
        if (id.length < 2) return; // skip bare "#"
        var target = document.querySelector(id);
        if (!target) return;

        event.preventDefault();

        var navH = document.querySelector(".navbar").offsetHeight;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navH;

        window.scrollTo({ top: top, behavior: "smooth" });

        // Keep the URL hash in sync without an extra jump
        if (history.pushState) history.pushState(null, "", id);

        closeMenu();
      });
    });
  }

  /* ------------------------------------------------------------------
   * 2. Mobile navigation toggle
   * ------------------------------------------------------------------ */
  var burger = document.getElementById("navBurger");
  var menu = document.getElementById("navMenu");

  function closeMenu() {
    if (burger && menu) {
      menu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  }

  function initBurger() {
    if (!burger || !menu) return;
    burger.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ------------------------------------------------------------------
   * 3. Sticky navbar shadow once page scrolls
   * ------------------------------------------------------------------ */
  function initNavShadow() {
    var nav = document.querySelector(".navbar");
    if (!nav) return;
    window.addEventListener("scroll", function () {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------
   * 4. Typing effect for the hero role
   * ------------------------------------------------------------------ */
  function initTyping() {
    var el = document.getElementById("typed");
    if (!el) return;

    var roles = [
      "CSE Student",
      "Frontend Developer",
      "Open-Source Contributor",
      "Problem Solver"
    ];
    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    (function tick() {
      var current = roles[roleIndex];

      if (!deleting) {
        el.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1800); // pause at full word
          return;
        }
        setTimeout(tick, 80);
      } else {
        el.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(tick, 40);
      }
    })();
  }

  /* ------------------------------------------------------------------
   * 5. Scroll-reveal — fade elements in as they enter the viewport
   * ------------------------------------------------------------------ */
  function initReveal() {
    var targets = document.querySelectorAll(
      ".section-tag, .section-title, .section-head p, .skill-card, .project-card, " +
      ".info-card, .about-facts li, .contact-card, .about-text p, .contact-intro p"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("visible"); });
      return;
    }

    targets.forEach(function (t) { t.classList.add("reveal-el"); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (t) { observer.observe(t); });
  }

  /* ------------------------------------------------------------------
   * 6. Active nav link highlighting while scrolling
   * ------------------------------------------------------------------ */
  function initActiveNav() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 120;
      sections.forEach(function (section) {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + section.id
            );
          });
        }
      });
    }, { passive: true });
  }

  /* ---------------------- Boot ---------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initSmoothScroll();
    initBurger();
    initNavShadow();
    initTyping();
    initReveal();
    initActiveNav();
  });
})();
