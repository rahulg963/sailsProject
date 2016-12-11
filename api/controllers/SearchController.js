/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req, res) {
    sails.log("File : [SearchController.js] Function : [find]");
    var nameVal = req.param('query')
    sails.log("File : [SearchController.js] Function : [find] Query : " + nameVal);
    async.parallel({
      one : function(callback){
        sails.models.university.find({where : {name: { contains :  nameVal }}}).populate('courses')
          .exec(function (err, university) {
            if(err){
              sails.log("File : [SearchController.js] Function : [find] Error Occurred " + err);
              callback(err,"NULL");
            }else {
              sails.log("File : [SearchController.js] Function : [find] university");
              callback(null, university);
            }
          });
      },
      two : function(callback){
        sails.models.course.find({where : {name: { contains :  nameVal }}}).populate('owner')
          .exec(function (err, course) {
            if(err){
              sails.log("File : [SearchController.js] Function : [find] Error Occurred " + err);
             callback(err,"NULL");
            }else {
              sails.log("File : [SearchController.js] Function : [find] course");
              callback(null, course);
            }
          });
      }
    }, function(err, results){
      if(err){
        sails.log("File : [SearchController.js] Function : [find] Error Occurred " + err);
        res.json({error_msg : err});
      }
      else {
        sails.log("File : [SearchController.js] Function : [find] Callback Return ");
        res.json({
          university_list : results.one,
          course_list : results.two
        })
      }
    });
  }
};

