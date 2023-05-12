import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PersonaListComponent } from './componets/persona-list/persona-list.component';
import { PersonaComponent } from './componets/persona/persona.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  exports:[
   
  ],
  
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaComponent,
    PersonaListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



