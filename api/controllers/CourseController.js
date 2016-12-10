/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hello : function (req,res) {
    console.log("\n------HERE IN HELLO--------");
    res.end("Hey this is the hello function of CourseController")
  }
};

