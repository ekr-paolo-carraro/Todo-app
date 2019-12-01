import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/model/todo.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _todoList = new Subject<Todo[]>();
  getTodoList():Observable<Todo[]>{
    return this._todoList.asObservable();
  }
  private _isLoading = new BehaviorSubject<boolean>(false);
  getIsLoading():Observable<boolean>{
    return this._isLoading.asObservable();
  }
  private _errorMsg = new Subject<string>();
  getErrorMsg():Observable<string>{
    return this._errorMsg.asObservable();
  }

  constructor(private httpClient: HttpClient) { }


  getTodos() {
    this._isLoading.next(true);
    this.httpClient.get<Todo[]>(environment.apiUrl).subscribe(
      (value: Todo[]) => { 
        this._todoList.next( value.concat() );
      },
      (error:Error) => {
        this._errorMsg.next("Error on fetch data: " + error.message );
      },
      () =>{
        this._isLoading.next(false);
      }
    );
  }

  addTodo( todo:Todo ){
    this._isLoading.next(true);
    this.httpClient.put(environment.apiUrl,todo).subscribe(
      (value) => {
        console.log("Add new todo: " + value)
      },
      (error:Error) => {
        this._errorMsg.next("Error on add data: " + error.message );
      },
      () =>{
        this._isLoading.next(false);
      }
    );
  }
}
