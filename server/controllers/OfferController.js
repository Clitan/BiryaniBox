import 'babel-polyfill';
import BaseController from './BaseController';
import {
  resSuccess,
  resError
} from '../helper/http_handler.helper';
import {
  OfferType
} from '../model/offerType';
import {
  Offer
} from '../model/offer';

export default class OfferController extends BaseController {

  async createOffer(req, res, next) {
    const offerTypes = await OfferType.findById(req.body.offerTypeId);
    if (!offerTypes) return resError(res, "Offer Type does not exist");

    const offer = new Offer({
      name: req.body.name,
      discount: req.body.discount,
      upto: req.body.upto,
      expiryDate: req.body.expiryDate,
      offerType: {
        _id: offerTypes._id,
        name: offerTypes.name
      }
    });
    await offer.save()
      .then(savedObject => resSuccess(res, savedObject))
      .catch(e => console.log(e.message));
  }
}
