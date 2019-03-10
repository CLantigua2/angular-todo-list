import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // subscribe works like a .then()
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {
    // delete from local
    this.todos = this.todos.filter(taks => taks.id !== todo.id)
    // delete from server
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    // make post request to server through service
    // once we get observable response back we'll add it
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }

}
