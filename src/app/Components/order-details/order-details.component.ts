import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
PID:number=0;
Prd:Iproduct|null=null;
constructor(private activerouter:ActivatedRoute ,private location:Location,private Static:StaticDataService) {  }


  ngOnInit(): void {
    // ID From Path in routing
   this.PID=Number(this.activerouter.snapshot.paramMap.get("ID")) ;
   this.getPrd();
  }

  getPrd():Iproduct|null{
    this.Prd=this.Static.getPrdById(this.PID);
    return this.Prd;
  }

back(){
  this.location.back();

 
}



}
