import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }
  //---user stuff-----------
  deleteUser(username){
	let ep = this.prepEndpoint('deleteUser/'+username);
		return this.http.delete(ep).map(res => res.json());	
  }
  //-------FriendStuff------ 
  getFriends(username){
		//gets the friends
		let ep = this.prepEndpoint('getFriends/'+username);
		return this.http.get(ep).map(res => res.json());	
  }
  
  addFriend(friendName){
	const bodystuff = {
			name: friendName,
			parentUserName: JSON.parse(localStorage.getItem("user")).username
			}
	let headers = new Headers();
		headers.append('Content-Type','application/json');
		let ep = this.prepEndpoint('addfriend');
		return this.http.post(ep, bodystuff,{headers: headers})
		  .map(res => res.json());		
				
  }
  deleteFriend(friendid){
		let ep = this.prepEndpoint('deleteFriend/'+friendid);
		return this.http.delete(ep).map(res => res.json());
  }
  //---------LStuff---------
  getFriendLs(friendId){
	  let ep = this.prepEndpoint('friendHome/'+friendId);
	  return this.http.get(ep).map(res => res.json());	
  }
  
  addL(L){
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		let ep = this.prepEndpoint('addL');
		return this.http.post(ep, L,{headers: headers})
		  .map(res => res.json());		
				
  }
  
  //gives where the http request will be
    prepEndpoint(ep){
		if(this.isDev){
		  return ep;
		} else {
		  return 'http://localhost:8080/controllers/'+ep;
		}
   } 
  
}
