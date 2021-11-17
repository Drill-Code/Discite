const { User } = require('../models');
const logger = require('../utils/logger');

const create = async (req, res) => {
  const { body } = req;
  try {
    const user = await User.create(body);
    return res.status(200).json({ user });
  } catch (error) {
    logger.error('An error occurred creating user.');
    logger.error(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
};
