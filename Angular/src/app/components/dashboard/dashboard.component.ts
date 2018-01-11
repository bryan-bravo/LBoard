import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addButton:boolean;
  showLogin:boolean;
  constructor(
    private authService:AuthService,
	  private userService:UserService,
  	private router:Router,
    private flashMessage:FlashMessagesService) { }
	
//functions

  
  ngOnInit() {
    this.showLogin=false;
  }
  toggleLogin(){
    this.showLogin=!this.showLogin; 
  }
  
    

}
