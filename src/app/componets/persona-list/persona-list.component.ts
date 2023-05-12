import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PersonaModule,} from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent { 
 
  @Input() personas:PersonaModule[]=[];
  @Output() delete=new EventEmitter<number>();

    
  constructor(private personaService:PersonaService){
    
  }
  deleteItem(id:number):void{
    this.delete.emit(id);
  }

 
}
