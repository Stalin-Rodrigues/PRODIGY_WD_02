let timer;
let isRunning = false;
let seconds = 0;

function updateCircleProgress() {
    const circleProgress = document.getElementById('circleProgress');
    const progress = (seconds % 60) / 60 * 100;
    circleProgress.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, ${progress}% 100%, 0% 50%)`;
}

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateCircleProgress();
            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateCircleProgress();
    updateDisplay();
}
