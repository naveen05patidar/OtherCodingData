const express = require('express');
const RouterDisplay = express.Router();

RouterDisplay.get('/displaydata',(req,res)=>{
    try {
        res.status(200).send([global.ProductCategory,global.countryName,global.ProductSubCategory])
    } catch (error) {
       res.status(500).send(error.message) 
    }
})

module.exports = RouterDisplay;

// api link on this Component :  http://localhost:5000/api/displaydata