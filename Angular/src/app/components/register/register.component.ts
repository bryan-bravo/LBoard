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
  
  constructor(private authService:AuthService,
			  private router: Router,
			  private flashMessage:FlashMessagesService
			  ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
	if(!this.name||!this.username||!this.password||!this.retypepassword){
		this.flashMessage.show('Empty Field(s).', {cssClass: 'warning', timeout: 3000});
		return;
	}
	if(this.password!=this.retypepassword){
		this.flashMessage.show('Passwords do not match.', {cssClass: 'warning', timeout: 3000});
		let password=(<HTMLInputElement>document.getElementById('password'));
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
		 this.flashMessage.show('You are now registered and can log in', {cssClass: 'success', timeout: 3000});
		 this.router.navigate(['/login']);
      } else { 
			 this.flashMessage.show(data.msg, {cssClass: 'warning', timeout: 3000});
			this.router.navigate(['/register']);
      }
    });	
  }
}
