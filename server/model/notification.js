import Joi from 'joi';
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  notification: {
    type: String,
    trim: true
  }
});

export const Notification = mongoose.model('Notifications', notificationSchema);

function validateNotification(user) {
  const schema = {
    notification: Joi.string()
  };
  return Joi.validate(user, schema);
}

exports.notificationSchema = notificationSchema;
exports.validate = validateNotification;
