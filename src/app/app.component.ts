import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-one';

  flag:boolean;
  items:string[];
  
  constructor(){
    this.flag = true;
    this.items = ['A class', 'B class', 'C class']
  }

  toggleBtn() {
    this.flag = !this.flag
  }
  addItems() {
    this.items.push('D class');
  }
  deleteItem(i){
    this.items.splice(i,1);
  }
  resetItems() {
    this.items = ['A class', 'B class', 'C class']
  }

}

