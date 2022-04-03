import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  editTask(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }
}
