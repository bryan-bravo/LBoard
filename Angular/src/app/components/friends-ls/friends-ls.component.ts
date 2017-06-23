import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-friends-ls',
  templateUrl: './friends-ls.component.html',
  styleUrls: ['./friends-ls.component.css']
})
export class FriendsLsComponent implements OnInit {
	friendId:string;
	currentFriend:any;
	Ls:any[];
	profileSrc:string;
	
	showAddForm:boolean;
	showWarning:boolean;
	showUpdatePhoto:boolean;
	
	newTitle:string;
	newDesc:string;

	@ViewChild("fileInput") lFileInput;
	@ViewChild("proFileInput") proFileInput;
	
	

  constructor(
			private navrouter:Router, 
			private router: ActivatedRoute,
			private userService: UserService,
			private flashMessage:FlashMessagesService) { }
  
  ngOnInit() {
	   this.profileSrc='../../../assets/profile_default.png';
	   this.getParams();
	   this.populateLData();
	   this.getFriendById();
	   this.showAddForm=false;
	   this.showWarning=false;
	   this.showUpdatePhoto=false;
  }
  
  getParams(){
	this.router.params.subscribe(params => {
		 this.friendId=params['friendId'];
	});	
  }
  
  populateLData(){
	this.userService.getFriendLs(this.friendId).subscribe(Ls =>{
		Ls.forEach((L)=>{ 
			if(L.hasOwnProperty("image")){
				L.hasImage=true;
			}else{
				L.hasImage=false;
			}			
		});
		this.Ls=Ls;
		});
  }
	
  getFriendById(){
	  this.userService.getFriendById(this.friendId).subscribe( friend =>{
		 this.currentFriend=friend;
		 if(friend.hasOwnProperty('image'))
			 this.profileSrc=("data:image/png;base64,"+friend.image.data);
	  });
  }
  navUserHome(){
	  //if loading disable navigation
	this.navrouter.navigate(['userhome']);
  }
 //heart of component
    onAddLSubmit(){
		if(!this.newTitle||!this.newDesc){
			this.flashMessage.show('Empty field.', {cssClass: 'warning', timeout: 3000});
			return;
		}
		let fileToUpload = this.getFileFromInput(this.lFileInput);
		let newL ={
			title:this.newTitle,
			desc:this.newDesc,
			friendId:this.friendId,
			file:fileToUpload
		};
		
		this.userService.addL(newL).subscribe(L =>{
			if(L.success==false){
				this.flashMessage.show(L.msg, {cssClass: 'warning', timeout: 3000});
			}else{
				 if(L.hasOwnProperty("image")){
					L.hasImage=true;
				 }else{
					L.hasImage=false;				
				 }
				this.Ls.push(L);
				this.resetFormHelpers();
				this.currentFriend.lCount++;
			}
		});
		
			
  }
  onUpdatePicture(){
	let fileToUpload = this.getFileFromInput(this.proFileInput);
	if(fileToUpload){
		this.userService.changeFriendPhoto(this.friendId,this.getFileFromInput(this.proFileInput))
		.subscribe(friend=>{
			if(friend.hasOwnProperty('image'))
			this.profileSrc=("data:image/png;base64,"+friend.image.data);
		this.resetFormHelpers();
		});			
	}else{
		this.proFileInput.nativeElement.value='';
	}	
  } 
  getFileFromInput(fileInput) {
	let fi = fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        var fileToUpload = fi.files[0];
		return fileToUpload;	
	}
	return null;
  }

  checkIfImage(input){  
	if(input=="L"){
		var fileToUpload = this.getFileFromInput(this.lFileInput);
		var fileInput=this.lFileInput;

	}else{
		var fileToUpload = this.getFileFromInput(this.proFileInput);
		var fileInput=this.proFileInput;
	}
	if(fileToUpload.type == 'image/jpeg' || fileToUpload.type == 'image/png'){}
	else{
		fileInput.nativeElement.value='';
			this.flashMessage.show('File is not an image.', {cssClass: 'warning', timeout: 3000});
	}
  }

 
//display functions
  changeAddFormState(){
	this.showAddForm=true;
  }	
  changeWarningState(){
    this.showWarning=true; 
  }	

  changeUpdatePhotoState(){
  	this.showUpdatePhoto=true;
  }	  
  resetFormHelpers(){ 
    this.showWarning =false; 
 	this.showAddForm=false;
	this.showUpdatePhoto=false;
	this.newTitle='';
	this.newDesc='';
  }	

}