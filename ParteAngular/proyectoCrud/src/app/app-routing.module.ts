import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
import { AgregarPersonaComponent } from './agregar-persona/agregar-persona.component';
import { DetalleDePersonaComponent } from './detalle-de-persona/detalle-de-persona.component';
const routes: Routes = [

  {path: 'personas', component: PersonasComponent},
  {path: 'persona/:id', component: DetalleDePersonaComponent},
  {path: 'personas/agregar', component: AgregarPersonaComponent},
  {path: 'persona/editar/:id', component: EditarPersonasComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', redirectTo: "/usuarios", pathMatch: "full"},
  {path: '**', redirectTo: "/usuarios"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
