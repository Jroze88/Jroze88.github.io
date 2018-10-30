const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const friendFinderSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  Extrovert: {
      type: Number,
      required: true
  },

  Introvert: {
    type: Number,
    required: true
},
    Intuitive: {
        type: Number,
        required: true
    },
    Sensor : {
        type: Number,
        required: true
    },
    Thinker: {
        type: Number,
        required: true
    },    
    Feeler :{
        type: Number,
        required: true
    },    
    Judger : {
        type: Number,
        required: true
    },    
    Perceiver :{
        type: Number,
        required: true
    }

})

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model

// This creates our model from the above schema, using mongoose's model method
var friendFinder = mongoose.model("friendFinder", friendFinderSchema);

// Export the Article model
module.exports = friendFinder;