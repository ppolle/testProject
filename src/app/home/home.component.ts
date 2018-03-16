import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	btnText: string ="Add an item";
	itemCount:number = 4;
	goalText: string = "My First Life Goal";

  constructor() { }

  ngOnInit() {
  }

}
