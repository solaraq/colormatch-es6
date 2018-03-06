'use strict';

export default class StopWatch {


    constructor(config = {duration : 5 * 60 * 1000}) {
        this.duration = config.duration;
        this.timeLeft = 0;
        this.clockTimer = null;
    }

    start() {
        let start = Date.now();

        this.clockTimer = setInterval((StopWatch) => {
            let current = Date.now();
            StopWatch.timeLeft =  Math.round((StopWatch.duration - (current - start))/1000);
            StopWatch.seconds = String(StopWatch.timeLeft%60).padStart(2,'0');
            StopWatch.minutes = Math.floor(StopWatch.timeLeft/60);
        }, 950, this);
    }

    end() {
        clearInterval(this.clockTimer);
        this.clockTimer = null;
    };

    reset() {
        this.clockTimer = null;
    };

    getTimeLeft() {
        return {
            minutes: this.minutes,
            seconds: this.seconds,
            timeLeft: this.timeLeft
        }
    };

}


