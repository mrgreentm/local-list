import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks-form/interfaces/tasks';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  allTasks: Tasks[] = []
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.tasksService.getAll().subscribe((res: Tasks[]) => {
      this.allTasks = res
    })
  }

}
