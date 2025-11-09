import { Component } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
storeData:StoreData;
isAppear:boolean=true;
constructor() {
  this.storeData=new StoreData("ITI","assets/favicon.ico",["menofia","Alex"]);
}
AppearPhoto(){
  this.isAppear=!this.isAppear;
  console.log(this.isAppear);
}


}
