window.onload = function() {
    // Get the current time in Pakistan (Karachi time)
    const now = moment.tz("Asia/Karachi");
    
    const startHour = 15;  // 3:00 PM
    const startMinute = 30;  // 30 minutes past 3 PM
    const endHour = 12;  // 12:00 PM the next day

    // Get today's start time and next day's 12:00 PM
    const todayStart = moment.tz("Asia/Karachi").set({ hour: startHour, minute: startMinute, second: 0 });
    const nextDayEnd = moment.tz("Asia/Karachi").add(1, 'days').set({ hour: endHour, minute: 0, second: 0 });

    // Check if the current time is between 3:30 PM today and 12:00 PM the next day
    if (now.isBetween(todayStart, nextDayEnd, null, '[]')) {
        document.body.style.display = "block";  // Show the website
    } else {
        document.body.style.display = "none";  // Hide the website
        alert("This website is only available between 3:30 PM and 12:00 PM Pakistan Time.");
    }
};



