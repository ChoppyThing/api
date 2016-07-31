/**
 * Comment.js
 */

module.exports = {

  tableName: 'comment',
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

    comment: {
      type: 'text'
    },

    news: {
      model:'news',
      columnName: 'news_id'
    }
  }
};

