// // Scrolling through the section 

// document.addEventListener('wheel', (event) => {
//     event.preventDefault();
//     let sectionHeight = window.innerHeight;
//     let delta = event.deltaY;
//     let scrollTop = window.scrollY;
//     let nextScrollPosition = scrollTop + (delta > 0 ? sectionHeight : -sectionHeight);

//     window.scrollTo({
//         top: nextScrollPosition,
//         behavior: 'smooth'
//     });
// });

// function adjustSectionHeights() {

//     const headerHeight = document.querySelector('header').offsetHeight;
    
//     document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    
//     document.querySelectorAll('.section').forEach(section => {
//         section.style.height = `calc(100vh - ${headerHeight}px)`;
//     });
// }

// window.addEventListener('load', adjustSectionHeights);

// window.addEventListener('resize', adjustSectionHeights);
// Function to handle intersection events
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Reset when out of view (optional)
        }
    });
}

// Function to create and initialize the observer
function createObserver() {
    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    document.querySelectorAll('.item').forEach(item => {
        observer.observe(item);
    });
}

// Adjust section heights based on the header
function adjustSectionHeights() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

    document.querySelectorAll('.section').forEach(section => {
        section.style.height = `calc(100vh - ${headerHeight}px)`;
    });
}

// Set up event listeners
window.addEventListener('load', () => {
    adjustSectionHeights();
    createObserver(); // Initialize observer on page load
});

window.addEventListener('resize', adjustSectionHeights);


// Navigation

document.addEventListener("DOMContentLoaded", function () {
    const navHam = document.querySelector(".nav-ham");
    const navItems = document.querySelector(".nav-items");
  
    // Function to toggle the active class
    function toggleNav() {
      navHam.classList.toggle("active");
      // navItems.style.display = navHam.classList.contains('active') ? 'block' : 'none';
    }
  
    // Click event to toggle nav-ham
    navHam.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the click from propagating to document
      toggleNav();
    });
  
    // Click event to remove active class when clicking anywhere else
    document.addEventListener("click", function () {
      if (navHam.classList.contains("active")) {
        navHam.classList.remove("active");
        navItems.style.display = "none";
      }
    });
  
    // Prevent clicking inside the nav items from closing the menu
    navItems.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });