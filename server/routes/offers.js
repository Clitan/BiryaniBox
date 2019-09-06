import {
  Offer,
  validate
} from '../model/offer';
import express from 'express';
const router = express.Router();
// import auth from '../middleware/auth';
import OfferController from '../controllers/OfferController';
const OfferControllerClass = new OfferController(Offer);

router.get('/', async (req, res) => await OfferControllerClass.getAll(req, res));

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  OfferControllerClass.createOffer(req, res);
});

router.put('/:id', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return resError(res, error.details[0].message);
  const offer_id = await Offer.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Offer with the given ID was not found.');

  await OfferControllerClass.update(req, res);
});

router.delete('/:id', async (req, res) => {
  const offer_id = await Offer.findById(req.params.id);
  if (!offer_id) return resError(res, 'The Offer with the given ID was not found.');

  await OfferControllerClass.remove(req, res);
});

router.get('/:id', async (req, res) => {
  const offer_id = await Offer.findById(req.params.id);
  if (!offer_id) return resError(res, 'The Offer with the given ID was not found.');
  await OfferControllerClass.getOne(req, res);
});



module.exports = router;
