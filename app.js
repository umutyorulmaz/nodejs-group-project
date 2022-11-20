const events = require ('events')
const eventEmitter = new events.EventEmitter;

eventEmitter.on('ready', () => console.log("getBalance module called.."))

const wallet = require ("./modules/accounts")



wallet.getAddress()
wallet.getBalance()
