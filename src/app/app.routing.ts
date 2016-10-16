import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component'
import { AboutComponent } from './about/about.component'
import { NewComponent } from './new/new.component'
import { EditComponent } from './edit/edit.component'

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'new', component: NewComponent }, 
  { path: 'edit/:id', component: EditComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);