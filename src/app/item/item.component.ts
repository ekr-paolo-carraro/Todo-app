import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Todo } from 'src/model/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  title: string = "";
  done: boolean = false;

  constructor( private service:DataService ) { }

  ngOnInit() {
  }

  onSubmit( f:NgForm){
    console.log(f.value)
    console.log(f.valid)
    console.log(this.title,this.done)
    let candidateTodo: Todo = { 
      sid:"",
      title:this.title,
      done:this.done,
      userid:""
    };
    this.service.addTodo( candidateTodo )
  }
}
