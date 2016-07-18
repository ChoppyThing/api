/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    get: function (req, res) {
        var number = 3;
        var page = req.param('page');

        News.find().paginate({page: page, limit: number}).exec(function(err, response) {
            return res.send(response);
        });
    },
  
    bye: function (req, res) {
        return res.redirect("http://www.sayonara.com");
    }
};

