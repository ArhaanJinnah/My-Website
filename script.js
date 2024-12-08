window.onload = function() {
    // Get the current time in Pakistan (Karachi time)
    const now = moment.tz("Asia/Karachi");
    const hours = now.hours();
    const minutes = now.minutes();

    const startHour = 15;  // 3:00 PM
    const startMinute = 30;  // 30 minutes past 3 PM
    const endHour = 12;  // 12:00 PM the next day

    // Check if the current time is between 3:20 PM today and 12:00 PM the next day
    if (
        (hours > startHour || (hours === startHour && minutes >= startMinute)) &&  
        (hours < endHour || (hours === endHour && minutes === 0)) 
    ) {
        document.body.style.display = "block";  // Show the website
    } else {
        document.body.style.display = "none";  // Hide the website
        alert("This website is only available between 3:30 PM and 12:00 PM Pakistan Time.");
    }
};
