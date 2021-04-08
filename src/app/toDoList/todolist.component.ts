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
   index: number;
   val = 1;

   addTask(){
      this.tasks.push(this.text_input);
      this.index = this.tasks.indexOf(this.text_input,0)
      console.log(this.index);
      
   }

   deleteTask(i){
     this.tasks.splice(i,1);
   }
}