import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { count } from 'rxjs';
import { ICategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticDataService } from 'src/app/Services/static-data.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnChanges , OnInit{


  // PrdList:Iproduct[];
  filteredPrdList:Iproduct[]=[];
  // CatList:ICategory[]
  TotalPrice:number=0;
  // SelectedID:number=0;
  @Input() SendCatId:number=0;
  @Output() NewTotalPrice:EventEmitter<number>; //Generic

  constructor(private router:Router,private Static:StaticDataService )
  {
    this.NewTotalPrice=new EventEmitter<number>();
//     this.PrdList=[
//   {
//     id: 1,
//     name: "Laptop",
//     price: 1500,
//     imgUrl: "assets/img1.jpg",
//     quantity: 1,
//     categoryId: 1
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 800,
//     imgUrl: "assets/img4.jpg",
//     quantity: 20,
//     categoryId: 1
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 150,
//     imgUrl: "assets/img2.jpg",
//     quantity: 30,
//     categoryId: 2
//   },
//   {
//     id: 4,
//     name: "Keyboard",
//     price: 100,
//     imgUrl: "assets/img3.jpg",
//     quantity: 1,
//     categoryId: 2
//   },
//   {
//     id: 5,
//     name: "Monitor",
//     price: 300,
//     imgUrl: "assets/img4.jpg",
//     quantity: 8,
//     categoryId: 3
//   },
//     {
//     id: 6,
//     name: "Monitor",
//     price: 3020,
//     imgUrl: "assets/img1.jpg",
//     quantity: 0,
//     categoryId: 2
//   }
// ];

// this.filteredPrdList=this.PrdList;

// this.CatList=[
//   {
//     id:1,
//     name:"food"
//   },{
//         id:2,
//     name:"others"
//   }
// ];
  }




  // enhancement Product
  PrdTrackBy(index:number,prd:Iproduct){
    return prd.id
  }

  Buy(PrdPrice:number,Count:any){
    // console.log(PrdPrice);
    // console.log(count);
    this.TotalPrice+=Number(Count) * PrdPrice;
    this.NewTotalPrice.emit(this.TotalPrice);
  }

  // ChangeID(){
  //   this.SelectedID=2;
  // }

  FilteratedPrds(){
    this.filteredPrdList=this.Static.getPrdByCID(this.SendCatId);
    // if(this.SendCatId==0){
    //   this.filteredPrdList=this.PrdList;
    // }else{
    //   this.filteredPrdList=this.PrdList.filter(i=>i.categoryId==this.SendCatId);
    // }
    
  }

  // Related to @Input()-------------------->Component LifCycle
    ngOnChanges(): void {
    this.FilteratedPrds();
  }


  //appear data at first time from the web sita
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.filteredPrdList=this.Static.getAllPrds();
  }

  OpenPrdDtail(PID:number){
    this.router.navigateByUrl('/order/'+PID);
  }

  DeleteById(PID:number){
    this.Static.deletePrdById(PID);
  }

}
