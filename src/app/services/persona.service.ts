import { Injectable } from '@angular/core';
import { PersonaModule } from '../models/persona/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private _httpClient: HttpClient
  ) { }

 
   
  urls: string = 'http://127.0.0.1:8000/api/personas/'
  traerPersonas() {
    return this._httpClient.get<PersonaModule[]>(this.urls);
  }

 
  borarPersonas(id:number): Observable <any>{
    return this._httpClient.delete(this.urls+id);
  }


  ingressarPersona(persona:PersonaModule){
    return this._httpClient.post<PersonaModule>(this.urls,persona)
  }
  

}