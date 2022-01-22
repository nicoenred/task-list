import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    //Estalblecemos promesas (Callbacks y asincronismo)
    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks 
    ));
  }

};
