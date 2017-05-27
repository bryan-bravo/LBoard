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
	
	newTitle:string;
	newDesc:string;
	
//get the friend based off of id
//get the ls associated with a friend
//populate data
  constructor( private router: ActivatedRoute, private userService: UserService) { }

  
  getParams(){
	this.router.params.subscribe(params => {
		this.friendId=params['friendId'];
	});	
  }
  
  populateLData(){
	this.userService.getFriendLs(this.friendId).subscribe(Ls =>{this.Ls=Ls;});
	//left off here subscribe from response
	}
	
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
			}
		});
	
 }	
   ngOnInit() {
	   this.getParams();
	   this.populateLData();
  }
  
}
