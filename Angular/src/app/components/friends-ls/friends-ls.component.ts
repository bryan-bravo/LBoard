import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-friends-ls',
  templateUrl: './friends-ls.component.html',
  styleUrls: ['./friends-ls.component.css']
})
export class FriendsLsComponent implements OnInit {
	friendId:string;
	currentFriend:Object;
	Ls:any[];
	
	showAddForm:boolean;
	showWarning:boolean;
	newTitle:string;
	newDesc:string;
	

  constructor( private navrouter:Router, private router: ActivatedRoute, private userService: UserService) { }
  
  ngOnInit() {
	   this.getParams();
	   this.populateLData();
	   this.getFriendById();
	   this.showAddForm=false;
	   this.showWarning=false;
  }
  
  getParams(){
	this.router.params.subscribe(params => {
		 this.friendId=params['friendId'];
	});	
  }
  
  populateLData(){
	this.userService.getFriendLs(this.friendId).subscribe(Ls =>{this.Ls=Ls;});
  }
	

  getFriendById(){
	  this.userService.getFriendById(this.friendId).subscribe( friend =>{
		 console.log(friend)
		 this.currentFriend=friend;
		
		});
  }
  navUserHome(){
	this.navrouter.navigate(['userhome']);
  }
	//heart of component
    onAddLSubmit(){
		let newL ={
			title:this.newTitle,
			date: "DATE",
			desc:this.newDesc,
			friendId:this.friendId
		};
		
		this.userService.addL(newL).subscribe(L =>{
			if(L.success==false){
					//print a message saying you suck
			}else{
				this.Ls.push(L);
				//this.friendCount=this.friends.length;
			this.resetFormHelpers();
			// this.currentFriend.lCount++;
			}
		});
		
			
  }
//display functions
  changeAddFormState(){
	this.showAddForm=true;
  }	
  changeWarningState(){
    this.showWarning =true; 
  }	  
  resetFormHelpers(){ 
    this.showWarning =false; 
 	this.showAddForm=false;
	this.newTitle='';
	this.newDesc='';
  }	

}
