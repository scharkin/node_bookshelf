module.exports = function(app) {
  var ObjectId = require('mongodb').ObjectID;
  
  var Model = { name: 'BookModel' },
      collection = app.db.collection('books');
  
  Model.list = function(query, callback) {
    try {
      collection.find(query).toArray(function(error, books) {
        if(error) {
          console.log(Model.name +
           ' #list error when performing find ' + error.toString());
          callback(app.config.errors.database_error);
        } else {
          callback(null, books);
        }
      });
    } catch(exception) {
      console.log(Model.name +
       ' #list exception when performing find ' + exception);
      callback(app.config.errors.database_error);
    }  
  };
  
  return Model;
}
