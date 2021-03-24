const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sales = new Schema({
    
    products : Array,
    total_amount : Number


},   {
    timestamps: true
})

module.exports = mongoose.model('Sales', Sales)