import mongoose from 'mongoose';
import 'babel-polyfill';

module.exports = function () {
  mongoose.connect('mongodb+srv://admin:password12345@biryanibox-vi1r7.gcp.mongodb.net/Biryani_Box?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB'));
}
