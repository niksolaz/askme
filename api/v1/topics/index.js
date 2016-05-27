module.exports = function(router) {
    router.get('/topics', function(req, res) {

        res.json({"topics": []})
    });

    return router;
}
