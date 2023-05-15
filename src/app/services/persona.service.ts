import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaModel } from '../models/persona/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private _httpClient: HttpClient
  ) { }

 
   
  urls: string = 'http://127.0.0.1:8000/api/personas/'
  traerPersonas() {
    return this._httpClient.get<PersonaModel[]>(this.urls);
  }

 
  borarPersonas(id:number): Observable <any>{
    return this._httpClient.delete(this.urls+id);
  }


  ingressarPersona(persona:PersonaModel){
    return this._httpClient.post<PersonaModel>(this.urls,persona)
  }
  actualizarPersona(persona:PersonaModel){
    console.log(persona.id)
    const url = this.urls+persona.id;
    return this._httpClient.put<PersonaModel>(url,persona);
  }

}