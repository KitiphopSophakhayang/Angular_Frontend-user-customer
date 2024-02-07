import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageUserComponent } from './fontend-app-user/page-user/page-user.component';
import { PageUserBuyComponent } from './fontend-app-user/page-user-buy/page-user-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    PageUserBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
