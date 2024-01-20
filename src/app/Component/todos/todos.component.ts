import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor() {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos !== null) {
      this.todos = JSON.parse(storedTodos);
    } else {
      alert("todos are empty");
      this.todos = [];
    }

  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    let index = this.todos?.indexOf(todo);
    if (index !== undefined && index !== -1) {
      this.todos?.splice(index, 1);
    } 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos?.push(todo);
  }

  ngOnInit(): void {
    // this.todos = [];

  }


}
