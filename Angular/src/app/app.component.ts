import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	link:string;
	index:number=0;
	links: string[]=["./assets/img1.jpg","./assets/img2.jpg","./assets/img3.png"];

	constructor() {}
	changePicture():void {
		if(this.index>2)
			this.index=0;
		this.link=this.links[this.index];
		this.index++;
	}
	ngOnInit() {
		this.link=this.links[this.index];
		window.setInterval(()=>{this.changePicture();},2500);
	}
}
