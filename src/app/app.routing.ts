import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component'

const appRoutes: Routes = [
  { path: '', component: MainComponent }, //http://xxx/
  { path: 'main', component: MainComponent }, // http://xxx/main
  { path: 'about', component: AboutComponent } // http://xxx/about
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);