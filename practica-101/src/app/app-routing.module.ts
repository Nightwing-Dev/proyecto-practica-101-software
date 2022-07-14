import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{path: 'navbar', component: NavbarComponent},
{path: 'consulta', component: ConsultaComponent},
{path: 'main', component: MainComponent},
{path: '', redirectTo: '/main', pathMatch: 'full'},
{path:'formulario', component: FormularioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
