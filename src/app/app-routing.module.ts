import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUserComponent } from './fontend-app-user/page-user/page-user.component'; 
import { PageUserBuyComponent } from './fontend-app-user/page-user-buy/page-user-buy.component'; 

const routes: Routes = [
  { path: '', component: PageUserComponent },
  { path: 'order-details', component: PageUserBuyComponent } // เพิ่มเส้นทางสำหรับหน้ารายละเอียดอาหาร
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }