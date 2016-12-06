import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from '@angular/http';

import { HomeApp } from './home/home.component'
import {AboutModule} from './about/about.component'
import {FormsModule} from '@angular/forms';
import {  routing } from './app.routes';
import { AppComponent } from './app.component'
import {AccountApp} from './accounts/account.component'

@NgModule({
 imports : [
     BrowserModule, 
     FormsModule,
     HttpModule,
     JsonpModule,
     routing
     ],
 declarations : [ AppComponent, HomeApp,AboutModule,AccountApp],
 bootstrap : [AppComponent]
})

export class AppModule{}
