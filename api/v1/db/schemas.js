var thinky = require('thinky')();
var r = thinky.r;
var type   = thinky.type;

console.log("Creating the models.....");
var User = thinky.createModel("User", {
  id: type.string(),      // a normal string
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


var Topic = thinky.createModel("Topic", {
  id: type.string(),      // a normal string
  name: type.string(),  // a string of at least two characters
  description : type.string(),
  createdAt: type.date().default(r.now())
});

var Question = thinky.createModel("Question", {
  id: type.string(),      // a normal string
  question: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  topicId: type.string(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Answer = thinky.createModel("Answer", {
  id: type.string(),      // a normal string
  answer: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  questionId: type.string(), // Question
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Notification = thinky.createModel("Notification", {
  id: type.string(),      // a normal string
  question: type.string(),  // a string of at least two characters
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

console.log("Creating the relationship....");
// User relationship
User.hasMany(Question, "questions", "id", "authorId")
User.hasMany(Answer, "answers", "id", "authorId")

// Questions
Question.hasMany(Answer, "answers", "id", "questionId")
Question.hasOne(Topic, "topic", "id", "topicId")

console.log("Finished creating the database...")
