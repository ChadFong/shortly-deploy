var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shortly');
var Schema = mongoose.Schema;

// Establish Mongo connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
  console.log('MONGOOSE CONNECTION ESTABLISHED.')
})

// Create URL Links schema
exports.urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

// Create Users schema
exports.usersSchema = new Schema({
  username: String,
  password: String
});
