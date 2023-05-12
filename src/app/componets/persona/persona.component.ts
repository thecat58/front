import { Component, Input, Output,EventEmitter } from "@angular/core"; 
import { PersonaModule } from 'src/app/models/persona/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: PersonaModule = {
    id:0,
   nombre:'',
   codigo:0,
   descripcion:'',
    
  } ;
  @Output() delete:EventEmitter<number>=new EventEmitter();
  
  montrrIdPersona(){
    console.log(this.persona.id)
  }
  deleteItem():void{
    this.delete.emit(this.persona.id);
  }
 

}




