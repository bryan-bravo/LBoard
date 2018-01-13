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
  },
  image: {
	data:String
  }
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
  Friend.findById({_id: id}, callback);
}

//update a friend's L count when L is added
module.exports.updateLCount = function(friendId,newLCount,callback){
	 Friend.findOneAndUpdate({_id:friendId},{ $set: { lCount: newLCount }},callback);
	}
//GET userhome
module.exports.getUserFriends = function(parentName, callback){
  Friend.find({parentUserName:parentName}, callback);
}
//updating the profile picture
module.exports.updateProfilePicture = function(friendId,data,res){
  let image={data:data};
  Friend.findOneAndUpdate({_id:friendId},{ $set: { image:image }},(err,friend)=>{
  if(err){
    throw err;
  return res.json({success: false, msg:'error adding friend'});
    }else{
  return res.json(friend);
  }    
  });
}
	