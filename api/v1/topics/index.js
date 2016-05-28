module.exports = function(model, router) {
    router.get('/topics', function(req, res) {
        model.run().then(function(result){
          console.log("Topics....", result);
          res.json({data:result})
        })
        .catch(function(error){
          console.log("Error retrieving the topics...", error);
          res.json({error:error})
        })

    });

    router.get('/topics/:topicId', function(req, res) {
        var topicId = req.params.topicId;
        model.get(topicId).run()
        .then(function(result){
          res.json(result)
        })
        .catch(function(error){
          res.json(error)
        })
    });

    return router;
}
