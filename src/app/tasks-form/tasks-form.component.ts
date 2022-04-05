import { TasksService } from './../services/tasks.service';
import { Tasks } from './interfaces/tasks';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  form: FormGroup;

  constructor(public router: Router, private tasksService: TasksService) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      priority: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  ngOnInit(): void {
    console.log(this.form)
    this.form.markAllAsTouched()
  }

  saveTask(task: Tasks) {
    this.tasksService.createTask(task).subscribe()
  }

}
