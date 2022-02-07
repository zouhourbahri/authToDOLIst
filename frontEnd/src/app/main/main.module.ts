import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListsComponent } from './lists/lists.component';
import { TaskComponent } from './task/task.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    ListsComponent,
    TaskComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
