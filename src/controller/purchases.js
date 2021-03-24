const Purchases = require('../models/purchasesModel')
const Products = require('../models/productsModel')


exports.getPurchases = (req, res, next) => {

    Purchases.find({})
    .then(data=> res.json(data))
    .catch(err => console.log('Error found', err))
    
}

exports.createPurchases = (req, res, next) => {
    
    const products = req.body.products;
    const total_amount = req.body.price;

    const NewPurchase = new Purchases({
        products, total_amount
    });

    NewPurchase.save()
        .then(response => {
                res.status(201).json(
                    {
                        messages : 'Purchases created',
                        data : response
                    }
                );
                
            //updating stok value for each product
            const ids = response.products.map(id2=>{ return {id : id2.productsID, quantity : id2.quantity} })       
            ids.forEach(element => {
                Products.findById(element.id)
                .then(result=> {
                    result.stok = result.stok-element.quantity;
                    return result.save();
                })
                .catch(err => console.log('error: ', err))
            });         
        })
        .catch(err => console.log('error: ', err));
    //next();
}

exports.getSpecificPurchases = (req, res, next) => {
    const id = req.params.id
    Purchases.findById(id)
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.deletePurchases = (req, res, next) => {
    const id = req.params.id
    Purchases.deleteOne({_id : id})
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.editPurchases = (req, res, next) => {
   const id = req.params.id
   const updatedData = {
       nama : req.body.nama,
       kode : req.body.kode,
       stok : req.body.stok,
       harga : req.body.harga
   }
   Purchases.replaceOne({_id : id}, updatedData)
   .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}