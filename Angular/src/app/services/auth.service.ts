import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;
  
  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }
  //
  //communicates with backend to add user
  registerUser(user){
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		let ep = this.prepEndpoint('registeruser');
		return this.http.post(ep, user,{headers: headers})
		  .map(res => res.json());
  }
  //checks for valid username and password
    authenticateUser(user){
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		let ep = this.prepEndpoint('authenticate');
		return this.http.post(ep, user,{headers: headers})
		  .map(res => res.json());
  }
  
  //sets jwt token and user in local scope
    storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
   //clears the local storage
    logout(){
		this.authToken = null;
		this.user = null;
		localStorage.clear();
  }
  //checks if a token is in local storage
    loggedIn(){
		return tokenNotExpired('id_token');
  }
  //gives where the http request will be
    prepEndpoint(ep){
		if(!this.isDev){
		  return 'controllers/'+ep;
		} else {
		  return 'http://localhost:8080/controllers/'+ep;
		}
   }  

}
