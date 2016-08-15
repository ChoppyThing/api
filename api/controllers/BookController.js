/**
 * BookController
 */

module.exports = {
    getBookCategories: function(req, res) {
        Category.find({type: 'book'}).exec(function(err, response) {
            res.send(response);
        });
    },

    getAllByCategory: function(req, res) {
        var id = req.param('category');

        Photography.find({category_id: id}).exec(function(err, photos) {
            if (err) {
                throw err;
            }

            if (photos === undefined) {
                photos = [];
            }

            var data = {data: photos};
            data.success = true;
            data.category = id;

            res.send(data);
        });
    }
};
