import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(),
      priority: new FormControl(),
      description: new FormControl()
    })
  }

  ngOnInit(): void {
    console.log(this.form)
  }

}
