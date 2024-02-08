import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageUserComponent } from './fontend-app-user/page-user/page-user.component';
import { PageUserBuyComponent } from './fontend-app-user/page-user-buy/page-user-buy.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageUserAllmenuComponent } from './fontend-app-user/page-user-allmenu/page-user-allmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    PageUserBuyComponent,
    FilterPipe,
    PageUserAllmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
