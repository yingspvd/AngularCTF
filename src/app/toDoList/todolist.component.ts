import { Component, Input } from'@angular/core';

@Component({
    selector:'app-todolist',
    templateUrl:'./todolist.component.html',
    styleUrls:['./todolist.component.css']
})
export class ToDoList {
   @Input()
   text_input : string;
   tasks = [];

   addTask(){
      this.tasks.push(this.text_input);
   }
}