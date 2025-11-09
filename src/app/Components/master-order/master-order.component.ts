import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrls: ['./master-order.component.css']
})
export class MasterOrderComponent {
   SelectedID: number = 0;
      CatList:ICategory[];
      total:number=0;
      constructor()
  {
//for order
this.CatList=[
  {
    id:1,
    name:"food"
  },{
        id:2,
    name:"others"
  }
];
//for product
// this.CatList=[
//   {
//     id: 1,
//     name: "Electronics"
//   },
//   {
//     id: 2,
//     name:"Accessories"
//   },
//   {
//     id: 3,
//     name:"Wearables"
//   }
// ];
  }

OnTotalPrice(Price:number){
  this.total=Price;
}

}
