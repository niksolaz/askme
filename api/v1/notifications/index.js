module.exports = function(router) {
    router.get('/notifications', function(req, res) {

        var notifications = [{id: 3}, {id:4}]
        res.json(notifications)
    });

    router.get('/notifications/:notificationId', function(req, res) {
        var id = req.params.userId;
        var notification = {
          id: id
        }
        res.json(notification)
    });

    return router;
}
