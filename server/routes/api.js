const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Cu} = require('../model/customer');
// console.log(Customer.find);


mongoose.connect('mongodb+srv://admin:password12345@biryanibox-vi1r7.gcp.mongodb.net/Biryani_Box?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('Conncected to mongodb'))
.catch(err => console.error('Could not found'));

router.get('/customers', async (req, res)=>{
const customer = await Cu.find();
console.log(customer);
res.send(customer);
});



module.exports = router;