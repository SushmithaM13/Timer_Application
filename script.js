// Selecting the HTML elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Variables to hold time values
let seconds = 0;
let interval = null;
let isRunning = false;

// Function to update the timer display
function updateTimer() {
    let minutes = Math.floor(seconds / 60);
    let displaySeconds = seconds % 60;
    
    if (minutes < 10) minutes = '0' + minutes;
    if (displaySeconds < 10) displaySeconds = '0' + displaySeconds;
    
    timerDisplay.innerText = `${minutes}:${displaySeconds}`;
}

// Start the timer
startButton.addEventListener('click', () => {
    if (!isRunning) {
        interval = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        isRunning = true;
    }
});

// Stop the timer
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
});

// Reset the timer
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    updateTimer();
    isRunning = false;
});