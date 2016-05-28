module.exports = function(model, router) {
    router.get('/questions', function(req, res) {
        model.run().then(function(result){
          console.log("Questions....", result);
          res.json({data:result})
        })
        .catch(function(error){
          console.log("Error retrieving the questions...", error);
          res.json({error:error})
        })

    });

    router.get('/questions/:questionId', function(req, res) {
        var questionId = req.params.questionId;
        model.get(questionId).run()
        .then(function(result){
          res.json(result)
        })
        .catch(function(error){
          res.json(error)
        })
    });

    return router;
}
