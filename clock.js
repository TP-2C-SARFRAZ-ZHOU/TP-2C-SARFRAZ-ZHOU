const {EventEmitter} = require('events');

const ev = new EventEmitter();

class Clock {
	constructor() {
		this.hour = 0;
		this.isDay = false;
		this.hourInterval = null;
	}
	begin()	{
		console.log('');
	}

	startClock() {
		this.hourInterval = setInterval(() => {
			console.log(`${++this.hour} H 00`);
			if (this.hour === 7) {
				this.isDay = true;
				ev.emit('Cycle change', 'day');
			} else if (this.hour === 20) {
				this.isDay = false;
				ev.emit('Cycle change', 'night');
			}
			if (this.hour === 24)		{
				this.hour = 0;
			}
		}, 3000);
	}

	stopClock() {
		clearInterval(this.hourInterval);
	}
}

module.exports = {Clock, ev};

