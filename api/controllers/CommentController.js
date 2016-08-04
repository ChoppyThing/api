/**
 * CommentController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getComments: function(req, res) {
        var note = req.param('note');

        if (!note) {
            res.send({success: false, message: 'No post id'});
        }

        Comment.find({news_id: note}).exec(function(err, response) {
            res.send(response);
        });
    },

    addComment: function(req, res) {
        var commentJson = req.body;
        Comment.create(commentJson).exec(function(err, comment) {
            if (err) {
                throw err;
            }

            var data = comment;
            data.success = true;

            res.send(data);
        });
    }
};
