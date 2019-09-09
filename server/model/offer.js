import Joi from 'joi';
import mongoose from 'mongoose';
import {
  offerTypeSchema
} from './offerType';

const offerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  discount: {
    type: Number
  },
  upto: {
    type: Number
  },
  expiryDate: {
    type: Date
  },
  offerType: {
    type: offerTypeSchema
  }
});

export const Offer = mongoose.model('Offer', offerSchema);

function validateOffer(offer) {
  const schema = {
    name: Joi.string().min(1).max(255),
    discount: Joi.number(),
    upto: Joi.number(),
    expiryDate: Joi.date(),
    offerTypeId: Joi.objectId()
  };
  return Joi.validate(offer, schema);
}

exports.offerSchema = offerSchema;
exports.validate = validateOffer;
