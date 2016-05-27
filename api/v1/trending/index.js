module.exports = function(router) {
    router.get('/trending', function(req, res) {

        res.json({"trending": []})
    });

    return router;
}
