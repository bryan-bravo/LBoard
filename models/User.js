 //model 
const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Friend = require('./Friend');
const L = require('./L');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
	required:true
  }, 
  username: {
    type: String,
    required: true,
	unique: true 
  },
  password: {
    type: String,
    required: true 
  },
  friendCount:{
	type:Number 
  }
});

//export
const User = module.exports = mongoose.model('User', UserSchema);

//get by user id
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

//get by username
module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

//add user 
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash; 
      newUser.save(callback);
    });
  });
}

//removeUser (change)
module.exports.removeUser = function(dusername, callback){
  const query = {username: dusername}
  Friend.find({parentUserName:dusername},(error,friends)=>{
	if(error)console.log(error);
	else{
		let fIdCollection=friends.map(function(friend){return friend.id;});		
		fIdCollection.forEach(function(fId){
			L.ClearL(fId, (error)=>{
				if(error){
					throw error;	
					console.log(error);
				}
			});
			Friend.removeFriend(fId,(error)=>{
				if(error){
					throw error;	
					console.log(error);
				}				
			});
		});
	}//else
  });
  User.findOneAndRemove(query,callback);	
}

//compare Password
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

//updateFriendCount 
module.exports.updateFriendCount = function(queryusername,newFriendCount,callback){
 User.findOneAndUpdate({username:queryusername},{ $set: { friendCount: newFriendCount }},callback);
}
// db.users.update({"username":"bork"},{$set:{"friendCount":0}})

































