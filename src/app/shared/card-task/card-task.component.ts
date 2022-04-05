import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {
  @Input() dataSource: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  editTask(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }
}
