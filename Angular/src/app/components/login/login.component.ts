 import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import {AuthService} from '../../services/auth.service'; 
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	showWarning:boolean;
	warning:string;
  username: String;
  password: String;
  @Output() loggedIn = new EventEmitter<boolean>();
  constructor(private authService:AuthService,
			  private router: Router,
			  private flashMessage:FlashMessagesService
			  ) { }
  ngOnInit() {
		this.warning='';
		this.showWarning=false;
	}
  
  onLoginSubmit(){
     //make model
	 const user = {
      username: this.username,
      password: this.password
    }
	//comm with server
	if(!this.username||!this.password){
		this.warning='Empty Field(s)';
		this.showWarning=true;
		return;
	}
	this.authService.authenticateUser(user).subscribe(data => {
       if(data.success){
				//the data returned if successful:  
				this.authService.storeUserData(data.token, data.user);
				this.loggedIn.emit(false);
				this.router.navigate(['userhome']);//user home
			
      } else {
				this.warning=data.msg;
				this.showWarning=true;
			}
    });
  }
	
}
