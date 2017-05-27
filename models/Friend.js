//model 
const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const FriendSchema = mongoose.Schema({
  name: {
    type: String,
	required: true
  }, 
  lCount: {
    type: Number,
    required: true
  },
  parentUserName: {
    type: String,
    required: true
  }
  //  ,photo: {}

}); 

const Friend = module.exports = mongoose.model('Friend', FriendSchema);

//add friend
module.exports.addFriend = function(newFriend,res){
       newFriend.save((err,data)=>{
		   if(err){
			throw err;
				return res.json({success: false, msg:'error adding friend'});
		   }else{
				return res.json(data);
		   }   
	   });
}

//remove friend by Id
module.exports.removeFriend = function(id, callback){
  Friend.findOneAndRemove({_id: id}, callback);
} 

//get Friend by Id
module.exports.getFriendById = function(id, callback){
  Friend.findById(id, callback);
}

//update a friend's L count when L is added
module.exports.updateLCount = function(FriendId,newLCount,callback){
	 Friend.findOneAndUpdate({_id:FriendId},{ $set: { lCount: newLCount }},callback);
	}
//GET userhome
module.exports.getUserFriends = function(parentName, callback){
  Friend.find({parentUserName:parentName}, callback);

  }
	