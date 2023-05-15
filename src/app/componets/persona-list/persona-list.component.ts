import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PersonaModel } from 'src/app/models/persona/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent { 
 //este es el de mostrar
  @Input() personas:PersonaModel[]=[];
 //este elimina
  @Output() delete=new EventEmitter<number>();
  //est es qu elo edita
  @Output() update=new EventEmitter<PersonaModel>();

    
  constructor(
    private personaService:PersonaService
  ){}

  deleteItem(id:number):void{
    this.delete.emit(id);
  }
  updateItem(persona:PersonaModel){
    this.update.emit(persona);
  }

 
}
