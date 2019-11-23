// Importing module for friends array
var friends = require("../app/data/friends");

module.exports = function(app) {
  //GET route to display a JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //POST route to handle incoming survey results

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0; // Holds the difference between the user's score and other's score

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    // Take the array of number from userScores, parse into integers, then store in new array
    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });

    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("Scores: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0); // Sum of user's score
    console.log("Sum of users score " + sum);
    console.log("Best mast friend difference " + bestMatch.friendDifference);
    console.log("----------------------------------");

    for (let i = 0; i < friends.length; i++) {
      totalDifference = 0;

      var bestFriend = friends[i].scores.reduce((a, b) => a + b, 0);
      totalDifference += Math.abs(sum - bestFriend);

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData);
    res.json(bestMatch);
  });
};
