import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {

  PID:number=0;
  prd:any;

constructor(private location:Location,private activerouter:ActivatedRoute,private Dynamic:DynamicDataService) {
}

  ngOnInit(): void {
    // ID From Path in routing
   this.PID=Number(this.activerouter.snapshot.paramMap.get("ID")) ;
   this.Dynamic.getPrdById(this.PID).subscribe(p=>this.prd=p);
  }

  back(){
    this.location.back()
  }
}
