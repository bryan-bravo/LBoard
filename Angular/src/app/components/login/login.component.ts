import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  
  constructor(private authService:AuthService,
			  private router: Router,
			  private flashMessage:FlashMessagesService
			  ) { }
  ngOnInit() {}
  
  onLoginSubmit(){
     //make model
	 const user = {
      username: this.username,
      password: this.password
    }
	//comm with server
	this.authService.authenticateUser(user).subscribe(data => {
       if(data.success){
			//the data returned if successful:  
			this.authService.storeUserData(data.token, data.user);
			this.flashMessage.show('You are now logged in', {
			  cssClass: 'alert-success',
			  timeout: 5000});
			 this.router.navigate(['userhome']);//user home
			
      } else {
			this.flashMessage.show(data.msg, {
			cssClass: 'alert-danger',
			timeout: 5000});
			this.router.navigate(['login']);
      }
    });
  }
	
}
