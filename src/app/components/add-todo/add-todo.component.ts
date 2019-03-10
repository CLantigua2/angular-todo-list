import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter()
  title: string
  constructor() { }

  ngOnInit() {
  }

  // submit handler
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    // need to emit this up because we need access to the direct todos in the todos component
    this.addTodo.emit(todo)
  }

}
