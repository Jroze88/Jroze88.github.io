const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
db = require('./models')
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}

const mm = mongoose.connect(process.env.MONGODB_URI || "mongodb://testaccount:fakepassword1@ds241493.mlab.com:41493/deploytest", { useNewUrlParser : true});

app.get("/get/friends", function(req, res) {

  db.friendFinder
      .find()
      .then(function(dbModel) {
        res.json(dbModel)
      });



})

app.get("/scrape/current", function(req, res) {
  // First, we grab the body of the html with axios

  db.Article
        .find({'time' : 'current'})
        .sort({ date: -1 }).then(function(dbModel) {
          res.json(dbModel)
        })


  axios.get("https://www.gosugamers.net/events/list?type=current&").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    

  
    // Now, we grab every h2 within an article tag, and do the following:
    $("div.event.columns").each(function(i, element) {
      // Save an empty result object

      let result = [];

      console.log(i)

 
     
         result.title = $(this).children('div.right')
    .children('h3')
    .children('a')
    .text();
    result.link = $(this).children('div.left')
              .children('a')
                .attr("href");
                result.banner = $(this).children('div.left')
              .children('a')
              .children('img')
              .attr("src");

              result.icon = $(this).children('div.right')
              .children('p')
              .children('img')
              .attr('title');




       
        if (true) {
          // Insert the data in the scrapedData db
          db.Article.create(
            {
            title: result.title,
            link: result.link,
            banner : result.banner,
            icon : result.icon,
            time : 'current'
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

      });

      dbModel = db.Article
        .find()
        .sort({ date: -1 })

    }).catch(err => console.log(err));

  })
 

  app.get("/scrape/upcoming", function(req, res) {
    // First, we grab the body of the html with axios
  
    db.Article
          .find({ 'time' : 'upcoming'})
          .sort({ date: -1 }).then(function(dbModel) {
            res.json(dbModel)
          })
  
  
    axios.get("https://www.gosugamers.net/events/list?type=upcoming&").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
  
      
  
    
      // Now, we grab every h2 within an article tag, and do the following:
      $("div.event.columns").each(function(i, element) {
        // Save an empty result object
        let result = [];

        console.log(i)
   
          // Save the text and href of each link enclosed in the current element
           result.title = $(this).children('div.right')
      .children('h3')
      .children('a')
      .text();
           result.link = $(this).children('div.left')
                .children('a')
                  .attr("href");
           result.banner = $(this).children('div.left')
                .children('a')
                .children('img')
                .attr("src");
  
           result.icon = $(this).children('div.right')
                .children('p')
                .children('img')
                .attr('title');
  



        // If this found element had both a title and a link
        if (true) {
          // Insert the data in the scrapedData db
          db.Article.create(
            {
            title: result.title,
            link: result.link,
            banner : result.banner,
            icon : result.icon,
            time : 'upcoming'
          },
          function(err, inserted) {
            if (err) {
              // Log the error if one is encountered during the query
              console.log(err);
            }
            else {
            }
          });
        }

      });

      dbModel = db.Article
        .find()
        .sort({ date: -1 })

    }).catch(err => console.log(err));


  })

  app.post("/post/friendfinder", function(req, res) {
    db.friendFinder
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
