import { ModalComponent } from './../modal/modal.component';
import { TasksService } from './../../services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {
  @Input() dataSource: any;
  constructor(private router: Router, private tasksService: TasksService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  editTask(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }
  openDialog(id: number) {
    this.dialog.open(ModalComponent, {
      data: {
        id: id,
      },
    });
  }
}
