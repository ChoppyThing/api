/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'photography',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: 'string'
    },

    text: {
      type: 'text'
    },

    cdate: {
      type: 'datetime'
    },

    mdate: {
      type: 'datetime'
    },

    user: {
      model:'contact',
      columnName: 'user_id',
      unique: true
    },

    url: {
      type: 'string'
    },

    category: {
      model: 'category',
      columnName: 'category_id'
    }
  }
};

