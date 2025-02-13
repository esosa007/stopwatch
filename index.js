class StopWatch {
    constructor(startButton, stopButton, lapButton, timerInput, body) {
        this.startButton = startButton,
        this.stopButton = stopButton,
        this.lapButton = lapButton,
        this.timerInput = timerInput,
        this.body = body
    
        startBtn.addEventListener('click', this.startTimer);
        stopBtn.addEventListener('click', this.stopTimer);
    }

    startTimer() {
        body.style.backgroundColor = '#00FF00';
    }

    stopTimer() {
        body.style.backgroundColor = '';
    }

    lapTimer() {

    }
    
}

const startBtn = document.querySelector('#startButton');
const stopBtn = document.querySelector('#stopButton');
const lapBtn = document.querySelector('#lapButton');
const timerInput = document.querySelector('#timerInput');
const body = document.querySelector('body');


const stopWatch = new StopWatch(startBtn, stopBtn, lapBtn, timerInput, body);