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
			this.carouselTracker=this.friends.length-1;
			}
		});
	}
	deleteFriendChosen(friendid){
		this.delFriendId=friendid;
		this.setWarningMessage(true);
		this.flashMessage.show('This action cannot be undone.', {
			cssClass:'warning',
			timeout: 5000 
		});
		
	}
	deleteFriend(){
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
			cssClass:'success',
			timeout: 2000 
		});
		this.router.navigate(['/']);
		return false;
  }
  
//display functions
	setActionSelector(value){
		this.resetFormHelpers();
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
		this.flashMessage.show('This action cannot be undone.', {
			cssClass:'warning',
			timeout: 5000 
		});
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
		let formattedWidth=(friendContainerHeightAndWidth+"px")
		let styles={};
		if(direction==''){
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			styles={'padding':marginString,
					'transform':formattedTranslate,
					'width':formattedWidth
			};

		}
		if(direction=='left'&&this.carouselTracker!=0){
			this.carouselTracker--;
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			 styles={'padding':marginString,
					'transform':formattedTranslate,
					'width':formattedWidth

			 };

		}
		if(direction=='right'&&this.carouselTracker!=this.friends.length-1){
			this.carouselTracker++;
			let formattedTranslate = 'translateX(-'+(this.carouselTracker*100)+'vw)';
			styles={'padding':marginString,
					'transform':formattedTranslate,
					'width':formattedWidth
			};
			}	
		
	return styles;
		
	}


}
