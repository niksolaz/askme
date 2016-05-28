module.exports = function(model, router) {
    router.get('/answers', function(req, res) {
        model.run().then(function(result){
          console.log("Answers....", result);
          res.json({data:result})
        })
        .catch(function(error){
          console.log("Error retrieving the answers...", error);
          res.json({error:error})
        })

    });

    router.get('/answers/:answerId', function(req, res) {
        var answerId = req.params.answerId;
        model.get(answerId).run()
        .then(function(result){
          res.json(result)
        })
        .catch(function(error){
          res.json(error)
        })
    });

    return router;
}
