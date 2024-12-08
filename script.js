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

// Set the target date and time in UTC (9/12/2024, 3:00 AM UTC)
const targetTimeUTC = new Date(Date.UTC(2024, 11, 9, 3, 0, 0)); // 3:00 AM UTC

// Function to get the current UTC time
function getUTCTime() {
    return new Date(); // JavaScript Date automatically uses UTC for Date comparisons
}

// Function to check if the site should be live
function isSiteLive() {
    const currentUTCTime = getUTCTime();
    return currentUTCTime >= targetTimeUTC;
}

// Function to calculate the remaining time until the target time in UTC
function getRemainingTime() {
    const currentUTCTime = getUTCTime();
    const remainingTime = targetTimeUTC - currentUTCTime;
    return remainingTime;
}

// Function to format the remaining time (in milliseconds) into hours, minutes, and seconds
function formatRemainingTime(remainingTime) {
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime / 1000) % 60);
    return { hours, minutes, seconds };
}

// Get all the elements to hide initially
const elementsToHide = document.querySelectorAll('header, main, footer');

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Apply 'hidden' class to all elements initially
elementsToHide.forEach(element => element.classList.add('hidden'));

// Check if the site is already live
if (isSiteLive()) {
    // Make the site live immediately
    document.getElementById('timerOverlay').style.display = 'none'; // Hide the timer overlay
    elementsToHide.forEach(element => element.classList.remove('hidden')); // Show all content
    document.body.style.pointerEvents = 'auto'; // Enable interaction with the page
} else {
    // Update the countdown every second
    const timerInterval = setInterval(function() {
        // Check again if the site should be live
        if (isSiteLive()) {
            clearInterval(timerInterval);
            document.getElementById('timerOverlay').style.display = 'none'; // Hide the timer overlay
            elementsToHide.forEach(element => element.classList.remove('hidden')); // Show all content
            document.body.style.pointerEvents = 'auto'; // Enable interaction with the page
        } else {
            // Get the remaining time
            const remainingTime = getRemainingTime();
            // Format the remaining time
            const { hours, minutes, seconds } = formatRemainingTime(remainingTime);
            countdownElement.textContent = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // Update countdown
        }
    }, 1000);

    // Initially disable interaction with the page
    document.body.style.pointerEvents = 'none'; // Disable clicks and interactions
}

