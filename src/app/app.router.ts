import  { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const router: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);