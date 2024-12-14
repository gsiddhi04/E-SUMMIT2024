document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const cardContainers = document.querySelectorAll(".card_container");

    // Add smoother overflow handling
    cardContainers.forEach((section) => {
        section.style.overflow = "hidden";
    });

    // Apply GSAP animations based on viewport size
    const isMobile = window.innerWidth < 776;

    cardContainers.forEach((section, index) => {
        const card = section.querySelector(".service_card");
        const cardText = card.querySelector(".card_text"); // Assuming text is inside a child element with this class

        // If it's not mobile, apply desktop animations
        if (!isMobile) {
            gsap.fromTo(
                card,
                {
                    scale: 1,
                    borderRadius: "20px",
                    x: "0vw",
                    y: "0vh",
                },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom center",
                        scrub: true,
                        pin: true,
                    },
                    scale: 0.8,
                    borderRadius: "16px",
                    x: "0vw",
                    y: "0vh",
                    width: "30%",
                    height: "90%",
                    ease: "power1.inOut",
                }
            );
        }

        // Get the card width
        const cardWidth = card.offsetWidth;

        // If it's a desktop screen and card width is less than 700px, add the 'reduce-opacity' class
        if (!isMobile && cardWidth < 700) {
            card.classList.add("reduce-opacity");
        }

        // Tilt Effect
        card.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const centerX = width / 2;
            const centerY = height / 2;

            // Calculate rotation angles for tilt effect
            const rotateX = ((y - centerY) / centerY) * 15; // Tilt up/down
            const rotateY = ((x - centerX) / centerX) * -15; // Tilt left/right

            // Apply tilt effect using GSAP
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        // Reset tilt effect on mouse leave
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });
});
