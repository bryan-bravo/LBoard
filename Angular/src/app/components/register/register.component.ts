import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  password: String;
  retypepassword:String;
	showWarning:boolean;
	warning:string;
  constructor(private authService:AuthService,
			  private router: Router,
			  private flashMessage:FlashMessagesService
			  ) { }

  ngOnInit() {
		this.warning='';
		this.showWarning=false;
  }
  onRegisterSubmit(){
	if(!this.name||!this.username||!this.password||!this.retypepassword){
		this.warning='Empty Field(s)';
		this.showWarning=true;
				return;
	}
	if(this.password!=this.retypepassword){
		this.warning='Passwords do not match';
		this.showWarning=true;		let password=(<HTMLInputElement>document.getElementById('password'));
		let retypepassword=(<HTMLInputElement>document.getElementById('retypepassword'));
		password.value='';
		retypepassword.value='';
		return;
	}
	const user = {
      name: this.name,
      username: this.username,
      password: this.password
    }
    this.authService.registerUser(user).subscribe(data => {
		if(data.success){
			this.warning='Registration successful, you can now log in';
			this.showWarning=true;
			this.router.navigate(['/login']);
    } else { 
			this.warning=data.msg;
			this.showWarning=true;
			this.router.navigate(['/register']);
    }
    });	
  }
}
