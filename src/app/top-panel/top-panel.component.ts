import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent implements OnInit {
  navItem:any[];
  
  constructor() {
    this.navItem = ['Home','Signin','Singup']
   }

  ngOnInit() {
  }

}
