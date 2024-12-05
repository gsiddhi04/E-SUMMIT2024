// Target date (17th January 2025)
const targetDate = new Date("2025-01-17T00:00:00");

// Function to update countdown
function updateCountdown() {
  const now = new Date(); // Current date and time
  const timeLeft = targetDate - now; // Time left in milliseconds

    if (timeLeft > 0) {
    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML content
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  } else {
    // When the target date is reached
    document.getElementById("countdown").textContent = "The event has started!";
    clearInterval(intervalId); // Stop the timer
  }
}

// Update the countdown every second
const intervalId = setInterval(updateCountdown, 1000);

// Initial call to set the initial values
updateCountdown();
