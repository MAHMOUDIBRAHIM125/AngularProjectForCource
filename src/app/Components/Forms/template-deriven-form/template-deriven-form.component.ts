import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticDataService } from 'src/app/Services/static-data.service';

@Component({
  selector: 'app-template-deriven-form',
  templateUrl: './template-deriven-form.component.html',
  styleUrls: ['./template-deriven-form.component.css']
})
export class TemplateDerivenFormComponent {

  newPrd:Iproduct={} as Iproduct;


  constructor(private Static:StaticDataService) {}

  AddProduct(){
    this.Static.postPrd(this.newPrd);
  }

}
