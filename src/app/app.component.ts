import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosState, TodosStore} from "./store/todos.store";
import {JsonPipe} from "@angular/common";
import {TodosListComponent} from "./components/todos-list/todos-list.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, TodosListComponent, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  store = inject<any>(TodosStore);

  ngOnInit() {
    this.loadTodos().then(() => {
      console.log('LOADED');
    })
  }

  async loadTodos() {
    await this.store.loadAll();
  }

}
