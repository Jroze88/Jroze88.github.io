import axios from "axios";


// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default {


getCurrent : function() {
    return axios.get("/scrape/current");
  },

getUpcoming : function() {
      return axios.get("/scrape/upcoming")
  },

postUser : function (userInfo) {
  return axios.post("/post/friendfinder", userInfo)
},

getFriends : function (userInfo) {
  return axios.get('/get/friends')
},
  searchNYT: function(topic, startYear, endYear) {


    return axios.get(topic, startYear, endYear);
  },
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/saved");
  },

  sendMail: function(name, email, message) {
    return axios.get('/sendmail')
  }

}
