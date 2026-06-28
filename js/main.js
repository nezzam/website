(function () {
  "use strict";

  /* Theme */
  function getTheme() {
    const stored = localStorage.getItem("nezam-theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("nezam-theme", theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.innerHTML = theme === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || getTheme();
    setTheme(current === "dark" ? "light" : "dark");
  }

  /* Navbar scroll */
  function initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar__link, .mobile-menu__link").forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  /* Mobile menu */
  function initMobileMenu() {
    const toggle = document.querySelector(".navbar__toggle");
    const menu = document.querySelector(".mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.classList.toggle("active", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    menu.querySelectorAll(".mobile-menu__link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  /* Scroll reveal */
  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* Portfolio filter */
  function initPortfolioFilter() {
    const filters = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".portfolio-card");
    if (!filters.length || !cards.length) return;

    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.dataset.filter;

        cards.forEach(card => {
          const show = category === "all" || card.dataset.category === category;
          card.style.display = show ? "" : "none";
          if (show) {
            card.classList.remove("visible");
            requestAnimationFrame(() => card.classList.add("visible"));
          }
        });
      });
    });
  }

  /* Contact form */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", e => {
      e.preventDefault();
      const lang = localStorage.getItem("nezam-lang") || "en";
      const msg = lang === "ar"
        ? "شكراً! تم إرسال رسالتك. سنتواصل معك قريباً."
        : "Thank you! Your message has been sent. We'll be in touch soon.";

      const notice = document.createElement("div");
      notice.className = "form-success";
      notice.style.cssText = "padding:16px;background:var(--teal-dim);border:1px solid var(--teal);border-radius:12px;color:var(--teal);margin-top:16px;text-align:center;font-weight:500;";
      notice.textContent = msg;

      const existing = form.querySelector(".form-success");
      if (existing) existing.remove();

      form.appendChild(notice);
      form.reset();

      setTimeout(() => notice.remove(), 5000);
    });
  }

  /* Bind controls */
  function bindControls() {
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.addEventListener("click", toggleTheme);
    });
    document.querySelectorAll(".lang-toggle").forEach(btn => {
      btn.addEventListener("click", toggleLang);
    });
  }

  /* Init */
  document.addEventListener("DOMContentLoaded", () => {
    setTheme(getTheme());
    bindControls();
    initNavbar();
    initMobileMenu();
    initReveal();
    initPortfolioFilter();
    initContactForm();
  });

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    if (!localStorage.getItem("nezam-theme")) {
      setTheme(e.matches ? "light" : "dark");
    }
  });
})();
