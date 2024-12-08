window.onload = function() {
    // Get the current time in Pakistan (Karachi time)
    const now = moment.tz("Asia/Karachi");

    // Logging the current time to debug
    console.log("Current time in Pakistan:", now.format('YYYY-MM-DD HH:mm:ss'));

    const startHour = 17;  // 5:00 PM
    const startMinute = 0;  // Exactly 5 PM
    const endHour = 0;  // Midnight (12:00 AM) the next day
    const endMinute = 0;  // Exactly 12:00 AM

    // Get today's start time (5:00 PM today) and tomorrow's midnight (12:00 AM)
    const todayStart = moment.tz("Asia/Karachi").set({ hour: startHour, minute: startMinute, second: 0 });
    const nextDayEnd = moment.tz("Asia/Karachi").add(1, 'days').set({ hour: endHour, minute: endMinute, second: 0 });

    // Logging the calculated times to debug
    console.log("Start time (5:00 PM today):", todayStart.format('YYYY-MM-DD HH:mm:ss'));
    console.log("End time (12:00 AM tomorrow):", nextDayEnd.format('YYYY-MM-DD HH:mm:ss'));

    // Check if the current time is between 5:00 PM today and 12:00 AM the next day
    if (now.isBetween(todayStart, nextDayEnd, null, '[]')) {
        document.body.style.display = "block";  // Show the website
        console.log("Website is visible.");
    } else {
        document.body.style.display = "none";  // Hide the website
        alert("This website is only available between 5:00 PM and 12:00 AM Pakistan Time.");
        console.log("Website is hidden.");
    }
};


