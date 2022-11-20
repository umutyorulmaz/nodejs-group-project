'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



mongoose.connect('mongodb+srv://umutyor12:anibal16@cluster0.nnk2f5u.mongodb.net/test');

//connection to mongoose
mongoose
 .connect('mongodb+srv://umutyor12:anibal16@cluster0.nnk2f5u.mongodb.net/test', { useNewUrlParser: true } )
 .then( () => { console.log("Mongoose connected successfully to Mongo DB"); },
   error => { console.log("Mongoose could not connected to database: " + error); }
 );

 const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    }
}, { timestamps: true })

var Transaction = module.exports = mongoose.model('Transaction', transactionSchema);

Transaction.insertMany([
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E'
      }
]).then(function(){
    console.log("Transaction data inserted")  // Success
}).catch(function(error){
    console.log(`Error loading Transaction data`)      // Failure
});