const Joi = require('joi');

// Validator for booking data
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

// Validator for user data in registration (for consistency across different files)
const validateUserRegistration = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Name is required',
      'any.required': 'Name is required',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
    }),
    phone: Joi.string().required().messages({
      'string.empty': 'Phone number is required',
      'any.required': 'Phone number is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required',
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateBooking, validateUserRegistration };
