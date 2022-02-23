const itemDataMapper = require('../models/item');
// const { ApiError } = require('../helpers/errorHandler');

module.exports = {
  /**
     * Item controller to get all records.
     * ExpressMiddleware signature
     * @param {object} _ Express req.object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
  async getAll(_, res) {
    const posts = await itemDataMapper.findAll();
    return res.json(posts);
  },
};
