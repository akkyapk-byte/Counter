// Initialize the counter variable
let count = 0;

// Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');

/**
 * Updates the display with the current count value.
 */
function updateDisplay() {
    countDisplay.textContent = count;
}

/**
 * Decreases the count and updates the display.
 */
function decreaseCount() {
    count--; // Decrement the count
    updateDisplay(); // Update the HTML
}

/**
 * Increases the count and updates the display.
 */
function increaseCount() {
    count++; // Increment the count
    updateDisplay(); // Update the HTML
}

// Add event listeners to the buttons
decreaseBtn.addEventListener('click', decreaseCount);
increaseBtn.addEventListener('click', increaseCount);

// Initial display setup (optional, but good practice)
updateDisplay(); 
