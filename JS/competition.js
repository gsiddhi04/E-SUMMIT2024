// Fetch JSON Data
fetch('competition.json')
  .then(response => response.json())
  .then(data => {
    initializeButtons(data.sections);
  })
  .catch(error => console.error('Error loading JSON:', error));

// Initialize Buttons and Event Listeners
function initializeButtons(sections) {
  const buttonContainer = document.getElementById('buttonContainer');
  const screen = document.getElementById('screen');
  const description = document.getElementById('description');
  // Create buttons dynamically with images
  sections.forEach(section => {
    const button = document.createElement('button');
    button.classList.add('dynamic-button');

    // Add an image and text to the button
    button.innerHTML = `
      <img src=./images/competition_main/${section.image} alt="${section.button}" class="button-icon">
      <span>${section.button}</span>
    `;

    button.addEventListener('click', () => displayContent(screen,description, section));
    buttonContainer.appendChild(button);
  });
}

// Update screen content dynamically
function displayContent(screen,description, section) {
  screen.innerHTML = `
    <img src="./images/competition_main/${section.image}" alt="${section.button}">
  `;
description.innerHTML = `<p> ${section.description}</p>`;
}
