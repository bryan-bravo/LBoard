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
  },
  image:{
	data: String 
  }
});

const L = module.exports = mongoose.model('L', LSchema);

//add L
module.exports.addL = function(newL,res){
	newL.save((error,data)=>{
		   if(error){
			throw error;
				return res.json({success: false, msg:'error adding L'});
		   }else{
				return res.json(data);
		   }   
	   });
}

// delete all of a friend's Ls
module.exports.ClearL = function(fId, callback){
	const query = {friendId:fId};
 	L.deleteMany(query,callback);
}
//get all of a friends ls
module.exports.getFriendLs = function(fId, callback){
  L.find({friendId:fId}, callback);
}