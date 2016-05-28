module.exports = function(model, router) {
    router.get('/search', function(req, res) {

        res.json({"search": []})
    });

    return router;
}
