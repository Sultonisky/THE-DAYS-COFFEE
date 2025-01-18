// toggle active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  hamburgerMenu.focus();
  e.preventDefault();
};

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// // toggle active search box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    const modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "flex";
    e.preventDefault();
  };
});

// close modal
const closeBtns = document.querySelectorAll(".close-icon");

closeBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    const modal = (btn.closest(".modal").style.display = "none");
    e.preventDefault();
  };
});

// klik diluar elemen
window.onclick = function (e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
