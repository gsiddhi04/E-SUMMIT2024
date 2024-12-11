// Function to animate numbers
function animateNumbers(element, target, duration) {
    let start = 0; // Starting number
    const increment = target / (duration / 10); // Step size
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target; // Stop at the target number
        clearInterval(interval);
      }
      element.innerHTML = `${Math.floor(start)}+ ` ; // Update the content
    }, 100); // Update every 1s
  }
  
  // Select all child elements and animate their numbers
  document.querySelectorAll('.child_count').forEach((child) => {
    const target = parseInt(child.getAttribute('data-target'), 10); // Get target number from data attribute
    animateNumbers(child, target, 200); // Animate over 2000ms (2 seconds)
  });   
  