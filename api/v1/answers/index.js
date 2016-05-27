module.exports = function(router) {
    router.get('/answers', function(req, res) {

        res.json({"answers": []})
    });

    return router;
}
