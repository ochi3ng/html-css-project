function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(17, 25);
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${day}`;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
