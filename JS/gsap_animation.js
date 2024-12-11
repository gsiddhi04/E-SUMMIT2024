
gsap.timeline({
    scrollTrigger: {
      trigger: "#about .container .row",
      start: "top center", // Trigger starts when the row is at the middle of the viewport
      end: "bottom center",   // Animation ends when the row leaves the center
    //   markers: true,
      scrub: true,            // Smoothly animate based on scroll
    }
  })
  .from(".about_card_img-1", {
    x: innerWidth * -1,       // Start from the left off-screen
  })
  .from(".about_card_img-2", {
    x: innerWidth * 1,        // Start from the right off-screen
  });                    // Start this animation simultaneously with the previous one
  