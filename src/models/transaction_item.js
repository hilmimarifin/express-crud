const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Transaction_item = new Schema({
    
    product_id : String,
    sales_id : String,
    purchase_id : String,
    quantity : Number


},   {
    timestamps: true
})

module.exports = mongoose.model('Transaction_item', Transaction_item)