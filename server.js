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







    app.post("/post/tournamentresults", function(req, res) {
      console.log(req.body)
      model
      .create(
        {
        tournamentName: req.body.tournamentName,
        tournamentDate:  req.body.tournamentDate,
        players :  req.body.players
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
    
    
      console.log(req.body)
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

