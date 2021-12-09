import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public personas=[];
  public columnas=['nombre','edad','ubicacion','eliminar','editar']
  constructor(private router: Router, private PersonasService: PersonasService) { }

  async eliminar(persona:Persona) {
    if (!confirm("¿Realmente lo quieres eliminar?")) {
      return;
    }
    await this.PersonasService.eliminarPersona(persona.id_personas);
    await this.obtenerPersonas();
  }

  async ngOnInit() {
    await this.obtenerPersonas();
  }

  async obtenerPersonas() {
    this.personas = await this.PersonasService.obtenerPersonas();
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/personas/agregar");
  }
    editar(persona:Persona){
      this.router.navigate(["/persona/editar/",persona.id_personas]);}

}
