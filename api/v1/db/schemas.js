var thinky = require('thinky')();
var r = thinky.r;
var type   = thinky.type;

console.log("Creating the models.....");
var Users = thinky.createModel("Users", {
  id: type.string().uuid(5),      // a normal string
  firstname: type.string(),  // a string of at least two characters
  lastname: type.string(),
  bio: type.string(),
  description: type.string(),
  email: type.string().email(),  // a string that is a valid email,
  topics: [{
      id: type.string(),
      name: type.string()
  }],
  education: [{
      id: type.string(),
      name: type.string()
  }],
  location: type.string(),
  employments: [type.string()],
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});


var Topics = thinky.createModel("Topics", {
  id: type.string().uuid(5),      // a normal string
  name: type.string(),  // a string of at least two characters
  description : type.string(),
  createdAt: type.date().default(r.now())
});

var Questions = thinky.createModel("Questions", {
  id: type.string().uuid(5),      // a normal string
  question: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  topicId: type.string(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Answers = thinky.createModel("Answers", {
  id: type.string().uuid(5),      // a normal string
  answer: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  questionId: type.string(), // Question
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Notifications = thinky.createModel("Notifications", {
  id: type.string().uuid(5),      // a normal string
  notification: type.string(),  // a string of at least two characters
  userId: type.string(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

console.log("Creating the relationship....");

// User relationship
Users.hasMany(Questions, "questions", "id", "authorId")
Users.hasMany(Answers, "answers", "id", "authorId")

// Questions
Questions.hasOne(Topics, "topic", "id", "topicId")
Questions.belongsTo(Users, "author", "authorId", "id")
Questions.hasMany(Answers, "answers", "id", "questionId")

// Answers
Answers.belongsTo(Users, "author", "authorId", "id")
Answers.belongsTo(Questions, "question", "questionId", "id")

// Notification
Notifications.belongsTo(Users, "user", "userId", "id")

console.log("Finished creating the database...")
