import Joi from 'joi';
import mongoose from 'mongoose';

const offerTypeSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

export const OfferType = mongoose.model('OfferType', offerTypeSchema);

function validateOffer(offer) {
  const schema = {
    name: Joi.string().min(1).max(255).required()
  };
  return Joi.validate(offer, schema);
}

exports.offerTypeSchema = offerTypeSchema;
exports.validate = validateOffer;
