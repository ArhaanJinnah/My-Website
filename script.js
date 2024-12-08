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
// Set the target time in Suriname (11:59 PM, UTC-3)
const targetTimeSuriname = new Date();
targetTimeSuriname.setHours(23);  // 11 PM
targetTimeSuriname.setMinutes(59);  // 59 minutes
targetTimeSuriname.setSeconds(0);  // 0 seconds
targetTimeSuriname.setMilliseconds(0);  // 0 milliseconds

// Function to get the current time in Suriname (UTC-3)
function getSurinameTime() {
    const currentTime = new Date();
    const surinameTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'America/Paramaribo' }));
    return surinameTime;
}

// Function to calculate the remaining time until the target time in Suriname
function getRemainingTime() {
    const currentSurinameTime = getSurinameTime();
    const remainingTime = targetTimeSuriname - currentSurinameTime;
    return remainingTime;
}

// Function to format the remaining time (in milliseconds) into minutes and seconds
function formatRemainingTime(remainingTime) {
    const minutes = Math.floor(remainingTime / 1000 / 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);
    return { minutes, seconds };
}

// Get all the elements to hide initially
const elementsToHide = document.querySelectorAll('header, main, footer');

// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Apply 'hidden' class to all elements initially
elementsToHide.forEach(element => element.classList.add('hidden'));

// Update the countdown every second
const timerInterval = setInterval(function() {
    // Get the remaining time in Suriname time
    const remainingTime = getRemainingTime();

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timerOverlay').style.display = 'none'; // Hide the timer overlay
        elementsToHide.forEach(element => element.classList.remove('hidden')); // Show all content
        document.body.style.pointerEvents = 'auto'; // Enable interaction with the page
    } else {
        // Format the remaining time
        const { minutes, seconds } = formatRemainingTime(remainingTime);
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`; // Update countdown
    }
}, 1000);

// Initially disable interaction with the page
document.body.style.pointerEvents = 'none'; // Disable clicks and interactions
