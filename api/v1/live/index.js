module.exports = function(model, router) {
    router.get('/live', function(req, res) {
        console.log("writing now.....")
        res.json({"live": []})
    });

    router.get('/live/writing', function(req, res) {

        res.json({"writing_now": []})
    });

    return router;
}
