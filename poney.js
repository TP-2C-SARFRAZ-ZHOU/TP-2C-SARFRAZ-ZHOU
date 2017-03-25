// Const Promise = require('bluebird');
const {DeadPool} = require('./dead-pool.js');
const {SpiderMan} = require('./spider-man.js');
const {Clock} = require('./clock.js');

let instanceP = null;

const ENERGY = 0;

class Poney {
	constructor() {
		this.energy = ENERGY;
		this.nbrPoney = 10;
		this.nbrUnicorn = 0;
		this.isUnicorn = false;

		this.deadpool = new DeadPool();
		this.deadpool.poneyList.push(this);
		this.spider = new SpiderMan();
		this.clock = new Clock();

		if (!instanceP) {
			instanceP = this;
		}
		return instanceP;
	}

	initialisation(ev) {
		setInterval(() => {
			this.energy += 10;

			if (this.energy > 30) {
				if (this.nbrPoney > 0)					{
					this.transform();
				}
				this.energy = 0;
			}

			if (this.nbrUnicorn > 0) {
				this.deadpool.jeDoisMeRegener();

				if (this.deadpool.isRegenerate === true) {
					if (this.nbrUnicorn > 0) {
						this.nbrPoney++;
						this.nbrUnicorn--;
						console.log('nombre de poney : ', this.nbrPoney);
						console.log('nombre de unicorn : ', this.nbrUnicorn);
						this.deadpool.isRegenerate = false;
					}
				}
			}

			if (this.nbrUnicorn > 0)			{
				this.spider.jeDoischevauche();

				if (this.spider.isChevauche === true) {
					if (this.nbrUnicorn !== 0) {
						this.nbrPoney++;
						this.nbrUnicorn--;
						console.log('Spider man : je fait de la licorne :)');
						console.log('nombre de poney : ', this.nbrPoney);
						console.log('nombre de licorne : ', this.nbrUnicorn);
						this.deadpool.isChevauche = false;
					}
				}
			}
		}, 1000);

		this.clock.startClock();
		console.log('********* NIGHT **********');
		ev.on('Cycle change', period => {
			if (period === 'day') {
				console.log('\n*********** DAY ! ***********');
			} else {
				console.log('\n********* NIGHT ***********');
			}
		});
	}

	transform() {
		this.deadpool.transformToUnicorn()
      .then(() => {
	this.isUnicorn = true;
	console.log('transformation to licorne ??');
	console.log('Transform autoriser');
	this.nbrPoney--;
	this.nbrUnicorn++;
	console.log('nombre de poney : ', this.nbrPoney);
	console.log('nombre de licorne : ', this.nbrUnicorn);
})
      .catch(() => {
	console.log('transformation to licorne ??');
	console.log('Transform rejected');
	console.log('nombre de poney :', this.nbrPoney);
	console.log('nombre de licorne : ', this.nbrUnicorn);
});
     // .finally(() => this.energy = 0);
		this.energy = 0;
		if (this.energy < 30) {
			console.log('Poney : il me manque de l\'energie');
		}
	}

}

module.exports = {Poney};

