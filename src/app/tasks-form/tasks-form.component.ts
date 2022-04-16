import { TasksService } from './../services/tasks.service';
import { Tasks } from './interfaces/tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { pipe, timeout } from 'rxjs';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {
  taskId: any;
  form: FormGroup;
  currentTaks!: Tasks;

  constructor(public router: Router, private tasksService: TasksService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      priority: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
    this.route.params.subscribe(params => this.taskId = params['id']);

  }

  ngOnInit(): void {
    this.form.markAllAsTouched()
    if (this.taskId) {
      this.tasksService.findOne(this.taskId)
        .subscribe(({ title, description, priority }: Tasks) =>
          this.form.patchValue({ title: title, description: description, priority: priority }))
    }
  }

  saveTask(task: Tasks) {
    if (this.taskId && this.form.valid) {
      this.tasksService.update(task, this.taskId).subscribe()
      this.router.navigate(['all-tasks']).then(() => window.location.reload())
    } else if (this.form.valid) {
      this.tasksService.createTask(task).subscribe()
      this.router.navigate(['all-tasks']).then(() => window.location.reload())
    }
  }


}
