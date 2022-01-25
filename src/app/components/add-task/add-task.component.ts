import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();

  text:string = "";
  day:string = "";
  reminder:boolean=false;
  showAddTask: boolean = false;
  suscription: Subscription;

  constructor(
    private uiService:UiService
  ) { 
    this.suscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){
      alert("¿Qué vas a guardar si no anotás nada boludo?")
    }

    /* así se construye un objeto simplificando en JS Esto agrega una tarea que viene del formulario*/
    const {text, day, reminder} = this;
    const newTask = {text, day, reminder};
    this.onAddTask.emit(newTask);
  }


}
