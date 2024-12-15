document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.querySelector("#landing_page");
    const scrollSlide = document.querySelector("#scroll-slide");
    const images_section = document.querySelector(".images-section");

    // Apply perspective to the parent container
    scrollSlide.style.perspective = "2000px";

    // Listen for scroll events
    window.addEventListener("scroll", () => {
        // Get the bounding rectangle of the landing page
        const rect = landingPage.getBoundingClientRect();

        // Calculate the viewport height and the element's position
        const viewportHeight = window.innerHeight;
        console.log(viewportHeight);
        const elementBottom = rect.bottom - 100;
        console.log(elementBottom);

        // Check if the bottom of the landing page is within the viewport
        if (elementBottom < viewportHeight && elementBottom > 0) {
            // Calculate rotation based on the scroll position
            const progress = 1 - elementBottom / viewportHeight; // Normalize scroll progress (0 to 1)
            const rotationX = 20 * progress; // Maximum tilt of 20 degrees
            const moveY = 10 * progress;

            // Apply transformations
            landingPage.style.transform = `rotateX(${rotationX}deg) translateY(${moveY}px)`;
            landingPage.style.transformOrigin = "center bottom";

            // Reset any transformations applied to images_section
            images_section.style.transform = `rotate(0deg)`;
        } else {
            // Reset transformations when out of range
            landingPage.style.transform = "rotateX(0deg)";
            landingPage.style.transformOrigin = "center bottom"; // Ensuring transform origin is always set
        }
    });
});
