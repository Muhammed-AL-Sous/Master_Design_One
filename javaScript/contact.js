let showElementsBtn = document.querySelector(".show-elements");
let links = document.querySelectorAll(".social-media .link");

showElementsBtn.addEventListener("click", () => {
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.toggle("show");
    }, index * 300);
  });

  const showText = document.querySelector(".show-elements .support");
  const hideText = document.querySelector(".show-elements .cancel");

  if (showText.style.display === "none") {
    showText.style.display = "inline-block";
    hideText.style.display = "none";
  } else {
    showText.style.display = "none";
    hideText.style.display = "inline-block";
  }
});

// ================================================================================= //
