/**
 * Category.js
 */

module.exports = {

  tableName: 'category',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: 'string'
    },

    description: {
      type: 'text'
    },

    news: {
      collection:'news',
      via: 'category',
      through: 'newscategory'
    }
  }
};

