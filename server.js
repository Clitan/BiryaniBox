const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');
const addons = require('./server/routes/addons_routes');
const delivery_boy = require('./server/routes/delivery_boy_routes');
const mongoose = require('mongoose');
const order = require('./server/routes/orders');
const menu = require('./server/routes/menu.routes');
const customers = require('./server/routes/customer_routes');
const delivery_routes = require('./server/routes/delivery_routes');
const users = require('./server/routes/users');
const login = require('./server/routes/login');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./server/model/connections/mongodb.connection')();


app.use('/api/customers', customers);
app.use('/api/admin', users);
app.use('/api/login', login);
app.use('/api/orders', order);
app.use('/api/delivery_boy', delivery_boy);
app.use('/api/delivery', delivery_routes);
app.use('/api/menu', menu);
app.use('/api/addons', addons);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));

});
app.listen(port, function () {
  console.log("Running on port" + port);
});

export default app;
