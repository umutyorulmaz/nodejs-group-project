const {addresses} = require( "../data") ;
const events = require('events');
const eventEmitter = new events.EventEmitter;

const getAddress=()=> {
    
    console.log(addresses);
    //return addresses 
};

const getBalance=(address)=> {
    
    eventEmitter.emit('ready');//not working I dont know why
    address = "account: " + addresses [0]+'\n' + "balance: 100 ETH";
    console.log(address);
    
    //return address
};

module.exports = { 
    getAddress, 
    getBalance
}
