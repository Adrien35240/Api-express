const express = require('express');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

const { itemController } = require('../controllers');
const controllerHandler = require('../helpers/apiControllerHandler');
const { apiController } = require('../controllers');

// const validate = require('../validation/validator');
// const {schemaCreate} = require('../validation/schemas/index');

router
  .route('/api/item')
  /**
   * GET /api/item
   * @summary Get all items
   * @tags Item
   * @return {[Item]} 200 - success response - application/json
   */
  .get(controllerHandler(itemController.getAll));

router.route('/api').get(controllerHandler(apiController.home));
router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
