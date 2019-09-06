import {
  Offer,
  validate
} from '../model/offer';
import {
  Customer
} from '../model/customer';
import {
  user_offerModel
} from '../model/user_offer_connect';
import express from 'express';
const router = express.Router();
import User_OfferController from '../controllers/User_OfferController';
import {
  resError
} from '../helper/http_handler.helper';
const User_OfferControllerClass = new User_OfferController(user_offerModel);
router.post('/', async (req, res) => {
  // const {
  //     error
  // } = validate(req.body);
  // if (error) return resError(res, error);
  await User_OfferControllerClass.createUserOffer(req, res);

});

router.get('/', async (req, res) => await User_OfferControllerClass.getAll(req, res));


router.put('/:id', async (req, res) => {
  const {
    error
  } = validate(req.body);
  const offer_id = await Offer.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');
  const customer_id = await Customer.findById(req.params.id);

  if (!customer_id) return resError(res, 'The Customer with the given ID was not found.');
  if (error) return resError(res, error.details[0].message);
  User_OfferControllerClass.update(req, res);
});

router.delete('/:id', async (req, res) => {
  const offer_id = await Offer.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');
  const customer_id = await Customer.findById(req.params.id);

  if (!customer_id) return resError(res, 'The Customer with the given ID was not found.');
  User_OfferController.remove(req, res);
});

router.get('/:id', async (req, res) => {
  const offer_id = await Offer.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');
  const customer_id = await Customer.findById(req.params.id);

  if (!customer_id) return resError(res, 'The Customer with the given ID was not found.');

  await User_OfferController.getOne(req, res);
});

module.exports = router;
