// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Function to initialize animations for all <h1> elements
function animateAllHeadings() {
  // Select all <h1> elements on the page
  const headings = document.querySelectorAll("h1");

  // Iterate through each <h1>
  headings.forEach(heading => {
    // Wrap each word in <span> for animation
    const words = heading.textContent.split(" ").map(word => {
      return `<span class="animated-word">${word}</span>`;
    });

    // Replace the heading's content with wrapped words
    heading.innerHTML = words.join(" ");

    // Create GSAP animation for each heading
    gsap.timeline({
      scrollTrigger: {
        trigger: heading, // Animate when this heading enters the viewport
        start: "100 bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    }).to(heading.querySelectorAll(".animated-word"), {
      opacity: 1,
      transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.02, // Animates words sequentially with a small delay
    });
  });
}

// Initialize the animations for all <h1> elements
animateAllHeadings();
