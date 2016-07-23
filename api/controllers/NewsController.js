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

        sails.async.parallel({
            data: function(callback) { 
                News.find().paginate({page: page, limit: number}).exec(function(err, response) {
                    callback(null, response);
                });
            },
            total: function(callback) {
                News.count().exec(function(err, data) {
                    callback(null, data);
                });
            }
        }, function(error, results) {
            results.page = page;
            results.number = number;
            
            res.send(results);
        });
    },
  
    bye: function (req, res) {
        return res.redirect("http://www.sayonara.com");
    }
};

