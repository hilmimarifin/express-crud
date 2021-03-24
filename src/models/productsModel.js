const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Products = new Schema({
    nama : {
        type : String,
        required : true
    },
    kode: {
        type : String,
        required : true
    },
    stok: {
        type : Number,
        required : true
    },
    harga: {
        type : Number,
        required : true
    },

},   {
    timestamps: true
})

module.exports = mongoose.model('Products', Products)