import { Tasks } from './tasks-form/interfaces/tasks';
import { TasksService } from './services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'localList';
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {}


}
