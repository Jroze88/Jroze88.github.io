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

getFriends : function () {
  return axios.get('/get/friends')
}

}
