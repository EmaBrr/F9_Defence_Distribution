function applyZoomEffect() {
  let startSize;
  let endSize;

  if (window.innerWidth > 1200) {
    startSize = "150%"; // Larger start size for larger screens
    endSize = "110%"; // Larger end size for larger screens
  } else if (window.innerWidth > 1092) {
    startSize = "160%"; // Medium start size for medium screens
    endSize = "120%"; // Medium end size for medium screens
  } else if (window.innerWidth > 968) {
    startSize = "190%"; // Medium start size for medium screens
    endSize = "150%"; // Medium end size for medium screens
  } else if (window.innerWidth > 768) {
    startSize = "240%"; // Medium start size for medium screens
    endSize = "200%"; // Medium end size for medium screens
  } else if (window.innerWidth > 476) {
    startSize = "270%"; // Medium start size for medium screens
    endSize = "230%"; // Medium end size for medium screens
  } else {
    startSize = "330%"; // Smaller start size for smaller screens
    endSize = "290%"; // Smaller end size for smaller screens
  }

  gsap.fromTo(
    ".headline",
    {
      backgroundSize: startSize,
      backgroundPosition: "center center",
    },
    {
      backgroundSize: endSize,
      duration: 5,
      ease: "power2.out",
    }
  );
}

window.addEventListener("load", applyZoomEffect);

window.addEventListener("resize", applyZoomEffect);

document.addEventListener("DOMContentLoaded", function () {
  var valueItems = document.querySelectorAll(".value-item");

  valueItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var content = item.querySelector(".value-overlay");
      var image = item.querySelector(".value-image");
      var title = item.querySelector(".value-title");

      content.style.opacity = "1";
      image.style.opacity = "0.3";
      title.style.opacity = "0";
    });

    item.addEventListener("mouseleave", function () {
      var content = item.querySelector(".value-overlay");
      var image = item.querySelector(".value-image");
      var title = item.querySelector(".value-title");

      content.style.opacity = "0";
      image.style.opacity = "1";
      title.style.opacity = "1";
    });
  });
});
