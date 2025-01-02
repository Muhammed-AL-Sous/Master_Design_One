// Start Loader

window.addEventListener("load", function () {
  "use strict";
  // Loading Elements
  const loader = document.querySelector(".loading .loader");
  if (loader) {
    loader.style.transition = "opacity 2s";
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
      // Show The Scroll
      document.body.style.overflow = "auto";
      const overlay = document.querySelector(".loading .overlay");
      if (overlay) {
        overlay.style.transition = "opacity 2s";
        overlay.style.opacity = "0";
        setTimeout(function () {
          const loading = document.querySelector(".loading");
          loading.remove();
        }, 2000);
      }
    }, 2000);
  }
});

// End Loader

// ================================================================================= //

// Start Head Room Library
const header = document.querySelector(".header");
const headroom = new Headroom(header, {
  tolerance: 5,
  offset: 100,
  classes: {
    pinned: "header--pinned",
    unpinned: "header--unpinned",
  },
});
headroom.init();

// ==== End Head Room Library ==== //

// ================================================================================= //

// Start Scroller Page

// Scroll Height Is : Content & Padding (Visible Or Not)
// Client Height Is : Just Visible Content & Padding

let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// End Scroller Page

// ================================================================================= //

// Start Settings Box
let settingsBox = document.querySelector(".settings-box");
let settingsIcon = document.querySelector(".settings-icon");

settingsIcon.addEventListener("click", (e) => {
  settingsBox.classList.toggle("show");
  settingsIcon.classList.toggle("spin-icon");
});

document.addEventListener("click", (e) => {
  if (e.target !== settingsIcon && !settingsBox.contains(e.target)) {
    if (settingsBox.classList.contains("show")) {
      settingsBox.classList.remove("show");
    }

    if (settingsIcon.classList.contains("spin-icon")) {
      settingsIcon.classList.remove("spin-icon");
    }
  }
});

let mainColor = window.localStorage.getItem("color_option");
let colorLis = document.querySelectorAll(".colors-list li");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);

  colorLis.forEach((li) => {
    li.classList.remove("active");

    if (li.dataset.color === mainColor) {
      li.classList.add("active");
    }
  });
}

colorLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("color_option", e.target.dataset.color);
  });
});

// End Settings Box

// ================================================================================= //

// Start Wow Library

new WOW().init();

// End Wow Library

// ================================================================================= //


