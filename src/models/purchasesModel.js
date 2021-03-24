const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Purchases= new Schema({
    
    products : Array,
    total_amount : Number


},   {
    timestamps: true
})

module.exports = mongoose.model('Purchases', Purchases)