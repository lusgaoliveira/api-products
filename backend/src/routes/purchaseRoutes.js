const express = require("express");

const PurchaseController = require('../controllers/purchaseController');
const PurchaseRouter = express.Router();

PurchaseRouter.post("/register", PurchaseController.register);
PurchaseRouter.get("/", PurchaseController.findAllPurchases);
PurchaseRouter.get("/:id", PurchaseController.findPurchaseById);
PurchaseRouter.delete("/:id", PurchaseController.cancelPurchase);

module.exports = PurchaseRouter;