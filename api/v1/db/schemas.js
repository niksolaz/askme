var thinky = require('thinky')();
var r = thinky.r;
var type   = thinky.type;

console.log("Creating the models.....");
var User = thinky.createModel("Users", {
  id: type.string().uuid(4),      // a normal string
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


var Topic = thinky.createModel("Topics", {
  id: type.string().uuid(4),      // a normal string
  name: type.string(),  // a string of at least two characters
  description : type.string(),
  createdAt: type.date().default(r.now())
});

var Question = thinky.createModel("Questions", {
  id: type.string().uuid(4),      // a normal string
  question: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  topicId: type.string(),
  upvotes: type.number(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Answer = thinky.createModel("Answers", {
  id: type.string().uuid(4),      // a normal string
  answer: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  questionId: type.string(), // Question
  upvotes: type.number(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Notification = thinky.createModel("Notifications", {
  id: type.string().uuid(4),      // a normal string
  notification: type.string(),  // a string of at least two characters
  userId: type.string(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

console.log("Creating the relationship....");

// User relationship
User.hasMany(Question, "questions", "id", "authorId")
User.hasMany(Answer, "answers", "id", "authorId")

// Questions
Question.hasOne(Topic, "topic", "id", "topicId")
Question.belongsTo(User, "author", "authorId", "id")
Question.hasMany(Answer, "answers", "id", "questionId")

// Answers
Answer.belongsTo(User, "author", "authorId", "id")
Answer.belongsTo(Question, "question", "questionId", "id")

// Notification
Notification.belongsTo(User, "user", "userId", "id")

console.log("Finished creating the database...")


module.exports = {
  "User": User,
  "Topic": Topic,
  "Question": Question,
  "Answer": Answer
}
