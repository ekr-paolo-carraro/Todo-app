import { Routes, RouterModule } from "@angular/router"
import { TodolistComponent } from "./todolist/todolist.component";
import { NgModule } from "@angular/core";
import { ItemComponent } from "./item/item.component";

const appRouters:Routes = [
    {path: 'list', component:TodolistComponent},
    {path: 'new-item', component:ItemComponent},
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRouters)
    ],
    exports:[RouterModule]
})
export class AppRouterModule{}