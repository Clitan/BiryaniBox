import Joi from 'joi';
import mongoose from 'mongoose';

const Delivery_user_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 255
  },
  phoneNumber: {
    type: Number,
    maxlength: 10
  },
  // city: {
  //   type:String
  // },
  // district: {
  //   type: String
  // },
  // pincode: {
  //   type: Number
  // },
  delivery_boy_address: {
    type: String,
    trim: true,
    minlength: 5,
    maxlength: 500
  }
});

export const Delivery_user = mongoose.model('Delivery_users', Delivery_user_Schema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(2).max(255).required(),
    phoneNumber: Joi.number().required(),
    // city: Joi.string().required(),
    // district: Joi.string().required(),
    // pincode: Joi.string().required(),
    delivery_boy_address: Joi.string().min(5).max(500).required()
  };
  return Joi.validate(user, schema);
}

exports.Delivery_user_Schema = Delivery_user_Schema;
exports.validate = validateUser;
