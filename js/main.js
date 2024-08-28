document.addEventListener('wheel', (event) => {
    event.preventDefault();
    let sectionHeight = window.innerHeight;
    let delta = event.deltaY;
    let scrollTop = window.scrollY;
    let nextScrollPosition = scrollTop + (delta > 0 ? sectionHeight : -sectionHeight);

    window.scrollTo({
        top: nextScrollPosition,
        behavior: 'smooth'
    });
});


// scripts.js

function adjustSectionHeights() {
    // Get the header height
    const headerHeight = document.querySelector('header').offsetHeight;
    
    // Update the CSS variable for header height
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    
    // Adjust the height of each section
    document.querySelectorAll('.section').forEach(section => {
        section.style.height = `calc(100vh - ${headerHeight}px)`;
    });
}

// Call the function on page load
window.addEventListener('load', adjustSectionHeights);

// Call the function on window resize
window.addEventListener('resize', adjustSectionHeights);
