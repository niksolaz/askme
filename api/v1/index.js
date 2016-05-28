var models = require('./db');

module.exports = function(router){
  var routes =  {
    "users": require('./users')(models.User, router),
    "notifications": require('./notifications')(models.Notification, router), // Not implemented yet
    "auth": require('./auth')(models.Auth, router), // Not implemented yet
    "answers": require('./answers')(models.Answer, router),
    "questions": require('./questions')(models.Question, router),
    "search": require('./search')(models, router), // Not implemented yet
    "topics": require('./topics')(models.Topic, router),
    "trending": require('./trending')(models, router), // Not implemented yet
    "live": require('./live')(models, router) // Not implemented yet
  }
  return router;
}
