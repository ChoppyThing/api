// myApp/api/models/PetUser.js
module.exports = {

	tableName: 'news_categories',
	identity: 'newscategory',

  attributes: {
    news:{
      model:'category',
      columnName: 'category_id'
    },
    category: {
      model: 'news',
      columnName: 'news_id'
    }
  }
}