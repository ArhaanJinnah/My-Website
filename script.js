window.onload = function() {
    // Get the current local time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const startHour = 17;  // 5:00 PM
    const startMinute = 0;  // Exactly 5 PM
    const endHour = 0;  // Midnight (12:00 AM)
    const endMinute = 0;  // Exactly 12:00 AM

    // Check if the current time is between 5:00 PM today and 12:00 AM (midnight)
    // Case 1: If it's after 5:00 PM today and before midnight
    // Case 2: If it's after midnight but before 12:00 AM (which we check by checking if hours < 12).
    if (
        (hours > startHour || (hours === startHour && minutes >= startMinute)) && 
        (hours < endHour || (hours === endHour && minutes < endMinute))
    ) {
        document.body.style.display = "block";  // Show the website
    } else {
        document.body.style.display = "none";  // Hide the website
        alert("This website is only available between 5:00 PM and 12:00 AM local time.");
    }
};

