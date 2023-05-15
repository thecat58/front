import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { PersonaModel } from './models/persona/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//se inicializA PARA EL ngModel
  nombre:string=''; 
  codigo:number=0;
  descripcion:string='';
  
  guardar:boolean=true;
//esro añade los objetos 
  persona:PersonaModel={
    nombre:'',
    codigo:0,
    descripcion:''
  }
  personas: PersonaModel[]=[];
  
  constructor(
    private _personaService:PersonaService
    ) {}

  ngOnInit(): void {
    this.getPersonas();
  }
//trae todo los datos de las personas 
  getPersonas(){
    this._personaService.traerPersonas().subscribe(personas=>{
      this.personas=personas;
    });
  }
  
  //elimina persona
  deletePersona(id: number): void {
    this._personaService.borarPersonas(id).subscribe(()=> {
        this.getPersonas();
    });
  }
//añade las personas
  postPersona(){
    this.persona.nombre=this.nombre
    this.persona.codigo=this.codigo
    this.persona.descripcion=this.descripcion
    this._personaService.ingressarPersona(this.persona).subscribe(()=>{
      this.getPersonas();
      this.reset();
    });
  }
  //est etrae el objeto con lo que trae persona y se añade con put 
  editarPersona(persona:PersonaModel){
    this.guardar=false;
    this.persona.id=persona.id;
    this.nombre=persona.nombre;
    this.codigo=persona.codigo;
    this.descripcion=persona.descripcion;
  }
 //este actualiza
  putPersona(persona:PersonaModel){
    persona.nombre=this.nombre;
    persona.codigo=this.codigo;
    persona.descripcion=this.descripcion;
    this._personaService.actualizarPersona(this.persona).subscribe(()=>{
      this.getPersonas();
      this.reset();
      this.guardar=true;
    })
  }
  reset(){
    this.nombre='';
    this.codigo=0;
    this.descripcion='';
    this.persona={
      nombre:'',
      codigo:0,
      descripcion:''
    }
  }
}