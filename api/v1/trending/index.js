module.exports = function(model, router) {
    router.get('/trending', function(req, res) {

        res.json({"trending": "Not implemented yet"})
    });

    return router;
}
