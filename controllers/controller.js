/*TODO 
-User
	-inform the user of the type of error returned from registering
	-Everything here is to modify, need to handle the getting for the front end
*/ 
//controller for User
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/User');
const Friend = require('../models/Friend');
const L = require('../models/L');

 var dateTime = require('node-datetime');

router.post('/authenticate', authenticate);
router.post('/registeruser', register);
router.delete('/deleteuser/:username', deleteUser);
router.post('/addfriend', addFriend);
router.delete('/deletefriend/:id', deleteFriend);
router.post('/addL', addL);

router.get('/getFriends/:parentName',userHome);
router.get('/friendHome/:friendId',friendHome);
router.get('/getFriendById/:friendId',getFriendById);
// Register(add) User
function register( req, res) {   
 
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
	friendCount: 0
  });
//
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
	  console.log(err);
    } else {
      res.json({success: true, msg:'User registered'});
	  	  console.log("success");

    }
  });

} 

//Authenticate User
function authenticate(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
}

//Delete User (change)
function deleteUser(req, res) {
  //delete
  User.removeUser(req.params.username,
  function(err, User) {
    if(err) {
      res.json({success: false, msg: 'Error Removing'});
    } else {
      res.json({success: true, msg: 'Success Removing'});
      res.status(204);
    }
  });

}

//AddFriend 
function addFriend(req,res){
	let newFriend = new Friend({
	name:req.body.name,
	lCount:0,
	parentUserName:req.body.parentUserName
    });
   
   User.getUserByUsername(req.body.parentUserName, (err, user) => {
    if(err){
		throw err;
		res.json({success: false, msg:'no user with that user name'});

    } else {
		//now working with returned user
		if(user==null){
			res.json({success: false, msg:'user doesnt exist'}); 
		}else{
		  if(user.friendCount<10){
			Friend.addFriend(newFriend,res);
		    let newFriendCount=user.friendCount+1;
			User.updateFriendCount(user.username, newFriendCount,dummycallback);
		  }else 
		res.json({success: false, msg:'too many friends'});
		 }
	  }
   });
 }
 
//DeleteFriend
 function deleteFriend(req,res){  
 var friend_id = req.params.id;

	//delete all the ls associated with friend 
 L.ClearL(friend_id, (error,L)=>{
	if(error)
		throw error;
	else
		console.log("friend deleted")
 });
	//delete the friend itself
Friend.removeFriend(friend_id,(error,friend)=>{
	if(error){
		throw error;
		res.json({success: false, msg:'could not delete friend'});
	}else{
		//lol subtract from the user friendcount
		// res.json(friend);
		res.json({success: true, msg:'friend deleted'});
		User.getUserByUsername(friend.parentUserName,(error,user)=>{
			if
				(error) throw error;
			else
				User.updateFriendCount(friend.parentUserName, user.friendCount-1,dummycallback);			
		});
	}
});

  }
  
//addL
  function addL(req,res){
var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M');
  let newL = new L({
	
	title:req.body.title,
	// date:req.body.date,
	date:formatted,
	desc:req.body.desc,
	friendId:req.body.friendId
	});
	
	L.addL(newL,res);
    //get the Friend by Id
	Friend.getFriendById(newL.friendId, (error,friend)=>{
		if(error){
		throw error; 
		console.log(error);	
		}else{
			if(Friend==null)
				console.log("no friend found by that id");
			else{
				Friend.updateLCount(friend.id,friend.lCount+1,()=>{});
			}		
		}
	});	
  }
//---------- getting data -----------//

//poplulate user home
function userHome(req,res){
	if(req.params.parentName=='' ||req.params.parentName== null)
		res.json({success: false, msg:'invalid parameters'}); 
		
	let parentName = req.params.parentName;
	Friend.getUserFriends(parentName,(error,friends)=>{
		if(error){
			res.json({success: false, msg:'something went wrong'}); 
		}else{
			res.json(friends);
		}
	});
}
//get friend's Ls
function friendHome(req,res){
	if(req.params.friendId=='' ||req.params.friendId== null)
		res.json({success: false, msg:'invalid parameters'}); 
		
	let friendId = req.params.friendId;
	L.getFriendLs(friendId,(error,Ls)=>{
		if(error){
			res.json({success: false, msg:'something went wrong'}); 
		}else{
			res.json(Ls);
		}
	});
}
//get friend object by id
function getFriendById(req,res){
	if(req.params.friendId=='' ||req.params.friendId== null)
		res.json({success: false, msg:'invalid parameters'}); 
	Friend.getFriendById(req.params.friendId, (error,friend)=>{
		if(error){
			throw error; 
			res.json({success: false, msg:'something went wrong'});

		}else{
			res.json(friend);
		}
	});	
}	
 //helper functions
 function callback(error,returnThing,message,res){
	if(error){
		res.json({success: false, msg:'Failure with '+message});
		 console.log("failure");
	} else {
		res.json({success: true, msg:'Success with ' +message});
		console.log("success");
	}
 } 
 
function dummycallback (){}
 
module.exports = router;
