import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardBodyComponent } from './dashboard-body/dashboard-body.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MfashionComponent } from './mfashion/mfashion.component';
import { BeautyHealthComponent } from './beauty-health/beauty-health.component';
import { CartPageComponent } from './cart-page/cart-page.component';

import { PopupsmsService } from './services/popupsms.service';
import {HttpService} from './services/http.service';
import {ClickImgService } from './services/click-img.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

import {HttpModule} from '@angular/http';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule} from '@angular/forms';
const appRoutes: Routes = [
  {
    path: '',
    component: DashboardBodyComponent
   },
   {
    path: 'laptops',
    component: LaptopsComponent
   },
   {
    path: 'mfashion',
    component: MfashionComponent
   },
   {
    path: 'beauty-health',
    component:BeautyHealthComponent
   },
   {
    path: 'cart-page',
    component:CartPageComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardBodyComponent,
    LaptopsComponent,
    MfashionComponent,
    BeautyHealthComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    HttpModule
  ],
  providers: [HttpService,PopupsmsService,
  FlashMessagesService,ClickImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
