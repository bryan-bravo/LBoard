import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserHomeComponent implements OnInit { 
	friends :any[];
	name:string;
	friendCount:number;
	
	newFriendName:string;
	delFriendId:string;
	
	actionSelector:string;//shows the input options per button
	warningMessage:boolean;//brings out the warning prompt
	
	
	constructor(private userService:UserService,
			    private router: Router,
				private authService:AuthService,
				private flashMessage:FlashMessagesService	
			   ){}
	ngOnInit() {
		this.populateData();
		this.actionSelector='';
		this.warningMessage=false;
	}
//logic functions
	populateData() {
		let parentName=JSON.parse(localStorage.getItem("user")).username;
		this.name=JSON.parse(localStorage.getItem("user")).name;
		this.userService.getFriends(parentName).subscribe(friends =>{
			friends.forEach((friend)=>{
				if(friend.hasOwnProperty("image")){
					friend.image.data=("data:image/png;base64,"+friend.image.data);
				}else{
					friend.image={data:"../../../assets/profile_default.png"};
				}	
			});
			
			this.friends=friends;
			this.friendCount=this.friends.length;
		});
	}
	
	onAddFriendSubmit(){
		if(this.friendCount==10){
			this.flashMessage.show('To make your friends compete for your friendship you are only allowed ten friends, delete the non important ones.', {
				cssClass:'warning',
				timeout: 5000 
			});
			return;
		}
		if(!this.newFriendName){
			this.flashMessage.show('Empty field(s).', {
				cssClass:'warning',
				timeout: 3000 
			});
			return;
		}
		this.userService.addFriend(this.newFriendName).subscribe(data =>{
			if(data.success==false){
			this.flashMessage.show('Friend could not be added.', {
				cssClass:'danger',
				timeout: 3000 
			});				
			}else{
			this.flashMessage.show('Friend added.', {
				cssClass:'success',
				timeout: 1000 
			});	
			data.image={data:"../../../assets/profile_default.png"};
			this.friends.push(data);
			this.friendCount=this.friends.length;
			this.resetFormHelpers();
			}
		});
	}
	deleteFriendChosen(friendid){
		this.delFriendId=friendid;
		this.setWarningMessage(true);
	}
	deleteFriend(){
		this.userService.deleteFriend(this.delFriendId).subscribe(response=>{
			if(response.success){
				for(var i=this.friends.length-1;i>=0;i--)
					if(this.friends[i]._id==this.delFriendId)
						this.friends.splice(i,1);
				this.friendCount--;	
				this.resetFormHelpers();

			}else{
				this.resetFormHelpers;
			}	
		});
	}

	deleteUser(){
		this.userService.deleteUser(JSON.parse(localStorage.getItem("user")).username)
			.subscribe( response =>{
				
				localStorage.clear();
				this.router.navigate(['/login']);
		});
	}
	onLogoutClick(){
		this.authService.logout();
		this.flashMessage.show('You are logged out', {
			cssClass:'success',
			timeout: 2000 
		});
		this.router.navigate(['/']);
		return false;
  }
  //get aspect ratio
  setFriendContainerStyle(direction):Object{
	let iconContainerHeight=document.getElementById("iconContainer").offsetWidth;
	//get 30 percent of that
	let formattedHeight=((iconContainerHeight*32)/100+"px");
	return {'min-height':formattedHeight}
}
//display functions
	setActionSelector(value){
		this.resetFormHelpers();
		this.actionSelector=value;
	}
	setWarningMessage(value){
		this.warningMessage=value;
	}
	deleteUserPrompt(){
		this.setWarningMessage(true);
	}	
	resetFormHelpers(){
		this.newFriendName='';
		this.delFriendId='';
		this.actionSelector='';
		this.warningMessage=false;
	}

	


}
