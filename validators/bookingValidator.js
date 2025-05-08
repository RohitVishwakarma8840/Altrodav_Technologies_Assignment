const Joi = require('joi');

// Validator for booking an activity
const validateBooking = (req, res, next) => {
  const schema = Joi.object({
    activityId: Joi.string().required().messages({
      'string.empty': 'Activity ID is required',
      'any.required': 'Activity ID is required',
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateBooking };
