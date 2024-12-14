document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const cardContainers = document.querySelectorAll(".card_container");

    cardContainers.forEach((section) => {
        section.style.overflowX = "hidden";
    });

    if (window.innerWidth >= 776) {
        cardContainers.forEach((section, index) => {
            const card = section.querySelector(".service_card");

            gsap.fromTo(
                card,
                {
                    scale: 1, 
                    borderRadius: "0px", 
                    width: "100%",
                    height: "100%",
                    x: "0vw",
                    y: "0vh"
                },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: true,
                    },
                    scale: 0.8, 
                    borderRadius: "16px", 
                    width: "30%",
                    height: "80%",
                    x: "calc(50vw - 150px)", 
                    y: "calc(50vh - 100px)", 
                    ease: "power1.inOut"
                }
            );
        });
    }
});
