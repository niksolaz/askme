module.exports = function(model,router) {
    router.get('/auth', function(req, res) {

        res.json({"auth": "Not implemented"})
    });

    return router;
}
