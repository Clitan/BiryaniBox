import 'babel-polyfill';
import BaseController from './BaseController';
import {
  resSuccess,
  resError
} from '../helper/http_handler.helper';
import {
  Customer
} from '../models/customer';
import {
  Offer
} from '../models/offer';
import {
  user_offerModel
} from '../models/user_offer_connect';

export default class User_OfferController extends BaseController {


  async createUserOffer(req, res, next) {
    const offers = await Offer.findById(req.body.offerId);
    if (!offers) return resError(res, "Offer does not exist");

    const customers = await Customer.findById(req.body.customerId);
    if (!customers) return resError(res, "Customer Id does not exists")

    const user_offer = new user_offerModel({
      offer: {
        _id: offers._id,
        name: offers.name,
        discount: offers.discount,
        upto: offers.upto,
        expiryDate: offers.expiryDate,
        offerTypeId: offers.offerTypeId
      },
      customer: {
        _id: customers._id,
        name: customers.name,
        phone: customers.phone,
        email: customers.email,
        address: customers.address
      }
    });
    await user_offer.save()
      .then(savedObject => resSuccess(res, savedObject))
      .catch(e => console.log(e.message));
  }
}
