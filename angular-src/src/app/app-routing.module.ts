import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { LoginComponent } from './emart/signup/login/login.component';
import { LogoutComponent } from './emart/signup/logout/logout.component';
import { BuyerSignupComponent } from './emart/signup/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/signup/seller-signup/seller-signup.component';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './emart/first/first.component';



const routes: Routes = [

                        {
                            path: '',
                            component:LoginComponent
                        },
                        {
                          path: 'first',
                          component:FirstComponent
                        },
                        {
                          path: 'item-display/:iId',
                          component: ItemDisplayComponent,
                          canActivate: [AuthGuard]
                        },
                        {
                          path: 'item-list',
                          component: ItemListComponent,
                          canActivate: [AuthGuard]
  
                        },

                        {
                          path: 'buyer-signup',
                          component: BuyerSignupComponent
                        },
                        {
                          path: 'cart-list',
                          component: CartListComponent,
                          canActivate: [AuthGuard]
                          
                        },
                        {
                          path: 'bill-view',
                          component: BillViewComponent,
                          canActivate: [AuthGuard]
                         
                        },
                      
                        {
                          path: 'bill-list',
                          component: BillListComponent, 
                          canActivate: [AuthGuard]
                        },
                        {
                          path: 'seller-signup',
                          component: SellerSignupComponent
                        },
                        {
                          path: 'logout',
                          component: LogoutComponent
                        }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
