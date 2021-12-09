import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { environment } from 'src/environments/environment';
import { PersonasService } from '../personas.service';
import { ActivatedRoute } from '@angular/router';
import { Puntaje } from '../puntaje';
@Component({
  selector: 'app-detalle-de-persona',
  templateUrl: './detalle-de-persona.component.html',
  styleUrls: ['./detalle-de-persona.component.css']
})
export class DetalleDePersonaComponent implements OnInit {
 public persona:any={
   id_persona:0,
   fotos:[],
   nombre: "",
   edad:0,
   ubicacion:"",
   acerca_de_mi:"",
   perfil:"",
 }
public puntaje:any={
id_persona:0,
likes:0,
dislikes:0,
}
 public fotoSeleccionada:string="";
 public indiceSeleccionado=0;
 public existe!:Boolean;
  constructor(private PersonasService:PersonasService,private activatedRoute:ActivatedRoute) { }



public resolverFoto(foto:string){
  const baseUrl=environment.imagenUrl;
  return `${baseUrl}foto_persona/${foto}`;
}

async ngOnInit() {
  const id= this.activatedRoute.snapshot.paramMap.get("id");
  this.persona=await this.PersonasService.obtenerPersonasConFotosPorId(id!);
  this.puntaje=this.persona.like[0];

  console.log(this.puntaje);

  if(this.persona.fotos.length>=0){
    this.seleccionarImagen(0);
  }
}
public seleccionarImagen(indice:number){
  this.indiceSeleccionado=indice;
  // Agregar variable de foto
  this.fotoSeleccionada=this.persona.fotos[this.indiceSeleccionado].foto;
}
public aumentarlikes(like:Puntaje){
  like.likes=like.likes+1;
  this.PersonasService.actualizarPuntaje(like);
}
public aumentardislikes(like:Puntaje){
  like.dislikes=like.dislikes+1;
  this.PersonasService.actualizarPuntaje(like);
}

}
