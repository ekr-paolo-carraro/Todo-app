import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { 
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { ItemComponent } from './item/item.component';
import { AppRouterModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ToolbarComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, AppRouterModule, FormsModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
