/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req, res) {
    var nameVal = req.param('query')
    async.parallel({
      one : function(callback){
        sails.models.university.find({name: nameVal}).populate('courses')
          .exec(function (err, university) {
            if(err){
              callback(err,"NULL");
            }else {
              callback(null, university);
            }
          });
      },
      two : function(callback){
        sails.models.course.find({ name: nameVal }).populate('owner')
          .exec(function (err, course) {
            if(err){
             callback(err,"NULL");
            }else {
              callback(null, course);
            }
          });
      }
    }, function(err, results){
      if(err){
        res.json({error_msg : err});
      }
      else {
        res.json({
          university_list : results.one,
          course_list : results.two
        })
      }
    });
  }
};

