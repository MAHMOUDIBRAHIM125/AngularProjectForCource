  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './Components/home/home.component';
  import { MasterOrderComponent } from './Components/master-order/master-order.component';
  import { AboutComponent } from './Components/about/about.component';
  import { ErrorComponent } from './Components/error/error.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ProductComponent } from './Components/products/product.component';
import { OrderComponent } from './Components/order/order.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';

  const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // ✅ إعادة توجيه للمسار home فقط
  { path: '', component: HomeComponent },           // ✅ المسار الفعلي للـ Home
  { path: 'order', component: MasterOrderComponent},
  { path: 'shop', component: ShoppingComponent},
    { path: 'shop/:ID', component: ShoppingDetailsComponent},
  { path: 'order/:ID', component: OrderDetailsComponent },
  { path: 'product', component: ProductComponent},
  { path: 'product/:ID', component: OrderDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
