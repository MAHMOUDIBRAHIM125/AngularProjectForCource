import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDataService } from 'src/app/Services/dynamic-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  prdList:any[]=[];

  constructor(private Dynamic:DynamicDataService , private router:Router) {}
  ngOnInit(): void {
    this.Dynamic.getAllPrds().subscribe(p=>this.prdList=p);
  }

OpenPrdDtail(PID:number){
    this.router.navigateByUrl('/shop/'+PID);
}

DeleteById(PID:number){
      if (confirm('Are you sure you want to delete this item?')) {
      this.Dynamic.deletePrdById(PID).subscribe(() => {
        // بعد الحذف نحدث القائمة
        this.prdList = this.prdList.filter(p => p.id !== PID);
      });
    }
}

}
