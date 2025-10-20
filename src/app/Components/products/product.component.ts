import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IPrd } from 'src/app/Models/iprd';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnChanges{
products:IPrd[];
// category:ICategory[];
Total:number=0;
  filteredPrdList:IPrd[];;
  @Input() SendCatId:number=0;
  @Output() NewTotalPrice:EventEmitter<number>; //Generic

  constructor(private router:Router ) {
    this.NewTotalPrice=new EventEmitter<number>();
   this.products = [
  {
    id: 1,
    title: "Laptop",
    description: "High-performance laptop for professionals.",
    price: 1500,
    stock: 25,
    brand: "Dell",
    categoryId:1,
    thumbnail: "assets/laptop-thumb.jpg",
    images: [
      "assets/images/laptop1.jpg",
      "assets/images/laptop2.jpg",
      "assets/images/laptop3.jpg"
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    description: "Latest smartphone with AI-powered camera.",
    price: 900,
    stock: 40,
    brand: "Samsung",
    categoryId:1,
    thumbnail: "assets/phone-thumb.jpg",
    images: [
      "assets/images/phone1.jpg",
      "assets/images/phone2.jpg",
      "assets/images/phone3.jpg"
    ]
  },
  {
    id: 3,
    title: "Headphones",
    description: "Noise-cancelling wireless headphones.",
    price: 250,
    stock: 0,
    brand: "Sony",
    categoryId:2,
    thumbnail: "assets/headphone-thumb.jpg",
    images: [
      "assets/images/headphone1.jpg",
      "assets/images/headphone2.jpg",
      "assets/images/headphone3.jpg"
    ]
  },
  {
    id: 4,
    title: "Smartwatch",
    description: "Waterproof smartwatch with fitness tracking.",
    price: 300,
    stock: 45,
    brand: "Apple",
    categoryId:3,
    thumbnail: "assets/watch-thumb.jpg",
    images: [
      "assets/images/watch1.jpg",
      "assets/images/watch2.jpg",
      "assets/images/watch3.jpg"
    ]
  },
  {
    id: 5,
    title: "Camera",
    description: "Professional DSLR camera with 4K recording.",
    price: 2200,
    stock: 1,
    brand: "Canon",
    categoryId:1,
    thumbnail: "assets/camera-thumb.jpg",
    images: [
      "assets/images/camera1.jpg",
      "assets/images/camera2.jpg",
      "assets/images/camera3.jpg"
    ]
  },
  {
    id: 6,
    title: "Keyboard",
    description: "Mechanical keyboard with RGB lighting.",
    price: 120,
    stock: 100,
    brand: "Logitech",
    categoryId:2,
    thumbnail: "assets/keyboard-thumb.jpg",
    images: [
      "assets/images/keyboard1.jpg",
      "assets/images/keyboard2.jpg",
      "assets/images/keyboard3.jpg"
    ]
  },
  {
    id: 7,
    title: "Tablet",
    description: "Lightweight tablet with 10-inch display.",
    price: 700,
    stock: 30,
    brand: "Lenovo",
    categoryId:3,
    thumbnail: "assets/tablet-thumb.jpg",
    images: [
      "assets/images/tablet1.jpg",
      "assets/images/tablet2.jpg",
      "assets/images/tablet3.jpg"
    ]
  },
  {
    id: 8,
    title: "Monitor",
    description: "27-inch 4K Ultra HD monitor.",
    price: 500,
    stock: 20,
    brand: "LG",
   categoryId:1,
    thumbnail: "assets/monitor-thumb.jpg",
    images: [
      "assets/images/monitor1.jpg",
      "assets/images/monitor2.jpg",
      "assets/images/monitor3.jpg"
    ]
  }
];

// this.category=[
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


  this.filteredPrdList=this.products;
  
    }
  
  
    // enhancement Product
    // PrdTrackBy(index:number,prd:Iproduct){
    //   return prd.id
    // }
  
    Buy(PrdPrice:number,Count:any){
      // console.log(PrdPrice);
      // console.log(count);
      this.Total+=Number(Count) * PrdPrice;
      this.NewTotalPrice.emit(this.Total);
    }
  
    // ChangeID(){
    //   this.SelectedID=2;
    // }
  
    FilteratedPrds(){
      if(this.SendCatId==0){
        this.filteredPrdList=this.products;
      }else{
        this.filteredPrdList=this.products.filter(i=>i.categoryId==this.SendCatId);
      }
      
    }
  
    // Related to @Input()-------------------->Component LifCycle
      ngOnChanges(): void {
      this.FilteratedPrds();
    }
  
    OpenPrdDtail(PID:number){
      this.router.navigateByUrl('/order/'+PID);
    }
  // Buy(price: number, count: any) {

  //   this.Total+=Number(count)*price;

  //   alert(`You bought ${count}  item(s) for a total of $${this.Total}`);
  // }

}
