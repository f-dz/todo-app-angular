import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";
  message: string = "";

  addTodo() {
    if (this.inputTodo.trim().length === 0){
      this.message = "*Please input something!";
    } else {
      const todo: Todo = {
        content: this.inputTodo,
        completed: false
      };
      this.newTodoEvent.emit(todo);
      this.inputTodo = "";
      this.message = "";
    }
  }

}
