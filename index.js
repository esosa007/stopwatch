let startTime = 0;
let running = false;
let intervalId;
let elapsedTime = 0;
let intervalTime = 25; // Default interval
let numIntervals = 4; // Default number of intervals
let currentInterval = 0;

const timerDisplay = document.getElementById('timer');
const intervalInput = document.getElementById('interval');
const numIntervalsInput = document.getElementById('numIntervals');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const body = document.body;

function updateDisplay() {
  const milliseconds = elapsedTime;
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)));

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = formattedTime;

  if (running) {
        elapsedTime = Date.now() - startTime;
        if (elapsedTime >= intervalTime * 1000) {
            body.style.backgroundColor = "red";
            setTimeout(() => {
                body.style.backgroundColor = "green";
                currentInterval++;
                if(currentInterval < numIntervals){
                    startTime = Date.now();
                } else {
                    stopTimer();
                    currentInterval = 0;
                }
            }, 10000);
        } else if (elapsedTime >= (intervalTime - 10) * 1000) {
            body.style.backgroundColor = "yellow";
        }
    }
}

function startTimer() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime; // Correctly accounts for time already passed.
    intervalId = setInterval(updateDisplay, 10);
  }
}

function pauseTimer() {
  if (running) {
    running = false;
    clearInterval(intervalId);
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(intervalId);
  }
  //elapsedTime = 0;
  updateDisplay();
  body.style.backgroundColor = "green";
  currentInterval = 0;
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    intervalTime = parseInt(intervalInput.value);
    numIntervals = parseInt(numIntervalsInput.value);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

intervalInput.addEventListener('change', () => {
    intervalTime = parseInt(intervalInput.value);
});

numIntervalsInput.addEventListener('change', () => {
    numIntervals = parseInt(numIntervalsInput.value);
});

updateDisplay(); // Initialize display
