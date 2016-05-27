module.exports = function(router) {
    router.get('/questions', function(req, res) {

        res.json({"questions": []})
    });

    return router;
}
