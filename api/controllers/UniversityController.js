/**
 * UniversityController
 *
 * @description :: Server-side logic for managing universities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hello : function (req,res) {
    console.log("\n------HERE IN HELLO--------");
    res.end("Hey this is the hello function of UniversityController")
  }
};

