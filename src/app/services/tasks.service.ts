import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../tasks-form/interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  urlApi: string = 'http://localhost:3000/tasks'
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.urlApi)
  }
  createTask(task: Tasks): Observable<any> {
    return this.httpClient.post(this.urlApi, task)
  }

}
