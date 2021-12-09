import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonasService } from '../personas.service';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../foto';
@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css']
})
export class EditarPersonasComponent implements OnInit {
  public personaModel:any={
    id_persona:0,
    fotos:[],
    nombre: "",
    edad:0,
    ubicacion:"",
    acerca_de_mi:"",
    perfil:"",
  }
  fotoModel= new Foto("",0);
@ViewChild("foto", {
  read: ElementRef
}) foto: ElementRef | undefined;

  public fotoSeleccionada:string="";
 public indiceSeleccionado=0;
 public existe!:Boolean;
  constructor(private personaService:PersonasService,private activatedRoute:ActivatedRoute,private snackbar:MatSnackBar) { }

  async ngOnInit() {
    const id= this.activatedRoute.snapshot.paramMap.get("id");
    this.personaModel=await this.personaService.obtenerPersonasConFotosPorId(id!);
   console.log(this.personaModel.fotos[0].foto)
   this.fotoModel=this.personaModel.fotos[0];
   console.log(this.fotoModel);
  }

  async guardar(){
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
    if ((!this.personaModel.fotos[0].foto)) {
      return alert("Selecciona al menos una foto");
    }    if(archivos[0].name == this.personaModel.fotos[0].foto){
      return alert("misma imagen no se realizara la modificacon");
    }

    this.fotoModel.foto=archivos[0].name;

      this.personaService.guardarEdicionPersona(this.personaModel);

    this.personaService.guardarEdicionFoto(this.fotoModel);
    this.snackbar.open("Persona Editada", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });
  }

}
