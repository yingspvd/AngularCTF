import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {CountingComponent} from './counting/counting.component';
import {Lab4} from './lab4/lab4.component';
import {NavBar} from './navBar/navBar.component';
import {TopBanner} from './topBanner/topBanner.component';
import {CategoryMenu} from './categoryMenu/categoryMenu.component';
import {SearchBar} from './searchBar/searchBar.component';
import {ToDoList} from './toDoList/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4,
    NavBar,
    TopBanner,
    CategoryMenu,
    SearchBar,
    ToDoList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
