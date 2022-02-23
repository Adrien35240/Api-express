const express = require('express');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// const validate = require('../validation/validator');
// const {schemaCreate} = require('../validation/schemas/index');

const { postController: controller } = require('../controllers');
const controllerHandler = require('../helpers/apiControllerHandler');

router
  .route('/api/item')
  /**
   * GET /api/item
   * @summary Get all items
   * @tags Post
   * @return {[Item]} 200 - success response - application/json
   */
  .get(controllerHandler(controller.getAll))
  /**
   * POST /api/item
   * @summary Create a item
   * @tags Item
   * @param {InputItem} request.body.required - post info
   * @return {Item} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   */
  .post(validate('body', schemaCreate), controllerHandler(controller.create));

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
