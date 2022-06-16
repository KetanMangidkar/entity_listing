const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        try {
            const product = await Product.create(req.body)
            return res.status(201).send(product);

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    } catch (error) {

    }
});

router.get("/items", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let productsize = req.query.productsize || 10;
        let sort = req.query.sort;
        const skip = (page-1)*productsize;
        const product = await Product.find(req.body).sort({Price:sort}).limit(productsize).skip(skip).lean().exec();
        return res.status(201).send({product});

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
});

module.exports = router;