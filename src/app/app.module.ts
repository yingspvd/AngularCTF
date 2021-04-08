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
import { NavBarHW3Component } from './HW3/nav-bar-hw3/nav-bar-hw3.component';
import { SearchBoxHw3Component } from './HW3/search-box-hw3/search-box-hw3.component';
import { MenuHw3Component } from './HW3/menu-hw3/menu-hw3.component';
import { HomeHW3Component } from './HW3/home-hw3/home-hw3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './HW3/banner/banner.component';



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
    ToDoList,
    NavBarHW3Component,
    SearchBoxHw3Component,
    MenuHw3Component,
    HomeHW3Component,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
