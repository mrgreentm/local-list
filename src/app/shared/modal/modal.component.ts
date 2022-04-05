import { TasksService } from './../../services/tasks.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: any,
    public router: Router,
    private tasksService: TasksService) { }


  ngOnInit(): void {
  }

  delete(): void {
    this.tasksService.delete(this.id.id).subscribe()
    window.location.reload()
  }

}
