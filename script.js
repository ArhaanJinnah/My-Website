// Launch confetti every 2 seconds from the top-left, top-right, bottom-left, and bottom-right towards the center
setInterval(function() {
    // Confetti from the top-left corner of the header towards the card center
    confetti({
        particleCount: 100,
        spread: 60, 
        origin: { x: 0, y: 0 }, // Top-left of the header
        angle: 45, // Towards center
        gravity: 1
    });

    // Confetti from the top-right corner of the header towards the card center
    confetti({
        particleCount: 100,
        spread: 60, 
        origin: { x: 1, y: 0 }, // Top-right of the header
        angle: 135, // Towards center
        gravity: 1
    });

    // Confetti from the bottom-left corner of the footer towards the card center
    confetti({
        particleCount: 100,
        spread: 60, 
        origin: { x: 0, y: 1 }, // Bottom-left of the footer
        angle: 60, // Towards center
        gravity: 1
    });

    // Confetti from the bottom-right corner of the footer towards the card center
    confetti({
        particleCount: 100,
        spread: 60, 
        origin: { x: 1, y: 1 }, // Bottom-right of the footer
        angle: -60, // Towards center
        gravity: 1
    });
}, 2000);  // Launch confetti every 2 seconds

// Get the card element
const card = document.getElementById('birthdayCard');

// Toggle the "flip" class to flip the card when clicked
card.addEventListener('click', () => {
    card.classList.toggle('flip');
});

