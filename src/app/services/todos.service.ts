import {Injectable} from "@angular/core";
import {TODOS} from "../model/data.mock";
import {Todo} from "../model/todo.model";

@Injectable({providedIn: 'root'})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return TODOS;
  }

 async addTodo(todo: Partial<Todo>): Promise<Todo> {
   await sleep(1000);
   return {id: (TODOS.length + 1).toString(), ...todo} as Todo
 }

 async deleteTodo(id: string) {
   await sleep(1000);
 }

 async updateTodo(id: string, completed: boolean) {
   await sleep(1000);
 }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
