import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { TASKS } from '../mock-task';
import {Task} from '../Task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task'

  constructor(
    private http:HttpClient
  ) { }

  getTask(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl);

    /*  
    const tasks = of(TASKS);
    return tasks
    */

  }
}
