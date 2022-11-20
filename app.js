const events = require ('events');
const eventEmitter = new events.EventEmitter;
const mongoose = require('mongoose');
const checkConnection = require('./seed');

mongoose.connect('mongodb+srv://umutyor12:anibal16@cluster0.nnk2f5u.mongodb.net/test').then(checkConnection);
// mongoose.connect ('mongodb+srv://umutyor12:anibal16@cluster0.nnk2f5u.mongodb.net/test');
// mongoose.then();

eventEmitter.on('ready', () => console.log("getBalance module called.."));


const wallet = require ("./modules/accounts");


wallet.getAddress();
wallet.getBalance();
