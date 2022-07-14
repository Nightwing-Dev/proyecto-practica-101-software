import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { MainComponent } from './main/main.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConsultaComponent,
    MainComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
