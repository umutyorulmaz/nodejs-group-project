const events = require ('events');
const eventEmitter = new events.EventEmitter;
const mongoose = require('mongoose');
const checkConnection = require('./seed');
const Transaction = require('./seed');
const app = require('./nodejs-group-project-exp/app');
const express = require('express');
var cors = require('cors');
const path = require('path');
const wallet = require ("./modules/accounts");

const axios = require('axios').default;
//const Schema = mongoose.Schema;
//const transactionSchema = require('./seed')
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
//app.use(cors());

//a.fill(wallet.getAddress());
console.log(typeof a);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // const getAddress=()=> {
    
    //     console.log(addresses);
    //     //return addresses 
    // };
    res.send(getAddress());
    //res.send(wallet.getBalance());

});

mongoose.connect('mongodb+srv://umutyor12:anibal16@cluster0.nnk2f5u.mongodb.net/test').then(checkConnection);
Transaction;

// wallet.getAddress();
// wallet.getBalance();


eventEmitter.on('ready', () => console.log("getBalance module called.."));

// const PORT = process.env.PORT || 3001;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));








