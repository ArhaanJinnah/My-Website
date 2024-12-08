window.onload = function() {
    // Get the current time in Pakistan (Karachi time)
    const now = moment.tz("Asia/Karachi");
    const hours = now.hours();
    const minutes = now.minutes();
    
    const startHour = 15;  // 3:00 PM
    const startMinute = 30;  // 30 minutes past 3 PM
    const endHour = 12;  // 12:00 PM the next day

    // Get the current date and the next day's date
    const today = now.clone().startOf('day');  // Start of the current day
    const nextDay = today.clone().add(1, 'days');  // Start of the next day

    // Check if the current time is between 3:30 PM today and 12:00 PM the next day
    if (
        (now.isSameOrAfter(today.clone().set({ hour: startHour, minute: startMinute }))) &&  // After 3:30 PM today
        (now.isBefore(nextDay.clone().set({ hour: endHour, minute: 0 }))) // Before 12:00 PM tomorrow
    ) {
        document.body.style.display = "block";  // Show the website
    } else {
        document.body.style.display = "none";  // Hide the website
        alert("This website is only available between 3:30 PM and 12:00 PM Pakistan Time.");
    }
};


