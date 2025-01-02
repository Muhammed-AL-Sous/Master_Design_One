// Start Section Statistics & Our Skills Section

let statistics = document.querySelector(".statistics");
let numbersCount = document.querySelectorAll(".statistics .stats");

let skillsProgress = document.querySelector(".skills-progress");
let spans = document.querySelectorAll(".skills-progress .span-progress");

let isCounting = false;

window.onscroll = function () {
  if (window.scrollY >= skillsProgress.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (isCounting) return; // If counting is in progress, do nothing

  if (window.scrollY >= statistics.offsetTop - 300) {
    isCounting = true; // Start counting
    numbersCount.forEach((n) => {
      let startCount = 0;
      let endCount = parseInt(n.dataset.number); // Get the target count from data-number

      let counter = setInterval(() => {
        if (startCount < endCount) {
          startCount += Math.ceil((endCount - startCount) / 10); // Adjust the speed of counting
          n.textContent = startCount.toLocaleString();
        } else {
          n.textContent = endCount.toLocaleString();
          clearInterval(counter); // Stop counting once reached the target
        }
      }, 50); // Adjust the interval for smoother animation
    });
  }
};

// End Section Statistics & Our Skills Section

// ================================================================================= //

// Start Scroll To Top

let scrollUpBtn = document.querySelector(".button-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 1500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// End Scroll To Top

// ================================================================================= //
