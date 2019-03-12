var friendsData = require("../data/friends.js");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) { 
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body)
        
        var userData = req.body;
        var userScores = userData.scores;
        
        var totalDifference = 0;
        
        for(var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name);
            totalDifference = 0;

            for(var x = 0; x <10; x++) {
                totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friendsData[i].scores[x]));
                
                if(totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                    
                }
            }
        }
        friendsData.push(userData);
        res.json(bestMatch);
    });

};