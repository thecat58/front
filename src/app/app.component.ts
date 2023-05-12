import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PersonaModule} from './models/persona/persona';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front';
 
  nombre='';
  codigo=0;
  descripcion='';


  personas: PersonaModule[]=[];
  
  constructor(
    private _personaService:PersonaService
    ) {}

  ngOnInit(): void {
    this.getPersonas();
    
    
  }

  getPersonas(){
    this._personaService.traerPersonas().subscribe(personas=>{
      this.personas=personas;
      
    });
  }
  
  deletePersona(id: number): void {
    this._personaService.borarPersonas(id).subscribe(()=> {
        this.getPersonas();
      
    });
  }

  postPersona(persona:any){
    console.log(this.postPersona,'hola');
    this._personaService.ingressarPersona(persona).subscribe(()=>{
      this.getPersonas();
      this.nombre
      this.codigo
      this.descripcion
      
    });

  }

 
}