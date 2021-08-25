import { Component, OnInit } from '@angular/core';
//decorador@component
@Component({
  selector: 'app-header',
  //templateUrl: './header.component.html',
  //template inline
  template:`
  <mat-toolbar color="primary">
    <span>My Application</span>
  </mat-toolbar>`,
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
