//model 

const mongoose = require('mongoose');
const config = require('../config/database');
const Friend = require('./Friend');

// User Schema
const LSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
   friendId: {
    type: String,
    required: true
  }
//  ,photo: {}
});

const L = module.exports = mongoose.model('L', LSchema);

//add L
module.exports.addL = function(newL,callback){
newL.save(callback);
}

// delete all of a friend's Ls
module.exports.ClearL = function(fId, callback){
	const query = {friendId:fId};
 	L.deleteMany(query,callback);
}

