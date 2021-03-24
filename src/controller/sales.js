const Sales = require('../models/salesModel')
const Products = require('../models/productsModel')


exports.getSales = (req, res, next) => {

    Sales.find({})
    .then(data=> res.json(data))
    .catch(err => console.log('Error found', err))
    
}

exports.createSales = (req, res, next) => {
    
    const products = req.body.products;
    const total_amount = req.body.price;

    const NewSale = new Sales({
        products, total_amount
    });

    NewSale.save()
        .then(response => {
                res.status(201).json(
                    {
                        messages : 'Sales created',
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

exports.getSpecificSales = (req, res, next) => {
    const id = req.params.id
    Sales.findById(id)
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.deleteSales = (req, res, next) => {
    const id = req.params.id
    Sales.deleteOne({_id : id})
    .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}

exports.editSales = (req, res, next) => {
   const id = req.params.id
   const updatedData = {
       nama : req.body.nama,
       kode : req.body.kode,
       stok : req.body.stok,
       harga : req.body.harga
   }
   Sales.replaceOne({_id : id}, updatedData)
   .then(data => res.json(data))
    .catch(err => console.log('Error found', err))
}