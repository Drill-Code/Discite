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

const update = async (req, res, next) => {
  try {
      const id = req.params.id;
      const updates = req.body
      const result = await User.findByIdAndUpdate(id, updates);
      return res.status(200).json({result});

  } catch (error) {
    logger.error('An error occurred updating user.');
    logger.error(error);
    return res.status(500).json(error);
  }
}

module.exports = {
  create,
  update
};
