import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import {MatCardMdImage, MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSliderModule} from '@angular/material/slider';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { DetalleDePersonaComponent } from './detalle-de-persona/detalle-de-persona.component';
import { TarjetaPersonaComponent } from './tarjeta-persona/tarjeta-persona.component';
import { AgregarPersonaComponent } from './agregar-persona/agregar-persona.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PersonasComponent,
    DetalleDePersonaComponent,
    TarjetaPersonaComponent,
    AgregarPersonaComponent,
    LoadingButtonComponent,
    EditarPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
