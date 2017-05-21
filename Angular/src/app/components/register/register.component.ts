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
  
  constructor(private authService:AuthService,
			  private router: Router,
			  private flashMessage:FlashMessagesService
			  ) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
   //create the model
   const user = {
      name: this.name,
      username: this.username,
      password: this.password
    }
	//make sure the forms are filled
	//register user
    this.authService.registerUser(user).subscribe(data => {
		if(data.success){
		 this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
			// this.router.navigate(['/login']);
      } else {
		  console.log( data)
			 this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
			this.router.navigate(['/register']);
      }
    });	
  }
}
