// Include GSAP via CDN in your HTML file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Register the GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Target the landing page section and scroll-slide container
    const landingPage = document.querySelector("#landing_page");
    const scrollSlide = document.querySelector("#scroll-slide");
  
    // Apply perspective to the parent container
    scrollSlide.style.perspective = "1000px";
  
    // Create scroll-triggered animation
    gsap.timeline({
      scrollTrigger: {
        trigger: landingPage,
        start: "bottom 70%",
        end: "+=500", 
        scrub: true, 
      },
    })
      .to(landingPage, {
        rotationX: 15, 
        rotationY:-3,
        transformOrigin: "center bottom",
        ease: "power1.out", 
      })
   
  });
  