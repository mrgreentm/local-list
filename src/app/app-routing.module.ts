import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { TasksFormModule } from './tasks-form/tasks-form.module';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all-tasks',
    component: AllTasksComponent,
  },
  {
    path: 'edit',
    component: TasksFormComponent,
    loadChildren: () => import('./tasks-form/tasks-form.module').then(m => m.TasksFormModule)
  },
  {
    path: 'edit/:id',
    component: TasksFormComponent,
    loadChildren: () => import('./tasks-form/tasks-form.module').then(m => m.TasksFormModule),
  },
  {
    path: '',
    component: AllTasksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
