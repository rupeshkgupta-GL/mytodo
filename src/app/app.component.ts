import { Model, TodoItem } from './model';
import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';}
// import { ElementRef } from '@angular/core';}

@Component({
  selector: 'todo',
  // selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<span>{{x}}</span>',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'mytodo';
  isTaskCompleted = false;

  model = new Model();

  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return this.model.items
    .filter(item => item.done == this.isTaskCompleted);
  }

  getCompletedTasks() {
    return this.model.items.filter(obj => obj.done === true).length +"/"+ this.model.items.length;
  }

  addItem(newItem:string){
    this.model.items.push(new TodoItem(newItem, true));
  }
}
