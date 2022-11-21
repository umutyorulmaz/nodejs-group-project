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

 const transactionSchema = new mongoose.Schema({
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
        __id:{
            default:mongoose.Types.ObjectId,
        }, //ObjectId("62428623209adfad7175feb2"),
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: "250",
        status:"SUCCESS",
        gasUsed:"1500",
        receiptHash:"0ee9f698073f59793f8c2a28498039e2",
        createdAt:"2022-03-29T04:08:03.172+00:00",
        updatedAt:"2022-05-29T04:08:03.172+00:00",
        __v:0

      },{
        __id: {
            default:mongoose.Types.ObjectId,
        }, //ObjectId("62428623209adfad7175feb2"),
        source: '0xf39Fd6e51aajhkF4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: "250",
        status:"SUCCESS",
        gasUsed:"2100",
        receiptHash:"a650ae081643b9f52797adc89507f335",
        createAt:"2022-07-29T04:08:03.172+00:00",
        updatedAt:"2022-09-29T04:08:03.172+00:00",
        __v:0
      },{
        __id: {
            default:mongoose.Types.ObjectId,
        }, //ObjectId("62428623209adfad7175feb2"),
        source: '0xf39Fd6e5ztyF4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: "250",
        status:"SUCCESS",
        gasUsed:"3000",
        receiptHash:"y12te081643b9f52797adc89507f335",
        createdAt:"2022-11-29T04:08:03.172+00:00",
        updatedAt:"2022-13-29T04:08:03.172+00:00",
        __v:0
      }
]).then(function(){
    console.log("Transaction data inserted")  // Success
}).catch(function(error){
    console.log(`Error loading Transaction data`)      // Failure
});