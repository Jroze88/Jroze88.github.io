require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')
const model = require('./Models')
const encoder = require('./decoder.js')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "development") { // Configuration for development environment
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpackConfig = require("./webpack.config.js");
  const webpackCompiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(express.static(path.join(__dirname, "app")));
} else if(process.env.NODE_ENV === "production") { // Configuration for production environment
  app.use(express.static(path.join(__dirname, "client/build")));
}



const mm = mongoose.connect(process.env.MONGODB_URI || "mongodb://testaccount:fakepassword1@ds241493.mlab.com:41493/deploytest", { useNewUrlParser : true});



    let sendEncodedResultsDB = (tournamentReport) => {


      model
    .create(
      {
      tournamentName: tournamentReport.tournamentName,
      tournamentDate:  tournamentReport.tournamentDate,
      players :  tournamentReport.players
    },
    function(err, inserted) {
      if (err) {
        // Log the error if one is encountered during the query
        console.log(err);
      }
      else {
  
        console.log(inserted)
      }
    });



    }




app.post("/post/tournamentresults", function(req, res) {

  var tournamentReport = req.body

  console.log(Object.keys(tournamentReport.players + ' received'))





  var encodedArmy1 = []

  var encodedArmy2 = []

  var readyCheck = false











  for (let i = 0; i < 10; i++) {



    if (tournamentReport.players[i]) {

      var current = i


  
  
      for (let k= 0; i < tournamentReport.players[current].army1Encoded.length; k++) {
  
        var encodeThisArmy1 = []
  
        encodeThisArmy1.push(encoder[tournamentReport.players[current].army1Encoded[k]])
    
       
  
    
      }
    
    
      for (let j = 0; j < tournamentReport.players[current].army2Encoded.length; j++) {
  
        var encodeThisArmy2 = []
    
        encodeThisArmy2.push(encoder[tournamentReport.players[current].army2Encoded[j]])
    
    
      
  
    
      }
  
    tournamentReport.players[current].army1EncodedNum = encodeThisArmy1

    tournamentReport.players[current].army2EncodedNum = encodeThisArmy2



    } else {

     
  
  
        return readyCheck = true
  
  


    }

   




  }

  model
  .create(
    {
    tournamentName: tournamentReport.tournamentName,
    tournamentDate:  tournamentReport.tournamentDate,
    players :  tournamentReport.players
  },
  function(err, inserted) {
    if (err) {
      // Log the error if one is encountered during the query
      console.log(err);
    }
    else {

      console.log(inserted)
    }
  });








  //  setTimeout(function() {


       

    
  //       sendEncodedResults(tournamentReport)
  //       console.log('done encoding')

  //   sendEncodedResultsDB(tournamentReport)
  



  //   }, 3000).bind(this)








});

app.get("/get/tournamentresults", function(req, res) {

  
  
  model
      .find({ })
      .then(function(dbModel) {
        res.json(dbModel)
      });

  console.log(req.body)
});





// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

