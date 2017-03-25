const Promise = require('bluebird');

let instanceDP = null;

class DeadPool {

	constructor() {
		this.poneyList = [];
		this.isRegenerate = false;

		if (!instanceDP) {
			instanceDP = this;
		}
		return instanceDP;
	}

	transformToUnicorn() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.1) {
					resolve();
				} else {
					reject();
				}
			}, 1000);
		});
	}

	regenDeadpool() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if ((Math.random()) > 0.95) {
					resolve();
				} else {
					reject();
				}
			}, 2000);
		});
	}

	jeDoisMeRegener() {
		this.regenDeadpool()
        .then(() => {
	this.isRegenerate = true;
	console.log('Dead Pool : Je me regenere :)');
})
        .catch(() => {
	console.log('Dead Pool : Pas de regeneration :(');
});
	}

}

module.exports = {DeadPool};

