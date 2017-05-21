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

router.post('/authenticate', authenticate);
router.post('/registeruser', register);
router.delete('/deleteuser', deleteUser);
router.post('/addfriend', addFriend);
router.delete('/deletefriend/:id', deleteFriend);
router.post('/addL', addL);

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
  User.removeUser(req.body.username,
  function(err, User) {
    if(err) {
      res.send('error removing')
    } else {
      console.log('user removed');
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
		res.json({success: false, msg:'username fail'});

    } else {
		//now working with returned user
		if(user==null){
			res.json({success: false, msg:'user doesnt exist'}); 
		}else{
		  if(user.friendCount<10){
			Friend.addFriend(newFriend, callback(err,user,"addingfriend",res));
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
 L.ClearL(friend_id, (err,L)=>{
	if(err)
		console.log("firned not deleted");	
	else
		console.log("friend deleted")
 });
	//delete the friend itself
Friend.removeFriend(friend_id,(error,friend)=>{
	if(error){
		throw error;
	}else{
		//lol subtract from the user friendcount
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
	let newL = new L({
	title:req.body.title,
	date:req.body.date,
	desc:req.body.desc,
	friendId:req.body.friendId
	});
	
	L.addL(newL,(err,L)=>{dummycallback();});
    //get the Friend by Id
	Friend.getFriendById(newL.friendId, (error,friend)=>{
		if(error){
		throw error; 
		console.log(error);	
		}else{
			if(Friend==null)
				console.log("no friend found by that id");
			else{
				Friend.updateLCount(friend.id,friend.lCount+1,(error, rturn)=>{
					callback(error,rturn,"updating Lcount",res);
				});
			}		
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
