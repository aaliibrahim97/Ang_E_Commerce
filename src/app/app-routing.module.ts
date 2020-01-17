import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/navbar/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { SignupComponent } from './views/pages/signup/signup.component';
import { AccountComponent } from './views/navbar/account/account.component';
import { NotFoundComponent } from './views/pages/not-found/not-found.component';
import { GoodsComponent } from './views/navbar/goods/goods.component';
import { CartComponent } from './views/navbar/cart/cart.component';
import { OrdersComponent } from './views/navbar/orders/orders.component';
import { WeddingsComponent } from './views/pages/weddings/weddings.component';
import { LeatherComponent } from './views/pages/leather/leather.component';
import { AccessoriesComponent } from './views/pages/accessories/accessories.component';

import { AuthGuard } from './services/guards/auth.guard';


const routes: Routes = [
  //views
  {path:'', component:HomeComponent},
  {path:'user', component:AccountComponent},
  {path:'admin', component:GoodsComponent},
  {path:'cart', component:CartComponent, canActivate: [AuthGuard]},
  {path:'orders', component:OrdersComponent},

  //pages
  {path:'login', component:LoginComponent},
  {path:'register', component:SignupComponent},
  {path:'wedding', component:WeddingsComponent},
  {path:'leather', component:LeatherComponent},
  {path:'accessories', component:AccessoriesComponent},
  {path:'**', component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
