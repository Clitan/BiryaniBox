import {
  Notification,
  validate
} from '../model/notification';
// import auth from '../middleware/auth';
import express from 'express';
const router = express.Router();
import {
  resError
} from '../helper/http_handler.helper';


import BaseController from '../controllers/BaseController';
const NotificationClass = new BaseController(Notification);

router.get('/', async (req, res) => await NotificationClass.getAll(req, res));

router.post('/', async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  await NotificationClass.create(req, res);

});


router.delete('/:id', async (req, res) => {
  const notificationId = await Notification.findById(req.params.id);
  if (!notificationId) return resError(res, 'The notification with the given ID was not found.');

  await NotificationClass.remove(req, res);
});

router.get('/:id', async (req, res) => {
  const notificationId = await Notification.findById(req.params.id);
  if (!notificationId) return resError(res, 'The notification with the given ID was not found.');
  await NotificationClass.getOne(req, res);
});

module.exports = router;
