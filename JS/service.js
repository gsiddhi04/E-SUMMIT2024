const card = document.getElementsByClassName(".service_card");
const hiddenText = document.getElementsByClassName(".hidden-text");

// Add event listeners for hover
card.addEventListener("mouseenter", () => {
  card.classList.add("hovered");
});

card.addEventListener("mouseleave", () => {
  card.classList.remove("hovered");
});
