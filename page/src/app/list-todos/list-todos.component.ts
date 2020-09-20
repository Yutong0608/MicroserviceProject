import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public gain: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
      new Todo(1, 'product 1', false, new Date()),
      new Todo(2, 'Product 2', false, new Date()),
      new Todo(3, 'Product 3', false, new Date()),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
