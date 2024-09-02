document.addEventListener("DOMContentLoaded", function () {
  const navHam = document.querySelector(".nav-ham");
  const navItems = document.querySelector(".nav-items");

  function toggleNav() {
    navHam.classList.toggle("active");
    // navItems.style.display = navHam.classList.contains('active') ? 'block' : 'none';
  }

  navHam.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleNav();
  });

  document.addEventListener("click", function () {
    if (navHam.classList.contains("active")) {
      navHam.classList.remove("active");
      navItems.style.display = "none";
    }
  });

  navItems.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
