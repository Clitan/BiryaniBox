import Joi from 'joi';
import mongoose from 'mongoose';

const Delivery_user_Schema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 255
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true
  },
  salary: {
    type: Number
  },
  phoneNumber: {
    type: Number,
    maxlength: 10
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  pincode: {
    type: Number
  },
  delivery_boy_address: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 500
  },
  isAvailable: {
    type: Boolean
  }
});

export const Delivery_user = mongoose.model('Delivery_users', Delivery_user_Schema);

function validateUser(user) {
  const schema = {
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    salary: Joi.number().required(),
    phoneNumber: Joi.number().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    pincode: Joi.number().required(),
    delivery_boy_address: Joi.string().min(5).max(500).required(),
    isAvailable: Joi.boolean().required()
  };
  return Joi.validate(user, schema);
}

exports.Delivery_user_Schema = Delivery_user_Schema;
exports.validate = validateUser;
