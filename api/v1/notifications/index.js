module.exports = function(model, router) {
    router.get('/notifications', function(req, res) {
        res.json({"notifications":"Not implemented"})
    });

    router.get('/notifications/:notificationId', function(req, res) {
        res.json({"notification":"Not implemented"})
    });

    return router;
}
