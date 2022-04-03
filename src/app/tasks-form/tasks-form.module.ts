import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksFormComponent } from './tasks-form.component';



@NgModule({
  declarations: [
    TasksFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[TasksFormComponent]
})
export class TasksFormModule { }
