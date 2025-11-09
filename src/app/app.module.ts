import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
// import { NavbarComponent } from './SliderProject/navbar/navbar.component';
// import { AsideComponent } from './SliderProject/aside/aside.component';
// import { MainComponent } from './SliderProject/main/main.component';
import { OrderComponent } from './Components/order/order.component';
import { LightboxDirective } from './Directives/lightbox.directive';
import { IncPricePipe } from './Pipes/inc-price.pipe';
import { ByEgDirective } from './Directives/by-eg.directive';
import { ProductComponent } from './Components/products/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterOrderComponent } from './Components/master-order/master-order.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { TemplateDerivenFormComponent } from './Components/Forms/template-deriven-form/template-deriven-form.component';
import { ReactiveFormComponent } from './Components/Forms/reactive-form/reactive-form.component';
import { AllUserComponent } from './Components/all-user/all-user.component';

@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     FooterComponent,
     HomeComponent,
    // NavbarComponent,
    // AsideComponent,
    // MainComponent,
    OrderComponent,
    LightboxDirective,
    IncPricePipe,
    ByEgDirective,
    ProductComponent,
    MasterOrderComponent,
    AboutComponent,
    ErrorComponent,
    OrderDetailsComponent,
    ShoppingComponent,
    ShoppingDetailsComponent,
    TemplateDerivenFormComponent,
    ReactiveFormComponent,
    AllUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
