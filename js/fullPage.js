new fullpage("#container", {
  autoScrolling: true,
  scrollHorizontally: true,
});

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  document.querySelectorAll(".item").forEach((item) => {
    observer.observe(item);
  });
}

function adjustSectionHeights() {
  const headerHeight = document.querySelector("header").offsetHeight;
  document.documentElement.style.setProperty(
    "--header-height",
    `${headerHeight}px`
  );

  document.querySelectorAll(".section").forEach((section) => {
    section.style.height = `calc(100vh - ${headerHeight}px)`;
  });
}

window.addEventListener("load", () => {
  adjustSectionHeights();
  createObserver();
});

window.addEventListener("resize", adjustSectionHeights);
