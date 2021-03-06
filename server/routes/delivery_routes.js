import {
  validate
} from '../model/delivery';
// import {
//     Delivery_user
// } from '../models/delivery_boy_model';
import {
  Delivery
} from '../model/delivery';
import express from 'express';
const router = express.Router();
// console.log(Delivery);
import DeliveryController from '../controllers/DeliveryController';
const DeliveryControllerClass = new DeliveryController(Delivery);

router.get('/', async (req, res) => await DeliveryControllerClass.getAll(req, res));

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  DeliveryControllerClass.createDelivery(req, res);
});

router.put('/:id', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return resError(res, error.details[0].message);
  console.log(delivery);
  const delivery_id = await Delivery.findById(req.params.id);

  if (!delivery_id) return resError(res, 'The Delivery with the given ID was not found.');

  await DeliveryControllerClass.update(req, res);
});

router.delete('/:id', async (req, res) => {
  const delivery_id = await Delivery.findById(req.params.id);
  if (!delivery_id) return resError(res, 'The Delivery with the given ID was not found.');

  await DeliveryControllerClass.remove(req, res);
});

router.get('/:id', async (req, res) => {
  const delivery_id = await Delivery.findById(req.params.id);
  if (!delivery_id) return resError(res, 'The Delivery with the given ID was not found.');
  await DeliveryControllerClass.getOne(req, res);
});

module.exports = router;
