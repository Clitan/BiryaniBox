import Joi from 'joi';
import mongoose from 'mongoose';
import {
  offerSchema
} from './offer';
import {
  customerSchema
} from './customer';


const user_offerSchema = new mongoose.Schema({
  offer: {
    type: offerSchema
  },
  customer: {
    type: customerSchema
  }
});

export const user_offerModel = mongoose.model('User_Offer_Connection', user_offerSchema);

// function validateuserOffer(offer) {
//   const schema = {
//     offerId: Joi.objectId(),
//     customerId: Joi.objectId()
//   };
//   return Joi.validate(offer, schema);
// }
exports.user_offerSchema = user_offerSchema;
// exports.validate = validateuserOffer;
