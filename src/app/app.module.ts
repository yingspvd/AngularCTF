import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {CountingComponent} from './counting/counting.component';
import {Lab4} from './lab4/lab4.component';
import { FormsModule } from'@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
