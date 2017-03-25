const Promise = require('bluebird');

let instanceSM = null;

class SpiderMan {

	constructor() {
		this.isChevauche = false;
		if (!instanceSM) {
			instanceSM = this;
		}
		return instanceSM;
	}

	pChevauche() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.45) {
					resolve();
				} else {
					reject();
				}
			}, 1000);
		});
	}

	chevauchePoney() {
		this.pChevauche()
      .then(() => {
	this.energy = 0;
	console.log('Spider man : je fait du poney :)');
	console.log('Energy poney after ride  :', this.energy);
	console.log('Poney : j\'ai plus d\'energie :(');
})
      .catch(() => {

});
	}

	chevaucheUnicorn() {
		this.pChevauche()
      .then(() => {
	this.isChevauche = true;
	console.log('');
})
      .catch(() => console.log('Spider man : je ne fait rien :('));
	}

	jeDoischevauche() {
		this.pChevauche()
        .then(() => this.chevaucheUnicorn())
        .catch(() => this.chevauchePoney());
		// Return true;
	}

	// }
}

module.exports = {SpiderMan};

