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
// make this only valid when user logged in
   // userName:string;JSON.parse(localStorage.getItem("user")).name;
  addButton:boolean;
  
  constructor(
    private authService:AuthService,
	private userService:UserService,
	private router:Router,
    private flashMessage:FlashMessagesService) { }
	
//functions

  
  ngOnInit() {
	}

}
