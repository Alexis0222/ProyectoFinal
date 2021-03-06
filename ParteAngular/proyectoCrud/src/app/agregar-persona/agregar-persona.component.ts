import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Foto } from '../foto';
@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent implements OnInit {
personaModel= new Persona(0,"",0,"","","");



@ViewChild("foto", {
  read: ElementRef
}) foto: ElementRef | undefined;


constructor(
private  personaService:PersonasService,private snackbar:MatSnackBar
  ) { }
  public imagenconfirmacion=false;

  ngOnInit(): void {
  }
  async guardar() {
    if (!this.personaModel.nombre) {
      return alert("Escribe un nombre");
    }
    if (!this.personaModel.edad) {
      return alert("Escribe la edad");
    }
    if (!this.personaModel.ubicacion) {
      return alert("Escribe su ubicacion");
    }
    if (!this.personaModel.acerca_de_mi) {
      return alert("Algo relacionado de usted");
    }
    if (!this.personaModel.perfil) {
      return alert("Algo que mencionar en su perfil");
    }
    let archivos = this.foto!.nativeElement.files;
    if (!archivos.length) {
      return alert("Selecciona al menos una foto");
    }
    this.imagenconfirmacion = true;
    const idPersonaGuardada = await this.personaService.agregarPersona(this.personaModel);
    console.log(archivos[0].name);
console.log(archivos[0]);

 const fd = new FormData();

   for (let x = 0; x < archivos.length; x++) {
     fd.append(`foto_${x}`, archivos[x])

    }
    fd.append("id_persona", idPersonaGuardada);
    const respuesta = await this.personaService.agregarFotosDePersona(fd);

    this.snackbar.open("persona guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.imagenconfirmacion = false;
    this.personaModel= new Persona(0,"",0,"","","");

    this.foto!.nativeElement.value = "";
  }
}
