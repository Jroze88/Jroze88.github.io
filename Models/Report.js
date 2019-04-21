const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ReportSchema = new Schema({
  // `title` is required and of type String
  tournamentName: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  tournamentDate: {
    type: String,
    required: true
  },
  players: {
    type: Array,
    required: false
  },
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Report = mongoose.model("tournamentResults", ReportSchema);

// Export the Article model
module.exports = Report;
