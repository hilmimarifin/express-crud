const express = require('express');
const router = express.Router();
const productsController = require('../controller/products');
const salesController = require('../controller/sales');
const purchasesController = require('../controller/purchases');



//PRODUCTS ROUTER
router.get('/products', productsController.getProducts);
router.post('/products', productsController.createProducts);
router.get('/products/:id', productsController.getSpecificProducts);
router.delete('/products/:id', productsController.deleteProducts);
router.put('/products/:id', productsController.editProducts);

//SALES ROUTER
router.get('/sales', salesController.getSales);
router.post('/sales', salesController.createSales);
router.get('/sales/:id', salesController.getSpecificSales);
router.delete('/sales/:id', salesController.deleteSales);
router.put('/sales/:id', salesController.editSales);

//PURCHASES ROUTER
router.get('/purchases', purchasesController.getPurchases);
router.post('/purchases', purchasesController.createPurchases);
router.get('/purchases/:id', purchasesController.getSpecificPurchases);
router.delete('/purchases/:id', purchasesController.deletePurchases);
router.put('/purchases/:id', purchasesController.editPurchases);



module.exports = router;