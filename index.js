const {Poney} = require('./poney.js');

// Const Promise = require('bluebird');

const {Clock, ev} = require('./clock');

const poney = new Poney();

const clock = new Clock();

clock.begin();

poney.initialisation(ev);

