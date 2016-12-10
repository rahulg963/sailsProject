/**
 * University.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : 'String',
    type : 'String',
    rank : 'String',
    year_of_establish : 'String', 
    courses : {
      collection : 'course',
      via : 'owner'
    }
  }
};

