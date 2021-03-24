const Products = require('../models/productsModel')
const Purchases = require('../models/purchasesModel')

exports.getProducts = (req, res, next) => {

    Products.find({})
    .then(data=> res.json(data))
    .catch(err => console.log('Error found', err))
    
}

exports.createProducts = (req, res, next) => {
    const nama = req.body.nama;
    const stok = req.body.stok;
    const kode = req.body.kode;
    const harga = req.body.harga;

    const NewProduct = new Products({
        nama : nama,
        stok : stok,
        kode : kode,
        harga : harga
    });

    NewProduct.save()
        .then(response => {
            res.status(201).json(
                {
                    messages : 'Product created',
                    data : response
                }
            );
        //ADDING ITEM TO PURCHASING TRANSACTION
        const newPurchases = new Purchases({
            products : response
        })
                
        })
        .catch(err => console.log('error: ', err));
    //next();
}

exports.getSpecificProducts = (req, res, next) => {
    const id = req.params.id
    Products.findById(id)
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.deleteProducts = (req, res, next) => {
    const id = req.params.id
    Products.deleteOne({_id : id})
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.editProducts = (req, res, next) => {
   const id = req.params.id
   const updatedData = {
       nama : req.body.nama,
       kode : req.body.kode,
       stok : req.body.stok,
       harga : req.body.harga
   }
   Products.replaceOne({_id : id}, updatedData)
   .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}