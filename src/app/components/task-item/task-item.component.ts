import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[2]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemidner: EventEmitter<Task> = new EventEmitter();
  faTimes= faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void{
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task):void {
    this.onToggleRemidner.emit(task);
  }

}

/* aca tenemos l lista de tareas metidas en JSOn que se la pasmos la task component y el task component y se la pasa al task item component */