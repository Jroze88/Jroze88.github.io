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
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    return axios.get(queryURL);
  },
  // Retrieves saved articles from the db
  getArticle: function() {
    return axios.get("/api/saved");
  }

}
