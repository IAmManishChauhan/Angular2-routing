import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeApp } from './home/home.component'
import {AboutModule} from './about/about.component'
import {AccountApp} from './accounts/account.component'

export const routes : Routes = [
      { path : '', component : HomeApp },
    { path : 'home', component : HomeApp },
    {path : 'about', component : AboutModule},
    {path : 'account', component : AccountApp}
    
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);