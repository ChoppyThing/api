/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function (req, res) {
		News.find().exec(function(err, response) {
			return res.send(response);
		});
  },
  
  bye: function (req, res) {
    return res.redirect("http://www.sayonara.com");
  }
};

