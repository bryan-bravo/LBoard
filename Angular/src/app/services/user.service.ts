import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class UserService {

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }
  getUserHome(username){
		// this.user is set prior when the user logs in
		let ep = this.prepEndpoint('userHome/'+username);
		// return this.http.get(ep, user,{headers: headers})
		return this.http.get(ep).map(res => res.json());	
  }
  
  addFriend(friendName){
	const bodystuff = {
			name: friendName,
			parentUserName: JSON.parse(localStorage.getItem("user")).username;
			}
	let headers = new Headers();
		headers.append('Content-Type','application/json');
		let ep = this.prepEndpoint('addfriend');
		return this.http.post(ep, bodystuff,{headers: headers})
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
