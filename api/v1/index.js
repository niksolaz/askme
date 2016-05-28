var models = require('./db');
console.log("MODELS", models);

module.exports = function(router){
  var routes =  {
    "users": require('./users')(models.User, router),
    "notifications": require('./notifications')(router),
    "auth": require('./auth')(router),
    "answers": require('./answers')(router),
    "questions": require('./questions')(router),
    "search": require('./search')(router),
    "topics": require('./topics')(router),
    "trending": require('./trending')(router),
    "live": require('./live')(router)
  }
  return router;
}
