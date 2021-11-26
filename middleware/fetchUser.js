const joi = require('joi');
const logger = require('../utils/logger');

const validateFetchUser = async (req, res, next) => {
  const schema = joi.object({
    first_name: joi.string(),
    last_name: joi.string(),
    email: joi.string(),
    phone: joi.string(),
    country: joi.string(),
    state: joi.string(),
    zip_code: joi.string(),
  });

  try {
    await schema.validateAsync( req.body, req.params.id);
    return next();
  } catch (error) {
    logger.error('An error occurred fetching user');
    return next(error);
  }
};

module.exports = {
  validateFetchUser,
};
