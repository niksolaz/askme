module.exports = function(router) {
    router.get('/auth', function(req, res) {

        res.json({"auth": []})
    });

    return router;
}
