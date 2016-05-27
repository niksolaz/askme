
var _ = require('lodash');

module.exports = function(router) {
    router.get('/users', function(req, res) {

        var users = [{id: 1}, {id:2}]

        res.json(users)
    });

    router.get('/users/:userId', function(req, res) {
        var userId = req.params.userId;
        var user = {
          id: userId
        }
        res.json(user)
    });

    return router;
}
