var thinky = require('thinky')();
var r = thinky.r;
var type   = thinky.type;


// Users
var user = new User({
    firstname: "Nicola",
    lastname: "S.",
    bio: "My personal bio",
    description: "My personal description",
    email: "nicola@example.com",
    topic: [{"name": "Javascript"}, {"name": "Python"}],
    education: [{"name": "School 1"}, {"name": "School 2"}],
    location: "Asti",
    employments: ["Employment 1", "Employment 2"]
});
var user2 = new User({
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

// Topics
var topic1 = new Topic({
  name: "Javascript",
  description: "The javascript language"
})

var topic2 = new Topic({
  name: "Python",
  description: "The Python language"
})

var topic3 = new Topic({
  name: "Entreperneurship",
  description: "All about entrepreneurship"
})

var question = new Question({ question: "What is clousure in Javascript?"});
question.topic = topic1
question.author = user

var Question = thinky.createModel("Question", {
  id: type.string().uuid(5),      // a normal string
  question: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  topicId: type.string(),
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Answer = thinky.createModel("Answer", {
  id: type.string().uuid(5),      // a normal string
  answer: type.string(),  // a string of at least two characters
  authorId: type.string(), // Author
  questionId: type.string(), // Question
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});

var Notification = thinky.createModel("Notification", {
  id: type.string().uuid(5),      // a normal string
  question: type.string(),  // a string of at least two characters
  createdAt: type.date().default(r.now()),
  updatedAt: type.date().default(r.now())
});
