var friendData = require("../data/friends.js")

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    //app.post("/api/friends", function(req, res){
        //res.json();
        
   // })

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        var newDifference =[];
        //var difference = 0;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
       //newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();
        console.log("newFriend");
        console.log(newFriend);
      
        friendData.push(newFriend);

      
        //res.json(newfriend);
        //======================
        //var newDifference = [];
        for (var i = 0; i < friendData.length; i++) {
            var difference = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
              difference += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
         
              //newDifference.push(difference);
            }
            newDifference.push(difference);
          }
         
          var compare = newDifference[0];
         
          for (var i = 0; i < newDifference.length; i++) {
            if (newDifference[i] < compare) {
              compare = newDifference[i];
            }
          }
         
          var match1 = newDifference.indexOf(compare);
          var match2 = friendData[match1];
         
          var name = match2.name;
          var picture = match2.image;

          console.log(match1);
          console.log(match);
          console.log(name);
          console.log(picture);
         
          res.send("name: " + name + "<img src=" + picture + ">");
         

        //========================
       /* var newdiffer = [];

        for(var i; i < friends.length; i++){
            var difference = 0;
                for (var j = 0; j < friendData.score.length; j++)
                difference += Math.abs(friends[i].score[i])-friendData.score[i];

                newdiffer.push(differnce);
        }*/

      });
};
