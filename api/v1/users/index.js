
var _ = require('lodash');

module.exports = function(model, router) {
    router.get('/users', function(req, res) {
        console.log("run", model.run())
        model.run().then(function(result){
          console.log("Users....", result);
          res.json({data:result})
        })
        .catch(function(error){
          console.log("Error retrieving the users...", error);
          res.json({error:error})
        })

    });

    router.get('/users/:userId', function(req, res) {
        var userId = req.params.userId;
        var user = {
          id: userId
        }
        res.json(user)
    });

    return router;
}
