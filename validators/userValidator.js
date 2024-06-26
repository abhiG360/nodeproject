const Joi = require('joi');

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(18).required(),
    city: Joi.string().required(),
    zipCode: Joi.string().pattern(new RegExp('^[0-9]{5}$')).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateId = (req, res, next) => {
  const schema = Joi.object({
    userId: Joi.string().length(24).required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = { validateUser, validateId };
