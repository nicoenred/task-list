import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import {Task} from '../Task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks
  }
}