import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() texto: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }


}
