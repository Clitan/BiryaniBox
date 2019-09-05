const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const addons=require('./server/routes/addons_routes');

const api = require('./server/routes/api');

const port = 4200;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



// app.use('/api', api);
// app.use('/api/customer', customers);
// app.use('/api/admin', users);
// app.use('/api/login', login);
// app.use('/api/orders', order);
// app.use('/api/delivery_boy', delivery_users);
// app.use('/api/delivery', delivery_routes);
// app.use('/api/menu', menu);
app.use('/api/addons', addons);


app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist/index.html'));

});

app.listen(port, function(){
    console.log("Running on port" +port);
});