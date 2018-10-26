const axios = require("axios");
const router = require("express").Router();
const db = require('../models');
const cheerio = require("cheerio");









router.get("/current", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.gosugamers.net/events/list?type=current").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    

  
    // Now, we grab every h2 within an article tag, and do the following:
    $(".event.columns").each(function(i, element) {
      // Save an empty result object
 
        // Save the text and href of each link enclosed in the current element
        var title = $(".event.columns").children('div.right')
    .children('h3')
    .children('a')
    .text();
        var link = $(".event.columns").children('div.left')
              .children('a')
                .attr("href");
        var banner = $(".event.columns").children('div.left')
              .children('a')
              .children('img')
              .attr("src");

        var icon = $(".event.columns").children('div.right')
              .children('p')
              .children('img')
              .attr('title');

              console.log(title + link + banner + icon);
  
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.Article.create({
            title: title,
            link: link,
            banner : banner,
            icon : icon
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
    }).then(function(req, res) {
      db.Article
        .find()
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })


  });



router.get("/current", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.gosugamers.net/events/list?type=current").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    

  
    // Now, we grab every h2 within an article tag, and do the following:
    $(".event.columns").each(function(i, element) {
      // Save an empty result object
 
        // Save the text and href of each link enclosed in the current element
        var title = $(".event.columns").children('div.right')
    .children('h3')
    .children('a')
    .text();
        var link = $(".event.columns").children('div.left')
              .children('a')
                .attr("href");
        var banner = $(".event.columns").children('div.left')
              .children('a')
              .children('img')
              .attr("src");

        var icon = $(".event.columns").children('div.right')
              .children('p')
              .children('img')
              .attr('title');

              console.log(title + link + banner + icon);
  
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.Article.create({
            title: title,
            link: link,
            banner : banner,
            icon : icon
          },
          function(err, inserted) {
            if (err) {
              // Log the error if one is encountered during the query
              console.log(err);
            }
            else {
              // Otherwise, log the inserted data
              // console.log(inserted);
            }
          });
        }
      });
    }).then(function(req, res) {
      db.Article
        .find()
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    })


  });

module.exports = router;
