import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import {UserService} from '../../services/user.service';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';


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

// Cropper 1 data
data1:any;
cropperSettings1:CropperSettings;
@ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  constructor(
		private navrouter:Router, 
		private router: ActivatedRoute,
		private userService: UserService,
		private flashMessage:FlashMessagesService){
		this.cropperSettings1 = new CropperSettings();
		this.cropperSettings1.width = 200;
		this.cropperSettings1.height = 200;

		this.cropperSettings1.croppedWidth = 200;
		this.cropperSettings1.croppedHeight = 200;

		this.cropperSettings1.canvasWidth = 500;
		this.cropperSettings1.canvasHeight = 300;

		this.cropperSettings1.minWidth = 100;
		this.cropperSettings1.minHeight = 100;

		this.cropperSettings1.rounded = false;
		this.cropperSettings1.noFileInput = true;

		this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
		this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

		this.data1 = {};
	}
  
  ngOnInit() {
	this.profileSrc='../../../assets/profile_default.png';
	this.getParams();
	this.populateLData();
	this.getFriendById();
	this.showAddForm=false;
	this.showWarning=false;
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
			if(L.hasOwnProperty("image"))
				L.hasImage=true;
			else
				L.hasImage=false;			
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
		this.navrouter.navigate(['userhome']);
	}
  fileChangeListener($event) {
		var image: any = new Image();
		var file:File = $event.target.files[0];
		var myReader:FileReader = new FileReader();
		var that = this;
		myReader.onloadend = function (loadEvent:any) {
				image.src = loadEvent.target.result;
				that.cropper.setImage(image);

		};
		myReader.readAsDataURL(file);
	}
	cropped(bounds:Bounds) {
		if(this.data1.image.includes('data:image/jpeg;base64'))
		this.data1.image=this.data1.image.replace('data:image/jpeg;base64,','');
		if(this.data1.image.includes('data:image/png;base64'))
		this.data1.image=this.data1.image.replace('data:image/png;base64,','');
	}
 //heart of component
  onAddLSubmit(){
		if(!this.newTitle||!this.newDesc){
			return;
		}
		let newL ={
			title:this.newTitle,
			desc:this.newDesc,
			friendId:this.friendId,
			file:this.data1.image
		};
		
		this.userService.addL(newL).subscribe(L =>{
			if(L.success==false){
				this.flashMessage.show(L.msg, {cssClass: 'warning', timeout: 3000});
			}else{
				if(L.hasOwnProperty("image"))
				L.hasImage=true;
				else
				L.hasImage=false;				
			
				this.Ls.push(L);
				this.resetFormHelpers();
				this.currentFriend.lCount++;
			}
		});	
  }
  onUpdatePicture(){
	this.userService.changeFriendPhoto(this.friendId,this.data1.image)
	.subscribe(friend=>{
		if(friend.hasOwnProperty('image'))
		this.profileSrc=("data:image/png;base64,"+friend.image.data);
		this.resetFormHelpers();
	});			
  } 
  getFileFromInput(fileInput) {
	let fi = fileInput.nativeElement;
		if (fi.files && fi.files[0]) {
				var fileToUpload = fi.files[0];
		return fileToUpload;	
	}
	return null;
  }
getHeightForCanvas(){

}
getWidthForCanvas(){
	
}
//display functions
  changeAddFormState(){
	this.resetFormHelpers();
	this.showAddForm=true;
  }	
  changeWarningState(){
    this.showWarning=true; 
  }	

  changeUpdatePhotoState(){
	this.resetFormHelpers();
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