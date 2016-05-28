var uuid = require('node-uuid');
var models = require('./schemas')
var User = models.User;
var Topic = models.Topic;
var Answer = models.Answer;
var Question = models.Question;

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
/**User.save([user1, user2, user3])
.then(function(result){
  console.log("Users have been saved..", result)
})
.error(function(error){
  console.error("Error saving the users", error)
})*/

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

/**Topic.save([topic1, topic2])
.then(function(result){
  console.log("Topics have been saved..", result)
})
.error(function(error){
  console.error("Error saving the questions", error)
})**/
// Adding answers
var answer1 = new Answer({
  id: uuid.v4(),
  answer: "This is the first answer",
  upvotes: 0
});
answer1.author = user3
answer1.question = question1

var answer2 = new Answer({
  id: uuid.v4(),
  answer: "This is another answer",
  upvotes: 0
})
answer2.author = user2
/**
Answer.save([answer1, answer2])
.then(function(result){
  console.log("Answer have been saved..", result)
})
.error(function(error){
  console.error("Error saving the answers", error)
})**/

// Adding questions
var question1 = new Question({
  id: uuid.v4(),
  question: "What is closure?",
  upvotes: 0
});
question1.topic = topic2
question1.author = user1



var question2 = new Question({
  id: uuid.v4(),
  question: "Is Swift a good programming language?",
  upvotes: 0
})
question2.topic = topic1
question2.author = user2
answer1.question = question1
answer2.question = question2
/**Question.save([question1, question2])
.then(function(result){
  console.log("Question have been saved..", result)
})
.error(function(error){
  console.error("Error saving the questions", error)
})**/

//question2.saveAll();
//question1.saveAll();
answer1.saveAll();
answer2.saveAll();
//topic1.saveAll();
//topic2.saveAll();

console.log("Finished importing the db!")
