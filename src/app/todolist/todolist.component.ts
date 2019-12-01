import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[DataService]
})
export class TodolistComponent implements OnInit {

  /*
  private obs = Observable.create(
    observer =>{
      let letters = ['P','A','F','S','O'];
      let name = "";
      setInterval( () => {
        
        let indx = Math.floor( Math.random() * 5 );
        name += letters[indx];
        
        if ( name.length > 6 ){
          observer.complete();
        }

        if ( name.indexOf('O') > - 1 ){
          observer.error( new Error("name contains O!!"));
        }

        observer.next(name);
      }, 1000
      )
    }
  );
  */

  todoList: Todo[] = [];
  busy: boolean = false;
  constructor( private dataService:DataService) { }

  ngOnInit() {
  /*
    this.obs.pipe( map(name => { return name + "-"; }))
    .subscribe( zz => {
      console.log(zz)
    },
    err => {
      console.error(err);
    },
    () => console.log("fine!!!"))
    */
    this.dataService.getIsLoading().subscribe( isLoading => {
      this.busy = isLoading;
    } );
    this.dataService.getTodoList().subscribe( todos => this.todoList = todos );
    this.dataService.getTodos();
  }



}
