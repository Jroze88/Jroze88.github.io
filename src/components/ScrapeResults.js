import react from "react";
import axios from "axios";
import mongoose from "mongoose";
import cheerio from "cheerio";


const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

// const mongoURI = process.env.MONGODB_URI;
mongoose.connect('mongodb://localhost:27017/eSports', { useNewUrlParser: true }).then(function(){
    console.log('yes')
}, function(err) {
    console.log(err)
});
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server




const PORT = 3000;

// Initialize Express


  //////CONTROLLER/////


  const db = require("../models");




// Routes

let totalCurrent = {};
let totalUpcoming = {};




// A GET route for scraping the echoJS website

    // First, we grab the body of the html with axios
    app.get("/scrape-current", function(req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://www.gosugamers.net/events/list?type=current").then(function(response) {
          // Then, we load that into cheerio and save it to $ for a shorthand selector
          var $ = cheerio.load(response.data);
      
          // Now, we grab every h2 within an article tag, and do the following:
          $("div.event.columns").each(function(i, element) {
            // Save an empty result object
            let result = {};
      
            // Add the text and href of every link, and save them as properties of the result object
            result.banner = $(this)
            .children('div.event.columns')
            .children('div.left')
            .children('a')
            .children('img')
            .attr("src");
            result.link = $(this)
            .children('div.event.columns')
            .children('div.left')
            .children('a')
              .attr("href");
              result.title = $(this)
            .children('div.event.columns')
            .children('div.right')
            .children('h3')
            .children('a')
            .text();
            result.icon = $(this)
            .children('div.event.columns')
            .children('div.right')
            .children('p')
            .children('img')
            .attr('title');
      
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
              .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
              })
              .catch(function(err) {
                // If an error occurred, send it to the client
                console.log(err)
              });
          });
      
          // If we were able to successfully scrape and save an Article, send a message to the client
          res.send("Scrape Complete");
        });
      });

  
  //A GET route for scraping the echoJS website
 
    // First, we grab the body of the html with axios
    app.get("/scrape-upcoming", function(req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://www.gosugamers.net/events/list?type=upcoming").then(function(response) {
          // Then, we load that into cheerio and save it to $ for a shorthand selector
          var $ = cheerio.load(response.data);
      
          // Now, we grab every h2 within an article tag, and do the following:
          $("div.event.columns").each(function(i, element) {
            // Save an empty result object
            let result = {};
      
            // Add the text and href of every link, and save them as properties of the result object
            result.banner = $(this)
            .children('div.left')
            .children('a')
            .children('img')
            .attr("src");
            result.link = $(this)
            .children('div.left')
            .children('a')
              .attr("href");
              result.title = $(this)
            .children('div.right')
            .children('h3')
            .children('a')
            .text();
            result.icon = $(this)
            .children('div.right')
            .children('p')
            .children('img')
            .attr('title');
      
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
              .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
              })
              .catch(function(err) {
                // If an error occurred, send it to the client
                return res.json(err);
              });
          });
      
          // If we were able to successfully scrape and save an Article, send a message to the client
          res.send("Scrape Complete");
        });
      });

  
//   // Route for getting all Articles from the db
//   app.get("/articles", function(req, res) {
//     // Grab every document in the Articles collection
//     db.Article.find({})
//       .then(function(dbArticle) {
//         // If we were able to successfully find Articles, send them back to the client
//         let currentScrape = res.json(dbArticle);
//       })
//       .catch(function(err) {
//         // If an error occurred, send it to the client
//         res.json(err);
//       });
//   });

  // Start the server
// app.listen(PORT, function() {
//     console.log("App running on port " + PORT + "!");
//   });



