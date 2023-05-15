import { Component, Input, Output,EventEmitter } from "@angular/core"; 
import { PersonaModel } from "src/app/models/persona/persona.model";


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: PersonaModel = {
    id:0,
   nombre:'',
   codigo:0,
   descripcion:'',
    
  } ;
  @Output() delete:EventEmitter<number>=new EventEmitter();
  @Output() update = new EventEmitter<PersonaModel>();

  updateItem(){
    this.update.emit(this.persona);
  }
  deleteItem():void{
    this.delete.emit(this.persona.id);
  }
 
  


}




