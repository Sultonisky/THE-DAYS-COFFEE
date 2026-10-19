const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const cartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");
const cartBackdrop = document.querySelector(".cart-backdrop");
const contactForm = document.querySelector("#contactForm");
const currentYear = document.querySelector("#current-year");
const navLinks = [...document.querySelectorAll('.navbar-nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const revealElements = [...document.querySelectorAll("[data-reveal]")];

if (revealElements.length) {
  document.body.classList.add("reveal-enabled");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const setActiveNavLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (navLinks.length && navSections.length) {
  const initialSection = window.location.hash.slice(1) || "home";
  setActiveNavLink(initialSection);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleSection) {
        setActiveNavLink(visibleSection.target.id);
      }
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  navSections.forEach((section) => sectionObserver.observe(section));
  window.addEventListener("hashchange", () => {
    setActiveNavLink(window.location.hash.slice(1) || "home");
  });
}

if (hamburgerMenu && navbarNav) {
  hamburgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    navbarNav.classList.toggle("active");
  });
}

if (cartButton && shoppingCart && cartBackdrop) {
  cartButton.addEventListener("click", (event) => {
    event.preventDefault();
    shoppingCart.classList.toggle("active");
    cartBackdrop.classList.toggle("active", shoppingCart.classList.contains("active"));
  });

  cartBackdrop.addEventListener("click", () => {
    shoppingCart.classList.remove("active");
    cartBackdrop.classList.remove("active");
  });
}

document.addEventListener("click", (event) => {
  const target = event.target;

  if (navbarNav && hamburgerMenu && !hamburgerMenu.contains(target) && !navbarNav.contains(target)) {
    navbarNav.classList.remove("active");
  }
  if (shoppingCart && cartButton && !cartButton.contains(target) && !shoppingCart.contains(target)) {
    shoppingCart.classList.remove("active");
    cartBackdrop?.classList.remove("active");
  }
});

document.querySelectorAll(".navbar-nav a, .hero a, .credit a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav?.classList.remove("active");

    if (link.matches('.navbar-nav a[href^="#"]')) {
      setActiveNavLink(link.getAttribute("href").slice(1));
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("username") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const whatsappMessage = `Halo THE DAYS COFFEE,

Nama: ${name}
Email: ${email}

Pesan:
${message}`;

    window.open(
      `https://wa.me/6285756953895?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  });
}
