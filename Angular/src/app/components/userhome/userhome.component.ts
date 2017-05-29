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
	style:Object;
	carouselTracker:number;
	
	constructor(private userService:UserService,
			    private router: Router,
				private authService:AuthService,
				private flashMessage:FlashMessagesService	
			   ){}
	ngOnInit() {
		this.populateData();
		this.actionSelector='';
		this.warningMessage=false;
		this.style=this.setFriendContainerStyle('');
		this.carouselTracker=0;
	}
//logic functions
	populateData() {
		let parentName=JSON.parse(localStorage.getItem("user")).username;
		this.name=JSON.parse(localStorage.getItem("user")).name;
		this.userService.getFriends(parentName).subscribe(friends =>{
			this.friends=friends;
			this.friendCount=this.friends.length;
		});
	}
	
	onAddFriendSubmit(){
		this.userService.addFriend(this.newFriendName).subscribe(data =>{
			if(data.success==false){
				//print a message saying you can only have 10 friends delete some friends
			}else{
			this.friends.push(data);
			this.friendCount=this.friends.length;
			this.resetFormHelpers();
			this.carouselTracker=this.friends.length-1;
			}
		});
	}
	deleteFriendChosen(friendid){
		this.delFriendId=friendid;
		this.setWarningMessage(true);
		
	}
	deleteFriend(){
		console.log(this.delFriendId);
		this.userService.deleteFriend(this.delFriendId).subscribe(response=>{
			if(response.success){
				for(var i=this.friends.length-1;i>=0;i--)
					if(this.friends[i]._id==this.delFriendId)
						this.friends.splice(i,1);
				this.friendCount--;	
				this.resetFormHelpers();
				this.carouselTracker=this.friends.length-1;

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
			cssClass:'alert-success',
			timeout: 3000 
		});
		this.router.navigate(['/login']);
		return false;
  }
  
//display functions
	setActionSelector(value){
		this.actionSelector=value;
	}
	getActionSelectorDelete(){
		if(this.actionSelector=="delete")
			return true;
		return false;
	}
	getActionSelectorAdd(){
		if(this.actionSelector=="add")
			return true;
		return false;
	}
	getActionSelectorSettings(){
		if(this.actionSelector=="settings")
			return true;
		return false;
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

	setFriendContainerStyle(direction):Object{
		let iconContainerHeight=document.getElementById("iconContainer").offsetHeight;
		let iconContainerWidth=document.getElementById("iconContainer").offsetWidth;
		let friendContainerHeightAndWidth=(60*iconContainerHeight)/100;
		let widthPercentageOfFriendContainer=(friendContainerHeightAndWidth*100)/iconContainerWidth;
		let remainderPercentageInHalf = (100-widthPercentageOfFriendContainer)/2;
		let marginString ="0 "+remainderPercentageInHalf+"%";
		let styles={};
		if(direction==''){
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			styles={'padding':marginString,
					'transform':formattedTranslate
			};

		}
		if(direction=='left'&&this.carouselTracker!=0){
			this.carouselTracker--;
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			 styles={'padding':marginString,
					'transform':formattedTranslate
			 };

		}
		if(direction=='right'&&this.carouselTracker!=this.friends.length-1){
			this.carouselTracker++;
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			styles={'padding':marginString,
					'transform':formattedTranslate
			};
			}	
		
	return styles;
		
	}

}
