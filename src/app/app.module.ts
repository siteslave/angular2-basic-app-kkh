import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { PostService } from './post.service'

import { routing } from './app.routing';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
