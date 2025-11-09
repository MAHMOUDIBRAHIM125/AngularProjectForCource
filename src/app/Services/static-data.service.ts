import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  PrdList:Iproduct[];

  constructor() { 

    this.PrdList=[
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    imgUrl: "assets/img1.jpg",
    quantity: 1,
    categoryId: 1
  },
  {
    id: 2,
    name: "Smartphone",
    price: 800,
    imgUrl: "assets/img4.jpg",
    quantity: 20,
    categoryId: 1
  },
  {
    id: 3,
    name: "Headphones",
    price: 150,
    imgUrl: "assets/img2.jpg",
    quantity: 30,
    categoryId: 2
  },
  {
    id: 4,
    name: "Keyboard",
    price: 100,
    imgUrl: "assets/img3.jpg",
    quantity: 1,
    categoryId: 2
  },
  {
    id: 5,
    name: "Monitor",
    price: 300,
    imgUrl: "assets/img4.jpg",
    quantity: 8,
    categoryId: 3
  },
    {
    id: 6,
    name: "Monitor",
    price: 3020,
    imgUrl: "assets/img1.jpg",
    quantity: 0,
    categoryId: 2
  }
];

  }

getAllPrds():Iproduct[]{
  return this.PrdList;
}

getPrdById(PId:number):Iproduct|null{
  let Prd= this.PrdList.find(p=>p.id==PId);
  return Prd ? Prd : null;
}

getPrdByCID(CID:number):Iproduct[]{
  if(CID===0)
    return this.PrdList;
  else
    return this.PrdList.filter(c=>Number(c.categoryId)===Number(CID));
}

deletePrdById(PId:number):void{
  let Prd= this.PrdList.find(p=>p.id==PId);
  let Index=this.PrdList.indexOf(Prd as Iproduct);
  this.PrdList.splice(Index,1);
  this.getAllPrds();
}

postPrd(prd:Iproduct){
this.PrdList.push(prd);
console.log("done");

}

}
