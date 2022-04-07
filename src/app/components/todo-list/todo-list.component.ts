import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  todosDone: Todo[] = [];

  ngOnInit(): void {
    this.todos = [
      {
        content: "Sleep",
        completed: false
      },
      {
        content: "Dinner",
        completed: false
      },
    ];
    this.todosDone = [];
  }

  // toggleDone (id:number) {
  //   this.todos.map((v, i) => {
  //     if(i == id) v.completed = !v.completed;
  //     console.log(v);
  //     return v;
  //   });
  // }

  toggleDone (id:number) {
    let todoNew: Todo[] = [];
    this.todos.map((v, i) => {
      if(i == id) {
        todoNew = [
          {
            content : v.content,
            completed : !v.completed
          }
        ]
      }
    });
    this.todos = this.todos.filter((v, i) => i !== id);
    this.todosDone.push(todoNew[0]);
  }

  toggleUndone (id:number) {
    let todoNew: Todo[] = [];
    this.todosDone.map((v, i) => {
      if(i == id) {
        todoNew = [
          {
            content : v.content,
            completed : !v.completed
          }
        ]
      }
    });
    this.todosDone = this.todosDone.filter((v, i) => i !== id);
    this.todos.push(todoNew[0]);
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  deleteTodoDone (id:number) {
    this.todosDone = this.todosDone.filter((v, i) => i !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

}
