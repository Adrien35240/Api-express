const client = require('../config/postgres');
// const { ApiError } = require('../helpers/errorHandler');

/**
 * @typedef {object} Item
 * @property {number} id - Indentifiant unique, Pk de la table
 */

module.exports = {
  /**
   * Récupère tout sans filtre ni ordre
   * @returns {Item[]} - Tous les items dans la base de donnée
   */
  async findAll() {
    const result = await client.query('SELECT * FROM "rando"');
    return result.rows;
  },

  /**
   * Récupère par sont id
   * @param {number} itemId - L'id de la rando souhaitée
   * @returns {(Item|undefined)} - La Rando souhaitée ou undefined si aucune Rando à cet id
   */
  async findByPk(itemId) {
    const result = await client.query('SELECT * FROM "rando" WHERE id = $1', [itemId]);

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
  // ex catching error
  // throw new ApiError(400, 'message');
};
