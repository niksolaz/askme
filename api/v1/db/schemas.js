var thinky = require('thinky')();
var r = thinky.r;
var type   = thinky.type;
var uuid = require('node-uuid');

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

console.log("Adding users");
// Users
var user1 = new User({
    id: uuid.v4(),
    firstname: "Nicola",
    lastname: "S.",
    bio: "My personal bio",
    description: "My personal description",
    email: "nicola@example.com",
    topic: [{"name": "Javascript"}, {"name": "Python"}],
    education: [{"name": "School 1"}, {"name": "School 2"}],
    location: "Asti",
    employments: ["Employment 1", "Employment 2"]
})


var user2 = new User({
    id: uuid.v4(),
    firstname: "Robert",
    lastname: "R.",
    bio: "My personal bio",
    description: "My personal description",
    email: "nicola@example.com",
    topic: [{"name": "Javascript"}, {"name": "Python"}],
    education: [{"name": "School 1"}, {"name": "School 2"}],
    location: "Asti",
    employments: ["Employment 1", "Employment 2"]
});

var user3 = new User({
    id: uuid.v4(),
    firstname: "Frank",
    lastname: "R.",
    bio: "My personal bio",
    description: "My personal description",
    email: "nicola@example.com",
    topic: [{"name": "Javascript"}, {"name": "Python"}],
    education: [{"name": "School 1"}, {"name": "School 2"}],
    location: "Asti",
    employments: ["Employment 1", "Employment 2"]
});
User.save([user1, user2, user3])
.then(function(result){
  console.log("Users have been saved..", result)
})
.error(function(error){
  console.error("Error saving the users", error)
})

// Adding topics
var topic1 = new Topic({
  id: uuid.v4(),
  name: "Swift",
  description: "Programming Language"
})

var topic2 = new Topic({
  id: uuid.v4(),
  name: "Javascript",
  description: "Programming Language"
})

Topic.save([topic1, topic2])
.then(function(result){
  console.log("Topics have been saved..", result)
})
.error(function(error){
  console.error("Error saving the questions", error)
})

// Adding questions
var question1 = new Question({
  id: uuid.v4(),
  question: "What is closure?",
  upvotes: 0
});

var question2 = new Question({
  id: uuid.v4(),
  question: "Is Swift a good programming language?",
  upvotes: 0
})

Question.save([question1, question2])
.then(function(result){
  console.log("Question have been saved..", result)
})
.error(function(error){
  console.error("Error saving the questions", error)
})

// Adding answers
var answer1 = new Answer({
  id: uuid.v4(),
  answer: "This is the first answer",
  upvotes: 0
});

var answer2 = new Answer({
  id: uuid.v4(),
  answer: "This is another answer",
  upvotes: 0
})

Answer.save([answer1, answer2])
.then(function(result){
  console.log("Answer have been saved..", result)
})
.error(function(error){
  console.error("Error saving the answers", error)
})

module.exports = {
  "User": User,
  "Topic": Topic,
  "Question": Question,
  "Answer": Answer
}
