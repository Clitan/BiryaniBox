import {
  OfferType,
  validate
} from '../models/offerType';
import auth from '../middleware/auth';
import express from 'express';
const router = express.Router();
import BaseController from '../controllers/BaseController';
import {
  resError
} from '../helper/http_handler.helper';
const OfferTypeControllerClass = new BaseController(OfferType);
router.post('/', auth, async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return resError(res, error.details[0].message);
  await OfferTypeControllerClass.create(req, res);

});

router.get('/', async (req, res) => await OfferTypeControllerClass.getAll(req, res));


router.put('/:id', auth, async (req, res) => {
  const {
    error
  } = validate(req.body);
  const offer_id = await OfferType.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');
  if (error) return resError(res, error.details[0].message);
  OfferTypeControllerClass.update(req, res);
});

router.delete('/:id', auth, async (req, res) => {
  const offer_id = await OfferType.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');
  OfferTypeControllerClass.remove(req, res);
});

router.get('/:id', async (req, res) => {
  const offer_id = await OfferType.findById(req.params.id);

  if (!offer_id) return resError(res, 'The Item with the given ID was not found.');

  await OfferTypeControllerClass.getOne(req, res);
});

module.exports = router;
