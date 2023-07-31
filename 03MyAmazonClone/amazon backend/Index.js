const express = require('express')
const app = express()
const PORT = 5000;
const mongodb = require('./DB.js')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const RouterDisplay = require('./Product/Product.route.js');
const userRouter = require('./User/User.route.js');

mongoose.Promise = global.Promise;
(async ()=>{
    try {
        await mongoose.connect(mongodb.DB,{useNewUrlParser:true})
        .then(()=>{
            console.log(`database is connected on ${mongodb.DB}`);
        });

    const fetched_Data = await mongoose.connection.db.collection('ProductCategory');
    const data = await fetched_Data.find({}).toArray(function(err,data){
        if (err) return err;
        else{
            return console.log(data);
        }
    })

    const fetched_Data2 = await mongoose.connection.db.collection('countryName');
    const data2 = await fetched_Data2.find({}).toArray(function(err,data){
        if (err) return err;
        else{
            return console.log(data);
        }
    })

    const fetched_Data3 = await mongoose.connection.db.collection('ProductSubCategory');
    const data3 = await fetched_Data3.find({}).toArray((err,data)=>{
        try {
            if (err) return err
            else{
                return console.log(data)
            }
        } catch (error) {
            console.log(`error occured is ${error}`);
        }
    })



    global.ProductCategory = data;
    global.countryName = data2;
    global.ProductSubCategory = data3;

    } catch (error) {
        console.log('Cannot connect to the database: ' + error);
    }

})();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',RouterDisplay);
app.use('/userapi',userRouter);

app.listen(PORT,()=>{
    console.log(`Server Started on Port No. ${PORT}`);
})