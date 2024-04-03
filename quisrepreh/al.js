// Import the canvas-confetti package
const confetti = require('canvas-confetti');

// Function to create a confetti effect
function createConfetti() {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  // Set the canvas context for confetti
  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });

  // Launch the confetti with custom options
  myConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Export the function for use in other modules
module.exports = createConfetti;
