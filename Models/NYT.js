var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NYTschema = new Schema({
  title: String,
  date: Date,
  url: String
});

var NYT = mongoose.model("NYTArticle", NYTschema);

module.exports = NYT;