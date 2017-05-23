import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserHomeComponent implements OnInit { 
	friends :any[];
	name:string;
	friendCount:number;	
	//for add friend form
	newFriendName:string;
	
	constructor(private userService:UserService,
			    private router: Router,
			   ){}
	ngOnInit() {
		this.populateData();
	}
	populateData() {
		let parentName=JSON.parse(localStorage.getItem("user")).username;
		this.name=JSON.parse(localStorage.getItem("user")).name;
		this.userService.getUserHome(parentName).subscribe(friends =>{
			this.friends=friends;
			this.friendCount=this.friends.length;
		});
		}
	onAddFriendSubmit(){
		//in req body send friendname and the parentUserName	
		this.userService.addFriend(this.newFriendName).subscribe(data =>{
			if(data.success==false){
				//print a message saying you can only have 10 friends delete some friends
			}else{
			this.friends.push(data);
			this.friendCount=this.friends.length;
			}
		});
	}
}
//make it so each friend div on click navigates the router to L's page configure params
//make the L's page
	//get the L's	
//need to make delete friend function 